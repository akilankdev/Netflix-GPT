
import { useEffect } from "react";
import UserIcon from "./UserIcon";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LANG_CONFIG, NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/userConfigSlice";
import lang from "../utils/languageConstants";

const Header = ({ showOtherHeaderElements }) => {
  const langKey = useSelector((store) => store.userConfig.langValue);
  const viewGptSearch = useSelector((store) => store.gpt?.viewGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGptSearchClick = () => {
    // Toggle between GPT Search and Browse page
    dispatch(toggleGptSearchPage());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean up Firebase authentication listener
    return unsubscribe;
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-8 py-4 bg-gradient-to-b from-black flex flex-col sm:flex-row items-center justify-between gap-3">

      {/* Netflix Logo */}
      <img
        src={NETFLIX_LOGO}
        alt="Netflix logo"
        className="w-36 sm:w-44 py-2"
      />

      {/* Header Controls */}
      <div className="flex items-center justify-end gap-2 w-full sm:w-auto">

        {/* Language Selector - Available on all pages */}
        <select
          value={langKey}
          className="h-9 px-2 rounded-md bg-blue-900 text-white cursor-pointer"
          onChange={(e) => dispatch(changeLanguage(e.target.value))}
        >
          {LANG_CONFIG.map((language) => (
            <option
              key={language.identifier}
              value={language.identifier}
            >
              {language.name}
            </option>
          ))}
        </select>

        {/* These elements appear only on Browse and GPT Search pages */}
        {showOtherHeaderElements && (
          <div className="flex items-center gap-2">

            {/* GPT Search Toggle Button */}
            <button
              onClick={handleGptSearchClick}
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white px-3 py-2 rounded-md whitespace-nowrap"
            >
              {viewGptSearch
                ? lang[langKey].common.home
                : lang[langKey].mainPage.gptSearchBtn}
            </button>

            {/* User Profile */}
            <UserIcon />

          </div>
        )}

      </div>
    </div>
  );
};

export default Header;
