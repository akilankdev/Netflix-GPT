import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  
  // Wait until Firebase checks authentication
  if (user === undefined) {
    return (
      <div className="bg-black text-white font-bold flex items-center justify-center min-h-screen">
        Checking Authentication...
      </div>
    );
  }
  //if user is unauthenticated,then user is null
  if (!user) {
    //'replace' replaces the current history entry instead of adding another one.This prevents the browser's Back button from simply returning to the unauthorized protected route.
    return <Navigate to="/" replace />;
  }

  // Render the requested component
  return children;
};

export default ProtectedRoute;
