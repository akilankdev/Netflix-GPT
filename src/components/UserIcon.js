import React, { useState } from 'react'

const UserIcon = () => {
  const [isIconClicked,setIsIconClicked] = useState(false);
  const handleIconClick = ()=>{
    setIsIconClicked(!isIconClicked);
  }

  return (
    <div className="relative justify-items-end pr-10 t-5" >
      <img src="https://tse3.mm.bing.net/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?r=0&pid=Api&h=220&P=0" alt="user-icon"
      className='w-8 cursor-pointer rounded-sm' onClick={handleIconClick}/>
      {isIconClicked ? <div className="absolute right-20 top-7 bg-black rounded-sm text-white p-2 font-bold whitespace-nowrap cursor-pointer">Sign Out</div> : "" }
    </div>
  );
}

export default UserIcon