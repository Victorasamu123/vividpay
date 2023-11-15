import React, { useState,useEffect } from 'react'
import Link from 'next/link';
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
import EnterpinAirtime from '../modals/airtimemodal/enterpin';
import Info from '../modals/info';

const Airtime = () => {
   const router = useRouter()
   const tokenverificationEndPoint="http://localhost:5000/auth/tokenverification"
   const userDetails = "http://localhost:5000/dashboard/getUser"
    const [openPin, setOPenPin] = useState<boolean>(false);
    const [pinDone, setpinDone] = useState<boolean>(false);
    const [Loading, setLoading]= useState<boolean>(true);
    let token= ""
    let userId=""
    let Email=""
    const priceObject = { fif:50, hun:100, twoh:200, fivh:500, onet:1000, twot:2000 }
    useEffect(() => {
      verifyToken()
      getUserDetails()
   }, [])
   
   const verifyToken = async()=>{
      let tokeen = localStorage.token;
      let userID = localStorage.userId;
      let emails = localStorage.Email;
      token=tokeen
      userId=userID
      Email=emails
    await axios.get(tokenverificationEndPoint,{
       headers:{
           "Authorization" : `Bearer ${token}`,
           "Content-Type": "application/json",
           "Accept": "application/json"
       }
    }).then((result)=>{
       if(!result.data.status){
          localStorage.removeItem("token")
          localStorage.removeItem("userId")
          localStorage.removeItem("Email")
          router.push("/auth/signin")
       }
    }).catch((error)=>{
      console.log(error.message);
    });
   }
   const getUserDetails = async()=>{
    let getObject = {userId}
    await axios.post(userDetails,getObject).then((result)=>{
       console.log(result.data.userDetails.Lastname);
       if(result.data.status === false){
          setLoading(true);
          setTimeout(() => {
            router.push("/auth/signin")
          }, 3000);
       }else{
          setLoading(false);
       }
    }).catch((err)=>{
       console.log(err);
    })
   }
    const handlePinOpen = ()=>{
        setOPenPin(true);
    }

    const handleClosePin = () =>{
        setOPenPin(false);
        setpinDone(true);
    }
     return (
    <>
     <Head>
       <title>Buy Airtime - Vividpay</title>
       <meta name="description" content="Page for purchaing airtime" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <main>
      {
         Loading ? <div className='text-[24px] font-apple font-medium'>Loading</div> 
         :
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
            <h1 className='text-[26px] font-apple  font-medium'>Buy Airtime</h1>
        </div>
        <div className='w-[100%] flex justify-center items-center flex-col'>
        <input type="text" className='lg:w-[50%] md:w-[90%] w-[90%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-5' placeholder='Phone number should be at least 10 characters'/>
        <div className='flex justify-between items-center lg:w-[50%] md:w-[90%] w-[90%] mb-5'>
           <Image src={mtn} alt='' width={60} className='border-[6px] border-[#623ECA]'/>
           <Image src={airtel} alt='' width={60}/>
           <Image src={glo} alt='' width={60}/>
           <Image src={ninemobile} alt='' width={60}/>
        </div>
        <div className='flex justify-between items-center lg:w-[50%] md:w-[90%] w-[90%] mb-5'>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.fif}</p>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.hun}</p>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.twoh}</p>
        </div>
        <div className='flex justify-between items-center lg:w-[50%] md:w-[90%] w-[90%] mb-5'>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.fivh}</p>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.onet}</p>
         <p className='bg-white w-[30%] h-[50px] flex justify-center items-center rounded-xl shadow-sm text-[26px] font-medium font-apple'>₦{priceObject.twot}</p>
        </div>
        <input type="text" className='lg:w-[50%] md:w-[90%] w-[90%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-5' placeholder='Enter amount to purchase'/>
        <button className='block lg:w-[50%] md:w-[90%] w-[90%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={handlePinOpen}>Proceed</button>
        </div>
        {openPin && <div className="fixed inset-0 bg-gray-800 opacity-50"></div>}
        <EnterpinAirtime isOpen={openPin} onClose={handleClosePin} setPinOpen={setOPenPin}/>
        <Info isOpen={pinDone} pinDone={pinDone} setpinDone={setpinDone}/>
       </div>
         {/* {third section of dashboard} */}
        <ThirdBar/>
       </div>
    </section>
}
    </main>
    </>
  )
}

export default Airtime;