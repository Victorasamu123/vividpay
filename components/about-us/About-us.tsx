import Image from 'next/image'
import React from 'react'
import icon from "../../public/images/svgexport-190.svg"
import phoneIm from '../../public/images/more-services-phone.webp'
const AboutUs = () => {
  return (
    <>
     <div className='lg:flex md:flex block bg-new mt-20'>
      <div className='lg:ml-[100px] md:ml-[100px] ml-0 lg:text-justify md:text-justify text-center lg:w-1/2 md:w-1/2 w-full mt-28'>
        <div className='flex'>
        <hr className='bg-[#D9D1F2] w-[100px] h-[7px] mt-2 rounded'/><span className='text-[18px] font-bold ml-4 font-apple text-[#3734A9]'>About-Us</span>
        </div>
        <h1 className='lg:text-[48px] md:text-[48px] text-[30px] font-medium text-[#220C60] font-apple'>About Vividpay</h1>
        <p className='text-[16px] text-[#525254] font-normal mt-3'>Vividpay is a digital wallet that lets you send and receive money,<br/>store money in a pin, sell your airtime and get cash, pay with your <br/>Dollar Card and pay for other utilities.</p>
        <div className='flex mt-6 w-[200px] h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md
         text-[white] p-3 font-apple'>
          <button className='mr-4'>Get Started</button><Image src={icon} alt='' className='w-auto transition-all duration-1000 hover:translate-x-6'></Image>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-8 lg:text-justify md:text-justify text-center p-3'>
        <Image src={phoneIm} alt='' className='lg:w-[300px] md:w-[300px] w-auto'></Image>
      </div>
     </div>
    </>
  )
}

export default AboutUs;