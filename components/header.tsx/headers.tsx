import React, {  useRef } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import iconb from "../../public/images/svgexport-14.svg"
import dateIcon from "../../public/images/dashboard images/svgexport-1.svg"
import changeIcon from '../../public/images/dashboard images/svgexport-2.svg'
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import logout from '../../public/images/dashboard images/svgexport-3.svg'
import icond from '../../public/favicon.ico'
import dashboard from '../../public/images/dashboard images/dashboard.svg'
import cashpin from '../../public/images/dashboard images/svgexport-13.svg'
import cards from '../../public/images/dashboard images/svgexport-10.svg'
import transactios from '../../public/images/dashboard images/svgexport-11.svg'
import profile from '../../public/images/dashboard images/svgexport-12.svg'
import sendmoney from "../../public/images/dashboard images/svgexport-19.svg"
import fundwallet from "../../public/images/dashboard images/svgexport-20.svg"
import airtime from "../../public/images/dashboard images/svgexport-21.svg"
import cashpin2 from "../../public/images/svgexport-8.svg"
import paybills from "../../public/images/dashboard images/svgexport-22.svg"
import tocash from "../../public/images/dashboard images/svgexport-23.svg"
import data from "../../public/images/dashboard images/svgexport-24.svg"
import virtual from "../../public/images/dashboard images/svgexport-26.svg"
const Headers = () => {
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
    const new_date :Date= new Date()
    const date : number = new_date.getDate()
    const month : number = new_date.getMonth() + 1
    const year : number = new_date.getFullYear()
  // const [date, setdate]= useState(Date())
  const toggleMenu = () => {
    if (hamburgerBtnRef.current && mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
      mobileMenuRef.current.classList.toggle('flex');
      hamburgerBtnRef.current.classList.toggle('toggle-btn');
    }
  }
  return (
    <>
     <main> 
        <header className='lg:bg-[#FFFFFF] lg:w-full lg:h-[85px] lg:flex lg:sticky lg:top-0 md:hidden hidden'>
          <div className='-mt-[30px] w-fit ml-10'>
            <Image src={iconb} alt='vividpay' width={250}></Image>
          </div>
          <div className='border-[1.4px] border-[#DADADC] h-fit w-fit text-center p-2 mt-[25px] rounded-lg text-[#535355] text-[14px] font-medium flex font-sans'>
            <Image src={dateIcon} alt=''></Image>
            <p className='ml-2'>{date}-{month}-{year}</p>
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
        <header className='bg-[#FFFFFF] lg:hidden md:w-full md:h-[85px] md:flex md:sticky md:top-0 w-full h-[85px] flex sticky top-0 md:justify-between justify-between items-center'>
          <div className='w-fit ml-[5%]'>
            <Image src={icond} alt='vividpay' width={40}></Image>
          </div>
          <div className='text-center mr-[10%]'>
            <p className='text-[25px] font-medium'>Dashboard</p>
          </div>
          <button id="hamburger-button" className="text-3xl right-2 cursor-pointer relative w-8 h-8 z-10" ref={hamburgerBtnRef} onClick={()=>toggleMenu()}>
            <div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:h-1 before:absolute before:bg-black before:w-8 before:rounded before:transition-all before:duration-500  before:-translate-x-4 before:-translate-y-3 after:content-[''] after:h-1 after:absolute after:bg-black after:w-8 after:rounded after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
            </button>
            <section id="mobile-menu" className="absolute top-0 bg-[#FFF7F2] w-full flex-col justify-content-center origin-top animate-open-menu hidden" ref={mobileMenuRef}>
              <div>
                <Image src={iconb} alt=''></Image>
              </div>
         <div className='min-h-screen'>
         <nav className="flex flex-col items-center py-8 pl-[20%]" aria-label="mobile">
          <Link href="#hero" className="w-full text-start py-2 hover:opacity-90 flex" ><Image src={dashboard} alt='' className='mr-10'></Image> Dashboard</Link>
          <Link href="#about" className="w-full text-start py-2 hover:opacity-90 flex" ><Image src={cashpin} alt='' className='mr-10'></Image> Cashpin</Link>
          <Link href="#product" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={cards} alt='' className='mr-10'></Image> Cards</Link>
          <Link href="#faq" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={transactios} alt='' className='mr-10'></Image> Transactions</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={profile} alt='' className='mr-10'></Image> Profile</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={logout} alt='' className='mr-10'></Image> Logout</Link>
          </nav>
         <nav className="flex flex-col items-center py-8 pl-[20%]" aria-label="mobile">
         <p className='text-[24px] font-medium'>Quicklinks</p>
          <Link href="#hero" className="w-full text-start py-2 hover:opacity-90 flex" ><Image src={sendmoney} alt='' className='mr-10'></Image>Send Money</Link>
          <Link href="#about" className="w-full text-start py-2 hover:opacity-90 flex" ><Image src={fundwallet} alt='' className='mr-10'></Image>Fund Wallet</Link>
          <Link href="#product" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={cashpin2} alt='' className='mr-10'></Image>Cashpin</Link>
          <Link href="#faq" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={airtime} alt='' className='mr-10'></Image>Airtime</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={paybills} alt='' className='mr-10'></Image>Pay Bills</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={tocash} alt='' className='mr-10'></Image>Airtime to Cash</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={data} alt='' className='mr-10'></Image>Buy Data</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={fundwallet} alt='' className='mr-10'></Image>Wallet</Link>
          <Link href="#contact" className="w-full text-start py-2 hover:opacity-90 flex"><Image src={virtual} alt='' className='mr-10'></Image>Get Virtual Card</Link>
          </nav>
         </div>
       </section>
        </header>
      </main>
    </>
  )
}

export default Headers;