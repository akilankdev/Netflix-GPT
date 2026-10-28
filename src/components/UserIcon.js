import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const UserIcon = () => {
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

  return (
    <div className="relative justify-items-end pr-10 t-5">
      {
        //If user exists but photoURL is null, the image element will still render. If you want to handle that too, you can use user?.photoURL
        user?.photoURL && (
          <div className="flex cursor-pointer items-center" onClick={handleIconClick}>
            <img
              src={user.photoURL}
              alt="user-icon"
              className="w-8 rounded-sm"
              
            />
            {/* SVG Copied from lucide react site */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        )
      }
      {isIconClicked ? (
        <div
          className="absolute right-20 top-10 bg-black rounded-sm text-white p-2 font-bold whitespace-nowrap cursor-pointer"
          onClick={handleSignout}
        >
          Sign Out
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserIcon;
