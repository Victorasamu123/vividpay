import React, { useState,useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Headers from '@/components/header.tsx/headers';
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import SideBar from '@/components/home/sidebar';
import ThirdBar from '@/components/home/thirdbar';
import mtn from "../../public/images/MTN-logo-459AAF9482-seeklogo.com.png"
import airtel from "../../public/images/airtel.png"
import glo from "../../public/images/1630540.png"
import ninemobile from "../../public/images/download.jpg"
import myAmountForData from '@/components/amount';
const BuyData = () => {
  return (
    <>
       <Head>
       <title>Buy Airtime - Vividpay</title>
       <meta name="description" content="Page for purchaing airtime" />
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
       <div className='bg-white lg:w-[50%] md:w-[90%] w-[90%] h-[50px] mb-5 flex justify-center items-center rounded-xl shadow-sm'>
            <h1 className='text-[26px] font-apple  font-medium'>Buy Data</h1>
        </div>
        <div className='w-[100%] flex justify-center items-center flex-col'>
        <div className='flex justify-between items-center lg:w-[50%] md:w-[90%] w-[90%] mb-5'>
           <Image src={mtn} alt='' width={60}/>
           <Image src={airtel} alt='' width={60}/>
           <Image src={glo} alt='' width={60}/>
           <Image src={ninemobile} alt='' width={60}/>
        </div>
        <input type="text" className='lg:w-[50%] md:w-[90%] w-[90%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-5' placeholder='Phone number should be at least 10 characters'/>
         <select name="" id="" className='lg:w-[50%] md:w-[90%] w-[90%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-5'></select>
        </div>
       </div>
         {/* {third section of dashboard} */}
        <ThirdBar/>
       </div>
    </section>
    </main>
    </>
  )
}

export default BuyData;