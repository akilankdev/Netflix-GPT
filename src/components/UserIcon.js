import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserIcon = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user.photoURL);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  //Signout Logic,Redux store will be automatically dispatch(removeUser()) updated by onAuthStateChanged().So we dont need to do that here.
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //https://tse3.mm.bing.net/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?r=0&pid=Api&h=220&P=0 => the URL of netflix user profilepic
  return (
    <div className="relative justify-items-end pr-10 t-5">
      {user && (
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
