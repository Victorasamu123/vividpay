import Image from 'next/image'
import React from 'react'
import icon from "../../public/images/svgexport-190.svg"
const AboutUs = () => {
  return (
    <>
     <div className='flex bg-new mt-20'>
      <div className='ml-[100px] w-1/2 mt-24'>
        <div className='flex'>
        <hr className='bg-[#D9D1F2] w-[100px] h-[7px] mt-2 rounded'/><span className='text-[18px] font-bold ml-4 font-apple text-[#3734A9]'>About-Us</span>
        </div>
        <h1 className='text-[48px] font-medium text-[#220C60] font-apple'>About Vividpay</h1>
        <p className='text-[16px] text-[#525254] font-normal mt-3'>Vividpay is a digital wallet that lets you send and receive money,<br/>store money in a pin, sell your airtime and get cash, pay with your <br/>Dollar Card and pay for other utilities.</p>
        <div className='flex mt-6 w-[200px] h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md
         text-[white] p-3 font-apple'>
          <button className='mr-4'>Get Started</button><Image src={icon} alt='' className='transition-all duration-300 hover:translate-x-6'></Image>
        </div>
      </div>
      <div className='w-1/2'></div>
     </div>
    </>
  )
}

export default AboutUs;