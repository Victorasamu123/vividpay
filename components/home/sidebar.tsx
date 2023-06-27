import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import iconb from "../../public/images/svgexport-14.svg"
import Headers from '@/components/header.tsx/headers';
import dashboard from '../../public/images/dashboard images/svgexport-8.svg'
import cashpin from '../../public/images/dashboard images/svgexport-13.svg'
import cards from '../../public/images/dashboard images/svgexport-10.svg'
import transactios from '../../public/images/dashboard images/svgexport-11.svg'
import profile from '../../public/images/dashboard images/svgexport-12.svg'
import logout from '../../public/images/dashboard images/svgexport-3.svg'
import phone from "../../public/images/phone-service1.webp"
import naira1 from '../../public/images/dashboard images/svgexport-14.svg'
import naira2 from '../../public/images/dashboard images/svgexport-15.svg'
import naira3 from '../../public/images/dashboard images/svgexport-16.svg'
import rightArrow from "../../public/images/dashboard images/svgexport-17.svg"
import rightArrowblue from "../../public/images/dashboard images/svgexport-18.svg"
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import axios from 'axios';
import { useRouter } from 'next/router';
const SideBar = () => {
  return (
  <>
    <div id='one' className='lg:bg-[#FFFFFF] lg:w-[14%] lg:h-[528px] lg:ml-[6%] lg:mt-[2%] lg:rounded-xl lg:inline md:hidden hidden'>
         <div className='w-full h-[52px] bg-[#623ECB] rounded-tr-xl rounded-tl-xl pt-[14px] pl-4'>
            <Link href='' passHref className='flex'>
             <Image src={dashboard} alt=''></Image>
             <p className='text-[#FFFFFF] text-[16px] font-sans font-semibold ml-[10px]'>Dashboard</p>
            </Link>
         </div>
         <div className='w-full h-[52px] pt-[14px] pl-4 hover:bg-[#F3EFFF] mt-2'>
            <Link href='' passHref className='flex'>
             <Image src={cashpin} alt='' width={25}></Image>
               <p className='text-[16px] font-sans font-medium ml-[10px] mt-1 text-[#525254]'>Cashpin</p>
            </Link>
         </div>
         <div className='w-full h-[52px] pt-[14px] pl-4 hover:bg-[#F3EFFF] mt-2'>
            <Link href='' passHref className='flex'>
             <Image src={cards} alt='' width={25}></Image>
               <p className='text-[16px] font-sans font-medium ml-[10px] mt-1 text-[#525254]'>Cards</p>
            </Link>
         </div>
         <div className='w-full h-[52px] pt-[14px] pl-4 hover:bg-[#F3EFFF] mt-2'>
            <Link href='' passHref className='flex'>
             <Image src={transactios} alt='' width={25}></Image>
               <p className='text-[16px] font-sans font-medium ml-[10px] mt-1 text-[#525254]'>Transactions</p>
            </Link>
         </div>
         <div className='w-full h-[52px] pt-[14px] pl-4 hover:bg-[#F3EFFF] mt-2'>
            <Link href='' passHref className='flex'>
             <Image src={profile} alt='' width={25}></Image>
               <p className='text-[16px] font-sans font-medium ml-[10px] mt-1 text-[#525254]'>Profile</p>
            </Link>
         </div>
         <div className='w-full h-[52px] pt-[14px] pl-4 hover:bg-[#F3EFFF] mt-2 mb-2'>
            <Link href='' passHref className='flex'>
             <Image src={logout} alt='' width={25}></Image>
               <p className='text-[16px] font-sans font-medium ml-[10px] mt-1 text-[#525254]'>Logout</p>
            </Link>
         </div>
         <div className=' flex justify-center'>
         <div className='bg-[#9672FF] w-[93%] h-[160px] rounded-xl flex justify-center'>
            <Image src={phone} alt='' width={100}></Image>
         </div>
         </div>
       </div>
  </>
     
  )
}

export default SideBar;