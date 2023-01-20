import Image from 'next/image'
import Link from 'next/link'
import React, { EventHandler, useRef } from 'react'
import iconb from '../../public/images/svgexport-14.svg'


const HeaderComp = () => {
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    if (hamburgerBtnRef.current && mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
      mobileMenuRef.current.classList.toggle('flex');
      hamburgerBtnRef.current.classList.toggle('toggle-btn');
    }
  }

  return (
    <>
      <header className='bg-[#FFF7F2] sticky top-0 w-[100%]'>
         <section className='flex justify-between items-center -ml-[50px] lg:ml-0'>
            <div>
                <Link href="/" passHref>
                <Image src={iconb} alt="hello" width={250} height={100}/>
                </Link>
            </div>
            <button id="hamburger-button" className="text-3xl right-2 md:hidden cursor-pointer relative w-8 h-8" ref={hamburgerBtnRef} onClick={()=>toggleMenu()}>
            <div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:h-1 before:absolute before:bg-black before:w-8 before:rounded before:transition-all before:duration-500  before:-translate-x-4 before:-translate-y-3 after:content-[''] after:h-1 after:absolute after:bg-black after:w-8 after:rounded after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
            </button>
            <div className='lg:inline md:inline hidden'>
                <ul className='flex gap-[45px]'>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>Home</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60] cursor-pointer'>Products</li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>About-Us</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>FAQ</Link></li>
                    <li className='font-semi-bold text-xl hover:text-[#220C60]'><Link href='/' passHref>Contact-Us</Link></li>
                </ul>
            </div>
            <div className='mr-32 lg:inline md:inline hidden'>
              <Link href='/'><button className='border font-[700] text-[#3813A0] rounded-md border-[#3813A0] w-[100px] h-[45px] mr-4'>Log in</button></Link>
              <Link href='/'><button className='w-[100px] h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md text-[white]'>Sign up</button></Link>
            </div>
            <section id="mobile-menu" className="absolute top-0 bg-[#FFF7F2] w-full flex-col justify-content-center origin-top animate-open-menu hidden" ref={mobileMenuRef}>
         {/* <!-- <button class="text-8xl self-end px-6"> &times;</button> --> */}
         <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <Link href="#roror" className="w-full text-center py-6 hover:opacity-90" >Home</Link>
          <Link href="#rockets" className="w-full text-center py-6 hover:opacity-90">Product</Link>
          <Link href="#testimonials" className="w-full text-center py-6 hover:opacity-90">FAQ</Link>
          <Link href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact-Us</Link>
          <div className=''>
              <Link href='/'><button className='border font-[700] text-[#3813A0] rounded-md border-[#3813A0] w-[90%] h-[45px] mr-4'>Log in</button></Link>
              <Link href='/'><button className='w-[90%] mt-3 h-[45px] font-[700] bg-[#3813A0] hover:bg-[#220C60] rounded-md text-[white]'>Sign up</button></Link>
            </div>
         </nav>
       </section>
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