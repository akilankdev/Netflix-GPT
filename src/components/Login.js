import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import Footer from "./Footer";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import DisclaimerPopup from "./DisclaimerPopup";

const Login = () => {
  const dispatch = useDispatch();
  //localStorage is used to prevent the disclaimer from showing again if we signout or login component reloads
  const show = localStorage.getItem("disclaimerAccepted")? false : true;
  const [showDisclaimer, setShowDisclaimer] = useState(show);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value,
    );
    //If validation passes,null will be set for the errorMessage.
    setErrorMessage(message);
    //if email or pw input is not valid then dont run SignIn or SignUp logic.
    if (message) return;

    if (!isSignInForm) {
      try {
        //SIGNUP logic
        // 1. Create a new user
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        // 2. Update the user's profile
        const user = userCredentials.user;
        await updateProfile(user, {
          displayName: name.current.value,
          //akilankdev github profile pic,just hard coded.
          photoURL:
            "https://avatars.githubusercontent.com/u/210964858?v=4&size=64",
        });
        // 3. Dispatch the user details to Redux
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
      } catch (error) {
        // Handle errors from either Firebase operation
        setErrorMessage(error.message);
      }
    } else {
      //Sign In logic
      try {
        //1.Sign in
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
      } catch (error) {
        //catch errors during sign in
        setErrorMessage(error.message);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    //https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg
    <div className="flex flex-col min-h-screen">
      <Header showUserIcon={false} />
      <main className="flex-1 relative">
        <div className="absolute inset-0">
          <img
            src="/MovieCollage.png"
            alt="background-image"
            className="w-full h-full object-cover "
          ></img>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-10 w-full max-w-md
                mx-4 sm:mx-auto
                bg-black/70 p-6 sm:p-10 rounded-lg mt-32"
        >
          <h1 className="font-bold text-3xl mb-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {
            //If its a SignUp form,enter name as a input
            !isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-4 my-4 bg-gray-600"
              />
            )
          }

          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="w-full p-4 my-4 bg-gray-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-600"
          />
          <p className="text-red-500 font-bold text-xl">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="w-full p-4 my-6 text-xl bg-blue-700 rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer p-4 font-bold text-blue-300"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "Don't have an account? Sign Up here"
              : "Already registered? Sign In here"}
          </p>
        </form>
      </main>
      <Footer />

      {showDisclaimer && (
        <DisclaimerPopup onContinue={() =>{
          localStorage.setItem("disclaimerAccepted","true");
          setShowDisclaimer(false)}} />
      )}
    </div>
  );
};

export default Login;
