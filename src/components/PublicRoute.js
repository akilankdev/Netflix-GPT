import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { Navigate } from 'react-router-dom';

//Purpose:SHouldnt let authenticated users to navigate to Login page when they try to go to / route.Instead redirect them to browse page.
const PublicRoute = ({children}) => {
  const [user,setUser] = useState(undefined);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
    });
    return unsubscribe;
  },[]);
  //Still havent checked if user is already authenticated or not.
  if(user === undefined) {
    return (
      <div className="bg-black text-white font-bold flex items-center justify-center min-h-screen">
        Checking Authentication...
      </div>
    );
  }
  //if already athenticated,the redirect them to browse page.
  if(user) {
    return <Navigate to="/browse" replace />
  } 
  //if not then redirect them to login page.
  return children;
}

export default PublicRoute