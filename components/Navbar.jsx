import React from 'react'

const Navbar = () => {
  return (
        <>
            <nav className='flex bg-[#1640d0] items-center h-[100px] gap-[200px] justify-center fixed w-[100%]' >
                <p className='text-[28px] text-white'>LogoMarket</p>
                <ul className='flex text-white gap-[50px] text-[18px]'>
                    <li><a href="" >Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Register</a></li>
                    <li><a href="">Another Sites</a></li>
                    <li><a href="">PiPi</a></li>
                </ul>
                <div className="h-[70px] w-[70px] bg-[white] rounded-[50px]"></div>
            </nav>
        </>
  )
}

export default Navbar