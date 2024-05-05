import React from 'react'
import '../index.css'

function Header() {
  return (
<div className='w-full h-16 bg-reddit border-b-2 border-gray-500 flex items-center'>
  <label className='pl-5'><img src="./src/assets/Seal_of_the_International_State_College_of_the_Philippines (Custom).png"/></label>
  <label className='text-white pl-2 text-2xl font-serif'>International State College of the Philippines</label>
  <div className="flex-grow"></div>
</div>

  );
}

export default Header