import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apple from '../../public/images/svgexport-5.svg'
import playstore from '../../public/images/svgexport-6.svg'
import first from '../../public/images/svgexport-7.svg'
import second from '../../public/images/svgexport-8.svg'
import third from '../../public/images/svgexport-9.svg'
import fourth from '../../public/images/svgexport-10.svg'
import fifth from '../../public/images/svgexport-11.svg'
import six from "../../public/images/svgexport-12.svg"
const HeroSec = () => {
  return (
    <>
      <div className='lg:flex md:flex block bg-[#FFF7F2] pb-10'>
       <div className='lg:w-1/2 md:w-1/2 w-full lg:pt-0 md:pt-0 pt-10'>
        <p className='font-apple lg:text-[30px] md:text-[30px] text-[25px] font-medium text-[#525254] lg:mt-20 md:mt-20 lg:ml-[89px] md:ml-[89px] text-center lg:text-justify md:text-justify'>The Most Unique Digital Wallet</p>
        <div className='lg:ml-[89px] md:ml-[89px] text-center lg:text-start md:text-start lg:text-[56px] md:text-[40px] text-[40px] font-bold text-[#220C60] mt-3 font-apple'>
        Not Just Another Payment App
        </div>
        <div className='lg:ml-[89px] md:ml-[89px] text-center lg:text-justify md:text-justify lg:text-[16px] md:text-[16px] text-[16px] font-apple font-normal lg:p-0 md:p-0 p-4'>
        We know everyone is tired of new payment apps, but what we've built is VERY UNIQUE. It's fresh, it's new, it's different. Tribapay is a digital wallet that lets you send and receive money, store money in a pin, sell your airtime and get cash, pay with your Dollar Card and pay for other utilities.
        </div>
        <div className='lg:ml-[89px] md:ml-[89px] flex text-center lg:text-justify md:text-justify p-6 lg:p-0 md:p-0 lg:mt-[28px] md:mt-[28px] mt-[0px]'>
          <Link href='/' passHref><Image src={apple} width={140} height={100} alt={"apple_stor"}></Image></Link>
          <Link href='/' passHref><Image src={playstore} width={140} height={100} alt={"apple_stor"} className="lg:ml-10 md:ml-10 ml-2"></Image></Link>
        </div>
       </div>
       <div className='lg:w-1/2 md:w-1/2 w-full'>
        <div className='lg:flex md:flex flex justify-center items-center lg:ml-60 md:ml-60 ml-0 mt-20'>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#FBF5F0] transition-all duration-300 hover:scale-90'>
             <Image src={first} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#8E6704]'>Airtime to Cash</p>
             <div className='text-[13px] ml-3 mt-2 text-[rgb(82,82,84)]'>
              Sell your airtime and get cash and or buy airtime.
             </div>
           </div>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#F7F6FC] transition-all duration-300 hover:scale-90'>
           <Image src={second} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#4317C0]'>Cashpin</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Cashpin is a token that can be saved as cash.
             </div>
           </div>
        </div>
        <div className='mt-6 lg:flex md:flex flex justify-center content-center lg:ml-60 md:ml-60 ml-0'>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#FBF1F1] transition-all duration-300 hover:scale-90'>
           <Image src={third} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#C02634]'>Send Funds</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Send money to an email address or any bank accounts.
             </div>
           </div>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#F0F7F4] transition-all duration-300 hover:scale-90'>
           <Image src={fourth} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#1E8A5E]'>Send Funds</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Fund your vividpay wallet and send money to anyone.
             </div>
           </div>
        </div>
        <div className='mt-6 lg:flex md:flex flex justify-center items-center lg:ml-60 md:ml-60 ml-0'>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#F1F4FB] transition-all duration-300 hover:scale-90'>
           <Image src={fifth} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#013AC0]'>Pay bills</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Pay electricity, TV subcription, data and more bills.
             </div>
           </div>
           <div className='rounded-lg w-[110px] h-[210px] lg:w-[150px] lg:h-[170px] shadow-2xl mr-7 bg-[#FEF5FF] transition-all duration-300 hover:scale-90'>
           <Image src={six} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#AE00BB]'>Get cards</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Get virtual Naira and dollar card in seconds.
             </div>
           </div>
        </div>
           <p className='lg:text-[30px] md:text-[25px] text-[18px] mt-4 font-bold text-[#E0E0E2] font-apple lg:ml-60 md:ml-60 ml-0 text-center lg:text-justify md:text-justify'>What Would You Like To Do?</p>
       </div>
      </div>
    </>
  )
}

export default HeroSec