import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
          alt="background-image"
        ></img>
      </div>
      <form className="relative bg-black p-12">
        <input type="text" placeholder="Email address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
      </form>

      
    </div>
  );
};

export default Login;
