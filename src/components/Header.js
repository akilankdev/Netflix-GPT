import React from 'react'
import UserIcon from './UserIcon'

const Header = ({showUserIcon}) => {

  return (
    <div className="absolute w-screen z-10 px-8 py-5 bg-gradient-to-b from-black flex justify-between">
      <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg" alt="netflix-logo" className="w-44"></img>
      {showUserIcon? <UserIcon /> : ""}
    </div>
    
  )
}
//Akilan@Netflix231026
export default Header