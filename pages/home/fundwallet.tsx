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
import SideBar from '@/components/home/sidebar';
import ThirdBar from '@/components/home/thirdbar';
const Fundwallet = () => {
  return (
    <>
    <Head>
       <title>Fund Wallet - Vividpay</title>
       <meta name="description" content="Generated by create next app" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <main>
       <section className='w-full h-full bg-[#F1F1F1] pb-5'>  
       <Headers/>
       <div className='lg:flex md:block block'>
        <div className='lg:hidden md:flex flex md:items-center items-center md:mt-5 mt-5 md:ml-[5%] ml-[5%]'>
        <div className='mr-3'>
           <Image src={people} alt="" width={40} className='rounded-full'/>
         </div>
         <div className=''>
           <p className='text-[#535355] font-medium font-sans text-[14px]'>Hi, olu</p>
         </div>
        </div>
         {/* sidebar menu code */}
          <SideBar/>
       {/* middle account info code */}
       <div id='two' className='lg:mt-[2%] lg:w-[53%] lg:h-[600px] lg:ml-[2.3%] md:mt-[2%] md:w-[90%] md:h-[700px]  md:ml-[5%] mt-[2%] w-[90%] ml-[5%] h-[500px] rounded-xl flex justify-center flex-col items-center'>
         <h3 className='text-[30px] font-medium mb-4'>Fund Wallet</h3>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter amount to deposit'/>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' value="12355555" readOnly/>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-4' value="Asamu victor" readOnly/>
         <h3 className='text-[30px] font-medium mb-4'>Card Details</h3>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card expiry date'/>
         <input type="email" className='lg:w-[50%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter card CVV '/>
         <button className='block mt-[15px] lg:w-[50%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans'>Proceed</button>
         </div>
         {/* {third section of dashboard} */}
        <ThirdBar/>
       </div>
       </section>
     </main>
   </>
  )
}

export default Fundwallet;