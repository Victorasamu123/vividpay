import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import iconb from '../../public/images/svgexport-14.svg'
const HeaderComp = () => {
  // const showDropDown=()=>{
  //   document.getElementsByClassName("hello") = 
  // }
  return (
    <>
      <header className='bg-[#FFF7F2] sticky top-0 z-10'>
         <section className='flex  justify-between items-center'>
            <div>
                <Link href="/" passHref>
                <Image src={iconb} alt="hello" width={250} height={100}/>
                </Link>
            </div>
            <div className=''>
                <ul className='flex gap-[45px]'>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>Home</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60] cursor-pointer'>Products</li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>About-Us</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>FAQ</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>Contact-Us</Link></li>
                </ul>
            </div>
            <div className='mr-32'>
              <Link href='/'><button className='border font-[700] text-[#3813A0] rounded-md border-[#3813A0] w-[100px] h-[45px] mr-4'>Log in</button></Link>
              <Link href='/'><button className='w-[100px] h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md text-[white]'>Sign up</button></Link>
            </div>
         </section>
      </header>
      <ul className='hidden bg-[#525254] text-[16px] rounded-sm pl-4 w-[140px] absolute top-[90px] z-10 left-[380px] font-semibold'>
                       <li className='mb-3 text-white'><Link href='/' passHref>Airtime to Cash</Link></li>
                       <li className='mb-3 text-white'><Link href='/' passHref>Cashpin</Link></li>
                       <li className='mb-3 text-white'><Link href='/' passHref>Virtual Card</Link></li>
                      </ul>
    </>
  )
}

export default HeaderComp;