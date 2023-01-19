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
      <div className='flex bg-[#FFF7F2]'>
       <div className='w-1/2'>
        <p className='font-apple text-[30px] font-medium text-[#525254] mt-20 ml-[89px]'>The Most Unique Digital Wallet</p>
        <div className='ml-[89px] text-[56px] font-bold text-[#220C60] mt-3'>
        Not Just Another Payment App
        </div>
        <div className='ml-[89px] text-[16px] font-apple font-normal mt-4'>
        We know everyone is tired of new payment apps, but what we've built is VERY UNIQUE. It's fresh, it's new, it's different. Tribapay is a digital wallet that lets you send and receive money, store money in a pin, sell your airtime and get cash, pay with your Dollar Card and pay for other utilities.
        </div>
        <div className='ml-[89px] mt-[28px] flex'>
          <Link href='/' passHref><Image src={apple} width={140} height={100} alt={"apple_stor"}></Image></Link>
          <Link href='/' passHref><Image src={playstore} width={140} height={100} alt={"apple_stor"} className="ml-10"></Image></Link>
        </div>
       </div>
       <div className='w-1/2'>
        <div className='flex ml-60 mt-20'>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#FBF5F0] transition-all duration-300 hover:scale-90'>
             <Image src={first} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#8E6704]'>Airtime to Cash</p>
             <div className='text-[13px] ml-3 mt-2 text-[rgb(82,82,84)]'>
              Sell your airtime and get cash and or buy airtime.
             </div>
           </div>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#F7F6FC] transition-all duration-300 hover:scale-90'>
           <Image src={second} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#4317C0]'>Cashpin</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Cashpin is a token that can be saved as cash.
             </div>
           </div>
        </div>
        <div className='flex ml-60 mt-6'>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#FBF1F1] transition-all duration-300 hover:scale-90'>
           <Image src={third} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#C02634]'>Send Funds</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Send money to an email address or any bank accounts.
             </div>
           </div>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#F0F7F4] transition-all duration-300 hover:scale-90'>
           <Image src={fourth} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#1E8A5E]'>Send Funds</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Fund your vividpay wallet and send money to anyone.
             </div>
           </div>
        </div>
        <div className='flex ml-60 mt-6'>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#F1F4FB] transition-all duration-300 hover:scale-90'>
           <Image src={fifth} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#013AC0]'>Pay bills</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Pay electricity, TV subcription, data and more bills.
             </div>
           </div>
           <div className='rounded-lg w-[150px] h-[170px] shadow-2xl mr-7 bg-[#FEF5FF] transition-all duration-300 hover:scale-90'>
           <Image src={six} alt='' width={40} height={40} className='ml-3 mt-3'/>
             <p className='font-apple font-medium ml-3 mt-3 text-[#AE00BB]'>Get cards</p>
             <div className='text-[13px] ml-3 mt-2 text-[#525254]'>
              Get virtual Naira and dollar card in seconds.
             </div>
           </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default HeroSec