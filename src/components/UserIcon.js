import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, LogOut } from "lucide-react";
import { toggleGptSearchPage } from "../utils/gptSlice";

const UserIcon = () => {
  const dispatch = useDispatch();
  const viewGptSearch = useSelector((store) => store.gpt?.viewGptSearch);
  const user = useSelector((store) => store.user);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  //Signout Logic,Redux store will be automatically dispatch(removeUser()) updated by onAuthStateChanged().So we dont need to do that here.
  const handleSignout = async () => {
    try {
      await signOut(auth);
      //signout success
    } catch (error) {
      console.log(error);
    }
  };

  const handleGptSearchClick = () => {
    //navigates btw search page and main page
    dispatch(toggleGptSearchPage());
  }

  return (
    <div className="relative justify-items-end pr-10 t-5">
      {
        //If user exists but photoURL is null, the image element will still render. If you want to handle that too, you can use user?.photoURL
        user?.photoURL && (
          <div className="flex">
            <button 
            onClick={handleGptSearchClick}
            className="bg-orange-500 text-white px-3 py-1 m-2 rounded-md mr-6">
              {viewGptSearch? "Back to Home": "GPT Search"}
            </button>
            <div
              className="flex cursor-pointer items-center"
              onClick={handleIconClick}
            >
              <img
                src={user.photoURL}
                alt="user-icon"
                className="w-8 rounded-sm"
              />
              <ChevronDown size={24} color="white" />
            </div>
          </div>
        )
      }
      {isIconClicked ? (
        <div
          className="absolute right-20 top-12 flex items-center gap-2 bg-black rounded-sm text-white p-2 font-bold whitespace-nowrap cursor-pointer"
          onClick={handleSignout}
        >
          <LogOut size={18} />
          Sign Out
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserIcon;
