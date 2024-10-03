import React from 'react'
import Image from 'next/image'
import fruk from '../public/fruk.jpg'

const Main = () => {
  return (
   <>
    <Image src={fruk} className='w-[100%] h-[600px]'></Image>
    <h1 className='flex justify-center text-[30px] bg-[#1640d0] text-[white] mt-[20px]'>Hello from Main component!</h1>
    <div className='flex justify-center text-[30px]  text-[#1640d0] mt-[20px] '>
         <button className='bg-[white] border-[2px] border-[#1640d0] rounded-[15px] p-[10px]'>Let's buy now!</button>
    </div>
   </>
  )
}

export default Main