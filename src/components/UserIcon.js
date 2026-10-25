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
    } catch(error) {
      console.log(error);
    }
  };

  //https://tse3.mm.bing.net/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?r=0&pid=Api&h=220&P=0 => the URL of netflix user profilepic
  return (
    <div className="relative justify-items-end pr-10 t-5">
      {
      //If user exists but photoURL is null, the image element will still render. If you want to handle that too, you can use user?.photoURL
      user?.photoURL && (
        <img
          src={user.photoURL}
          alt="user-icon"
          className="w-8 cursor-pointer rounded-sm"
          onClick={handleIconClick}
        />
      )}
      {isIconClicked ? (
        <div
          className="absolute right-20 top-7 bg-black rounded-sm text-white p-2 font-bold whitespace-nowrap cursor-pointer"
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
