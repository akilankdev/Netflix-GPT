import React, { useEffect } from 'react'
import UserIcon from './UserIcon'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Header = ({showUserIcon}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
          //you should include [dispatch] because:
          //- It removes the ESLint warning.
          // - It follows React's dependency rules.
          // - It remains correct if the dispatch reference ever changes, such as if the Redux store is replaced.
          dispatch(removeUser());
          navigate("/");
        }
      });
      //returning unsubscribe cleans up the Firebase authentication listener when the component unmounts. This is good practice and helps prevent duplicate listeners.
      return unsubscribe;
    }, [dispatch,navigate]);
  return (
    <div className="absolute w-screen z-10 px-8 py-5 bg-gradient-to-b from-black flex justify-between">
      <img src="/STREAMGPTlogo.png" alt="netflix-logo" className="w-44"></img>
      {showUserIcon? <UserIcon /> : ""}
    </div>
    //https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg
  )
}
//Akilan@Netflix231026
export default Header