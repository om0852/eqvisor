import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[12vh] flex flex-row items-center justify-between px-8 bg-gray-900 text-white'>
      <div className='flex gap-8 '>
        <span className='text-xl'><strong>EQVISOR</strong></span>
        <ul className='flex gap-6'>
            <li>Home</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-white text-black py-[10px] px-6 rounded-full'>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
