import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import iconb from "../../public/images/svgexport-14.svg"
import dateIcon from "../../public/images/dashboard images/svgexport-1.svg"
import changeIcon from '../../public/images/dashboard images/svgexport-2.svg'
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import logout from '../../public/images/dashboard images/svgexport-3.svg'
const Headers = () => {
    const new_date :Date= new Date()
    const date : number = new_date.getDate()
    const year : number = new_date.getFullYear()
  // const [date, setdate]= useState(Date())
  console.log(date,year)
  return (
    <>
     <main> 
        <header className='bg-[#FFFFFF] w-full h-[85px] flex'>
          <div className='-mt-[30px] w-fit ml-10'>
            <Image src={iconb} alt='vividpay' width={250}></Image>
          </div>
          <div className='border-[1.4px] border-[#DADADC] h-fit w-fit text-center p-2 mt-[25px] rounded-lg text-[#535355] text-[14px] font-medium flex font-sans'>
            <Image src={dateIcon} alt=''></Image>
            <p className='ml-2'>{date}, {year}</p>
          </div>
          <div  className='border-[1.4px] border-[#DADADC] h-fit w-fit rounded-lg p-2 mt-[25px] ml-[780px] cursor-pointer'>
          <Image src={changeIcon} alt=''></Image>
          </div>
          <div className='mt-[25px] ml-10'>
            <Image src={people} alt="" width={40} className='rounded-full'/>
          </div>
          <div className='mt-[30px] ml-2'>
            <p className='text-[#535355] font-medium font-sans text-[14px]'>Hi, oluwajuwon</p>
          </div>
          <div className='border-[1.4px] border-[#DADADC] h-fit w-fit rounded-lg p-[10px] mt-[25px] ml-[40px] cursor-pointer'>
            <Link href='' passHref>
              <Image src={logout} alt=''/>
            </Link>
          </div>
        </header>
      </main>
    </>
  )
}

export default Headers;