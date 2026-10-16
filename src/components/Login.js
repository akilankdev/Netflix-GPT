import React,{useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
          alt="background-image"
        ></img>
      </div>
      <form className="w-3/12 my-36 mx-auto right-0 left-0 absolute bg-black p-12 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl mb-3">{isSignInForm ? "Sign In": "Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-4 my-4 bg-gray-600"
        />
        <input   
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-600"
        />
        <button className="w-full p-4 my-6 text-xl bg-red-700 rounded-lg">{isSignInForm?"Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer p-4 font-bold text-blue-300" onClick={toggleSignInForm}>{isSignInForm? "Don't have an account? Sign Up here" : "Already registered? Sign In here"}</p>
      </form>
    </div>
  );
};

export default Login;
