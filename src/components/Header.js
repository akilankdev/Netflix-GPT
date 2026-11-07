import React, { useEffect } from "react";
import UserIcon from "./UserIcon";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LANG_CONFIG, NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/userConfigSlice";

const Header = ({ showOtherHeaderElements }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewGptSearch = useSelector((store) => store.gpt?.viewGptSearch);
  const handleGptSearchClick = () => {
    //navigates btw search page and main page
    dispatch(toggleGptSearchPage());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //returning unsubscribe cleans up the Firebase authentication listener when the component unmounts. This is good practice and helps prevent duplicate listeners.
    //return in useEffect always run when the component unmounts
    return unsubscribe;
  }, [dispatch, navigate]);



  return (
    <div className="absolute w-full z-10 px-8 py-5 bg-gradient-to-b from-black flex justify-between flex-col sm:flex-row md:flex-row">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44 m-auto sm:m-2 py-3 sm:p-0"></img>
      <div className="flex items-center justify-between sm:gap-1">
        {showOtherHeaderElements ? (
          <>
            {viewGptSearch && (
              <select className="h-8 sm:mr-2 sm:px-2 sm:h-[50%] rounded-md bg-blue-600 text-white" onChange={(e)=> dispatch(changeLanguage(e.target.value))}>
                {LANG_CONFIG.map((language) => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
              </select>
            )}
            {!viewGptSearch && <div className=""></div>}
            <div className="flex items-center justify-between">
              <button
                onClick={handleGptSearchClick}
                className="bg-orange-500 text-white px-3 py-1 m-2 rounded-md mr-6 sm:mr-6"
              >
                {viewGptSearch ? "Back to Home" : "GPT Search"}
              </button>{" "}
              <UserIcon />{" "}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Header;
