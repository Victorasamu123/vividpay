import Image from 'next/image';
import React from 'react'
import emqil from "../../public/images/phone-service2.webp"
import icon from "../../public/images/svgexport-190.svg"
const Products = () => {
  return (
    <>
      <div className='flex bg-new mt-36'>
        <div className='bg-[#FEF1F2] w-[400px] text-center pt-16 pl-16 pr-16 pb-0 rounded-[40px] ml-[200px]'>
            <Image src={emqil} alt=''></Image>
        </div>
        <div className='lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 w-full mt-28'>
        <div className='flex'>
        <hr className='bg-[#D9D1F2] w-[100px] h-[7px] mt-2 rounded'/><span className='text-[18px] font-bold ml-4 font-apple text-[#3734A9]'>Our Services</span>
        </div>
        <h1 className='lg:text-[48px] md:text-[48px] text-[30px] font-medium text-[#220C60] font-apple'>Send Money To an<br />Email Address</h1>
        <p className='text-[16px] text-[#525254] font-normal mt-3'>Send money to any email address through Tribapay at no cost.<br />It's completely free.</p>
        <div className='flex mt-6 w-[200px] h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md
         text-[white] p-3 font-apple'>
          <button className='mr-4'>Get Started</button><Image src={icon} alt='' className='w-auto transition-all duration-1000 hover:translate-x-6'></Image>
        </div>
      </div>
      </div>
    </>
  )
}

export default Products;