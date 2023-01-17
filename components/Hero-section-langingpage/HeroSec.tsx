import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apple from '../../public/images/svgexport-5.svg'
import playstore from '../../public/images/svgexport-6.svg'
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
        <div className='flex'>
           <div className='border font-[700] text-[#3813A0] rounded-md border-[#3813A0] w-[100px] h-[45px]'>hello</div>
           <div className='border font-[700] text-[#3813A0] rounded-md border-[#3813A0] w-[100px] h-[45px]'>hello</div>
        </div>
       </div>
      </div>
    </>
  )
}

export default HeroSec