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
const ThirdBar = () => {
  return (
    <>
     <div id='three' className='lg:ml-[2.3%] lg:w-[22%] lg:mt-[2%] md:ml-[5%] md:w-[95%] md:mt-[2%] ml-[5%] w-[95%] mt-[2%]'>
           <div>
              {/* {set pin} */}
              <div className='lg:bg-white lg:w-[80%] lg:h-[120px] lg:rounded-xl lg:pt-4 lg:pl-4 lg:pr-4 md:bg-white md:w-[95%] md:h-[120px]  md:rounded-xl md:pt-4 md:pl-4 md:pr-4 bg-white w-[95%] h-[120px] rounded-xl pt-4 pl-4 pr-4'>
               <div className='flex justify-between'>
                 <h3 className='text-[#18171B] text-[12px] font-sans font-semibold'>Set your pin</h3>
                 <Link href=''>
                 <Image src={rightArrowblue} alt=''></Image>
                 </Link>
               </div>
               <p className='text-[#525254] text-[12px] font-sans font-normal mt-4'>Set your transaction pin and start performing transactions</p>
              </div>
           </div>
           {/* {Quick Links} */}{/**/}
           <div className='lg:bg-white lg:w-[80%] lg:h-[670px] lg:rounded-xl lg:mt-10 lg:pt-6 lg:pl-4 lg:pr-4 md:bg-white md:w-[95%] md:h-[670px] md:rounded-xl md:mt-10 md:pt-6 md:pl-4 md:pr-4 lg:block md:block hidden'>
              <h2 className='text-[#18171B] text-[18px] font-medium font-sans'>Quicklinks</h2>
              {/* {first two} */}
              <div className='flex mt-3'>
                 <Link href='' className='bg-[#FBF1F1] w-[45%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9993 29.3332H19.9993C26.666 29.3332 29.3327 26.6665 29.3327 19.9998V11.9998C29.3327 5.33317 26.666 2.6665 19.9993 2.6665H11.9993C5.33268 2.6665 2.66602 5.33317 2.66602 11.9998V19.9998C2.66602 26.6665 5.33268 29.3332 11.9993 29.3332Z" stroke="#C02634" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.6802L16 8.68018L20 12.6802" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8.68018V19.3468" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 22.0132C13.1867 23.7465 18.8133 23.7465 24 22.0132" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#C02634] text-[14px] font-medium text-center mt-2'>Send Money</p>
                 </Link>
                 <Link className='bg-[#F0F7F4] w-[45%] h-[100px] rounded-xl ml-4' href=''>  
                 <div className='flex justify-center mt-6'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0163 20.5845H12.3496" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.6816 17.3306V23.9972" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8799 3.35735L16.8399 3.45068L12.9733 12.424H9.17328C8.26661 12.424 7.39995 12.6107 6.61328 12.944L8.94661 7.37068L8.99995 7.23735L9.09328 7.02402C9.11995 6.94402 9.14661 6.86402 9.18661 6.79735C10.9333 2.75735 12.9066 1.83735 16.8799 3.35735Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.066 12.6908C23.466 12.5041 22.826 12.4241 22.186 12.4241H12.9727L16.8393 3.45076L16.8793 3.35742C17.0793 3.42409 17.266 3.51742 17.466 3.59742L20.4127 4.83742C22.0527 5.51742 23.1993 6.22409 23.8927 7.07742C24.026 7.23742 24.1327 7.38409 24.226 7.55742C24.346 7.74409 24.4393 7.93076 24.4927 8.13076C24.546 8.25076 24.586 8.37076 24.6127 8.47742C24.9727 9.59742 24.7593 10.9708 24.066 12.6908Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.695 18.931V21.531C28.695 21.7976 28.6816 22.0643 28.6683 22.331C28.415 26.9843 25.815 29.331 20.8816 29.331H10.4816C10.1616 29.331 9.84164 29.3043 9.53497 29.2643C5.29497 28.9843 3.02831 26.7176 2.74831 22.4776C2.70831 22.171 2.68164 21.851 2.68164 21.531V18.931C2.68164 16.251 4.30831 13.9443 6.62831 12.9443C7.42831 12.611 8.28164 12.4243 9.18831 12.4243H22.2016C22.855 12.4243 23.495 12.5177 24.0816 12.691C26.735 13.5043 28.695 15.9843 28.695 18.931Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.94602 7.37061L6.61268 12.9439C4.29268 13.9439 2.66602 16.2506 2.66602 18.9306V15.0239C2.66602 11.2373 5.35935 8.07727 8.94602 7.37061Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.6915 15.0237V18.9304C28.6915 15.997 26.7448 13.5037 24.0781 12.7037C24.7715 10.9704 24.9715 9.61037 24.6381 8.47704C24.6115 8.35704 24.5715 8.23704 24.5181 8.13037C26.9981 9.41037 28.6915 12.037 28.6915 15.0237Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#1E8A5E] text-[14px] font-medium text-center mt-2'>Fund Wallet</p>
                 </Link>
              </div>
              {/* {next two two} */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#F7F6FC] w-[45%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.214 19.59C25.214 21.31 26.6273 22.71 28.3473 22.71C28.3473 27.71 27.094 28.9634 22.094 28.9634H9.58732C4.58732 28.9634 3.33398 27.71 3.33398 22.71V22.0967C5.05398 22.0967 6.46732 20.6834 6.46732 18.9634C6.46732 17.2434 5.05398 15.83 3.33398 15.83V15.2167C3.34732 10.2167 4.58732 8.96338 9.58732 8.96338H22.0807C27.0807 8.96338 28.334 10.2167 28.334 15.2167V16.47C26.614 16.47 25.214 17.8567 25.214 19.59Z" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.6141 8.96317H9.49414L13.4008 5.0565C16.5875 1.86984 18.1875 1.86984 21.3741 5.0565L22.1741 5.8565C21.3341 6.6965 21.1341 7.9365 21.6141 8.96317Z" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.1719 8.96338L13.1719 28.9634" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"></path></svg>
                 </div>
                 <p className='text-[#4317C0] text-[14px] font-medium text-center mt-2'>Cashpin</p>
                 </Link>
                 <Link href='' className='bg-[#FCF8EE] w-[45%] h-[100px] rounded-xl ml-4'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.333 7.99984V11.2265C29.333 13.3332 27.9997 14.6665 25.893 14.6665H21.333V5.3465C21.333 3.8665 22.5463 2.6665 24.0263 2.6665C25.4797 2.67984 26.813 3.2665 27.773 4.2265C28.733 5.19983 29.333 6.53317 29.333 7.99984Z" stroke="#8C6500" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66699 9.33317V27.9998C2.66699 29.1065 3.92033 29.7332 4.80033 29.0665L7.08032 27.3598C7.61366 26.9598 8.36033 27.0132 8.84033 27.4932L11.0537 29.7198C11.5737 30.2398 12.427 30.2398 12.947 29.7198L15.187 27.4798C15.6537 27.0132 16.4003 26.9598 16.9203 27.3598L19.2003 29.0665C20.0803 29.7198 21.3337 29.0932 21.3337 27.9998V5.33317C21.3337 3.8665 22.5337 2.6665 24.0003 2.6665H9.33366H8.00033C4.00033 2.6665 2.66699 5.05317 2.66699 7.99984V9.33317Z" stroke="#8C6500" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33301 13.3335H15.6663" stroke="#8C6500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.9998V9.6665" stroke="#8C6500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#8C6500] text-[14px] font-medium text-center mt-2'>Airtime</p>
                 </Link>
              </div>
              {/**next two three */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#F1F4FB] w-[45%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3464 3.89326L25.213 7.38659C27.4797 8.38659 27.4797 10.0399 25.213 11.0399L17.3464 14.5333C16.453 14.9333 14.9864 14.9333 14.093 14.5333L6.22637 11.0399C3.9597 10.0399 3.9597 8.38659 6.22637 7.38659L14.093 3.89326C14.9864 3.49326 16.453 3.49326 17.3464 3.89326Z" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 14.6665C4 15.7865 4.84 17.0798 5.86667 17.5332L14.92 21.5598C15.6133 21.8665 16.4 21.8665 17.08 21.5598L26.1333 17.5332C27.16 17.0798 28 15.7865 28 14.6665" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 21.3335C4 22.5735 4.73333 23.6935 5.86667 24.2002L14.92 28.2268C15.6133 28.5335 16.4 28.5335 17.08 28.2268L26.1333 24.2002C27.2667 23.6935 28 22.5735 28 21.3335" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#013AC0] text-[14px] font-medium text-center mt-2'>Pay bills</p>
                 </Link>
                 <Link href='' className='bg-[#FEF5FF] w-[45%] h-[100px] rounded-xl ml-4'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3333 11.0265V5.63984C29.3333 3.51984 28.48 2.6665 26.36 2.6665H20.9733C18.8533 2.6665 18 3.51984 18 5.63984V11.0265C18 13.1465 18.8533 13.9998 20.9733 13.9998H26.36C28.48 13.9998 29.3333 13.1465 29.3333 11.0265Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0003 11.3598V5.3065C14.0003 3.4265 13.147 2.6665 11.027 2.6665H5.64033C3.52033 2.6665 2.66699 3.4265 2.66699 5.3065V11.3465C2.66699 13.2398 3.52033 13.9865 5.64033 13.9865H11.027C13.147 13.9998 14.0003 13.2398 14.0003 11.3598Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0003 26.36V20.9733C14.0003 18.8533 13.147 18 11.027 18H5.64033C3.52033 18 2.66699 18.8533 2.66699 20.9733V26.36C2.66699 28.48 3.52033 29.3333 5.64033 29.3333H11.027C13.147 29.3333 14.0003 28.48 14.0003 26.36Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.333 23.3335H27.333" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round"></path><path d="M23.333 27.3335V19.3335" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round"></path></svg>
                 </div>
                 <p className='text-[#AE00BB] text-[14px] font-medium text-center mt-2'>Airtime to Cash</p>
                 </Link>
              </div>
              {/**next two four */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#F7F1FB] w-[45%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9993 29.3333C23.3631 29.3333 29.3327 23.3638 29.3327 16C29.3327 8.63616 23.3631 2.66663 15.9993 2.66663C8.63555 2.66663 2.66602 8.63616 2.66602 16C2.66602 23.3638 8.63555 29.3333 15.9993 29.3333Z" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6674 4H12.0008C9.40078 11.7867 9.40078 20.2133 12.0008 28H10.6674" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4C22.6 11.7867 22.6 20.2133 20 28" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 21.3333V20C11.7867 22.6 20.2133 22.6 28 20V21.3333" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12C11.7867 9.40005 20.2133 9.40005 28 12" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#6401A6] text-[14px] font-medium text-center mt-2'>Buy Data</p>
                 </Link>
                 <Link className='bg-[#F0F7F4] w-[45%] h-[100px] rounded-xl ml-4' href=''>  
                 <div className='flex justify-center mt-6'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0163 20.5845H12.3496" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.6816 17.3306V23.9972" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8799 3.35735L16.8399 3.45068L12.9733 12.424H9.17328C8.26661 12.424 7.39995 12.6107 6.61328 12.944L8.94661 7.37068L8.99995 7.23735L9.09328 7.02402C9.11995 6.94402 9.14661 6.86402 9.18661 6.79735C10.9333 2.75735 12.9066 1.83735 16.8799 3.35735Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.066 12.6908C23.466 12.5041 22.826 12.4241 22.186 12.4241H12.9727L16.8393 3.45076L16.8793 3.35742C17.0793 3.42409 17.266 3.51742 17.466 3.59742L20.4127 4.83742C22.0527 5.51742 23.1993 6.22409 23.8927 7.07742C24.026 7.23742 24.1327 7.38409 24.226 7.55742C24.346 7.74409 24.4393 7.93076 24.4927 8.13076C24.546 8.25076 24.586 8.37076 24.6127 8.47742C24.9727 9.59742 24.7593 10.9708 24.066 12.6908Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.695 18.931V21.531C28.695 21.7976 28.6816 22.0643 28.6683 22.331C28.415 26.9843 25.815 29.331 20.8816 29.331H10.4816C10.1616 29.331 9.84164 29.3043 9.53497 29.2643C5.29497 28.9843 3.02831 26.7176 2.74831 22.4776C2.70831 22.171 2.68164 21.851 2.68164 21.531V18.931C2.68164 16.251 4.30831 13.9443 6.62831 12.9443C7.42831 12.611 8.28164 12.4243 9.18831 12.4243H22.2016C22.855 12.4243 23.495 12.5177 24.0816 12.691C26.735 13.5043 28.695 15.9843 28.695 18.931Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.94602 7.37061L6.61268 12.9439C4.29268 13.9439 2.66602 16.2506 2.66602 18.9306V15.0239C2.66602 11.2373 5.35935 8.07727 8.94602 7.37061Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.6915 15.0237V18.9304C28.6915 15.997 26.7448 13.5037 24.0781 12.7037C24.7715 10.9704 24.9715 9.61037 24.6381 8.47704C24.6115 8.35704 24.5715 8.23704 24.5181 8.13037C26.9981 9.41037 28.6915 12.037 28.6915 15.0237Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#1E8A5E] text-[14px] font-medium text-center mt-2'>Wallet</p>
                 </Link>
              </div>
              {/**next two five */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#FFF6E9] w-[45%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.24023 21.1722L21.1736 5.23889" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.8008 24.372L16.4008 22.772" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3906 20.7849L21.5773 17.5983" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.80104 13.652L13.6544 4.79863C16.481 1.97196 17.8944 1.95863 20.6944 4.75863L27.241 11.3053C30.041 14.1053 30.0277 15.5186 27.201 18.3453L18.3477 27.1986C15.521 30.0253 14.1077 30.0386 11.3077 27.2386L4.76104 20.692C1.96104 17.892 1.96104 16.492 4.80104 13.652Z" stroke="#A8581E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66602 29.3314H29.3327" stroke="#A8581E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#A8581E] text-[14px] font-medium text-center mt-2'>Get virtual Card</p>
                 </Link>
              </div>
           </div>
           {/* small quicklink */}
           <div className='lg:hidden md:hidden block bg-white w-[95%] h-[420px] rounded-xl mt-10 pt-6 pl-4 pr-4'>
              <h2 className='text-[#18171B] text-[18px] font-medium font-sans'>Quicklinks</h2>
              {/* {first two} */}
              <div className='flex mt-3'>
                 <Link href='' className='bg-[#FBF1F1] w-[30%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9993 29.3332H19.9993C26.666 29.3332 29.3327 26.6665 29.3327 19.9998V11.9998C29.3327 5.33317 26.666 2.6665 19.9993 2.6665H11.9993C5.33268 2.6665 2.66602 5.33317 2.66602 11.9998V19.9998C2.66602 26.6665 5.33268 29.3332 11.9993 29.3332Z" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.6802L16 8.68018L20 12.6802" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8.68018V19.3468" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 22.0132C13.1867 23.7465 18.8133 23.7465 24 22.0132" stroke="#C02634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#C02634] text-[14px] font-medium text-center mt-2'>Send Money</p>
                 </Link>
                 <Link className='bg-[#F0F7F4] w-[30%] h-[100px] rounded-xl ml-4' href=''>  
                 <div className='flex justify-center mt-6'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0163 20.5845H12.3496" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.6816 17.3306V23.9972" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8799 3.35735L16.8399 3.45068L12.9733 12.424H9.17328C8.26661 12.424 7.39995 12.6107 6.61328 12.944L8.94661 7.37068L8.99995 7.23735L9.09328 7.02402C9.11995 6.94402 9.14661 6.86402 9.18661 6.79735C10.9333 2.75735 12.9066 1.83735 16.8799 3.35735Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.066 12.6908C23.466 12.5041 22.826 12.4241 22.186 12.4241H12.9727L16.8393 3.45076L16.8793 3.35742C17.0793 3.42409 17.266 3.51742 17.466 3.59742L20.4127 4.83742C22.0527 5.51742 23.1993 6.22409 23.8927 7.07742C24.026 7.23742 24.1327 7.38409 24.226 7.55742C24.346 7.74409 24.4393 7.93076 24.4927 8.13076C24.546 8.25076 24.586 8.37076 24.6127 8.47742C24.9727 9.59742 24.7593 10.9708 24.066 12.6908Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.695 18.931V21.531C28.695 21.7976 28.6816 22.0643 28.6683 22.331C28.415 26.9843 25.815 29.331 20.8816 29.331H10.4816C10.1616 29.331 9.84164 29.3043 9.53497 29.2643C5.29497 28.9843 3.02831 26.7176 2.74831 22.4776C2.70831 22.171 2.68164 21.851 2.68164 21.531V18.931C2.68164 16.251 4.30831 13.9443 6.62831 12.9443C7.42831 12.611 8.28164 12.4243 9.18831 12.4243H22.2016C22.855 12.4243 23.495 12.5177 24.0816 12.691C26.735 13.5043 28.695 15.9843 28.695 18.931Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.94602 7.37061L6.61268 12.9439C4.29268 13.9439 2.66602 16.2506 2.66602 18.9306V15.0239C2.66602 11.2373 5.35935 8.07727 8.94602 7.37061Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.6915 15.0237V18.9304C28.6915 15.997 26.7448 13.5037 24.0781 12.7037C24.7715 10.9704 24.9715 9.61037 24.6381 8.47704C24.6115 8.35704 24.5715 8.23704 24.5181 8.13037C26.9981 9.41037 28.6915 12.037 28.6915 15.0237Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#1E8A5E] text-[14px] font-medium text-center mt-2'>Fund Wallet</p>
                 </Link>
                 <Link href='' className='bg-[#F7F6FC] w-[30%] h-[100px] rounded-xl ml-4'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.214 19.59C25.214 21.31 26.6273 22.71 28.3473 22.71C28.3473 27.71 27.094 28.9634 22.094 28.9634H9.58732C4.58732 28.9634 3.33398 27.71 3.33398 22.71V22.0967C5.05398 22.0967 6.46732 20.6834 6.46732 18.9634C6.46732 17.2434 5.05398 15.83 3.33398 15.83V15.2167C3.34732 10.2167 4.58732 8.96338 9.58732 8.96338H22.0807C27.0807 8.96338 28.334 10.2167 28.334 15.2167V16.47C26.614 16.47 25.214 17.8567 25.214 19.59Z" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.6141 8.96317H9.49414L13.4008 5.0565C16.5875 1.86984 18.1875 1.86984 21.3741 5.0565L22.1741 5.8565C21.3341 6.6965 21.1341 7.9365 21.6141 8.96317Z" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.1719 8.96338L13.1719 28.9634" stroke="#4317C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"></path></svg>
                 </div>
                 <p className='text-[#4317C0] text-[14px] font-medium text-center mt-2'>Cashpin</p>
                 </Link>
              </div>
              {/* {next two two} */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#FCF8EE] w-[30%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.333 7.99984V11.2265C29.333 13.3332 27.9997 14.6665 25.893 14.6665H21.333V5.3465C21.333 3.8665 22.5463 2.6665 24.0263 2.6665C25.4797 2.67984 26.813 3.2665 27.773 4.2265C28.733 5.19983 29.333 6.53317 29.333 7.99984Z" stroke="#8C6500" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66699 9.33317V27.9998C2.66699 29.1065 3.92033 29.7332 4.80033 29.0665L7.08032 27.3598C7.61366 26.9598 8.36033 27.0132 8.84033 27.4932L11.0537 29.7198C11.5737 30.2398 12.427 30.2398 12.947 29.7198L15.187 27.4798C15.6537 27.0132 16.4003 26.9598 16.9203 27.3598L19.2003 29.0665C20.0803 29.7198 21.3337 29.0932 21.3337 27.9998V5.33317C21.3337 3.8665 22.5337 2.6665 24.0003 2.6665H9.33366H8.00033C4.00033 2.6665 2.66699 5.05317 2.66699 7.99984V9.33317Z" stroke="#8C6500" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33301 13.3335H15.6663" stroke="#8C6500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.9998V9.6665" stroke="#8C6500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#8C6500] text-[14px] font-medium text-center mt-2'>Airtime</p>
                 </Link>
                 <Link href='' className='bg-[#F1F4FB] w-[30%] h-[100px] rounded-xl ml-4'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3464 3.89326L25.213 7.38659C27.4797 8.38659 27.4797 10.0399 25.213 11.0399L17.3464 14.5333C16.453 14.9333 14.9864 14.9333 14.093 14.5333L6.22637 11.0399C3.9597 10.0399 3.9597 8.38659 6.22637 7.38659L14.093 3.89326C14.9864 3.49326 16.453 3.49326 17.3464 3.89326Z" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 14.6665C4 15.7865 4.84 17.0798 5.86667 17.5332L14.92 21.5598C15.6133 21.8665 16.4 21.8665 17.08 21.5598L26.1333 17.5332C27.16 17.0798 28 15.7865 28 14.6665" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 21.3335C4 22.5735 4.73333 23.6935 5.86667 24.2002L14.92 28.2268C15.6133 28.5335 16.4 28.5335 17.08 28.2268L26.1333 24.2002C27.2667 23.6935 28 22.5735 28 21.3335" stroke="#013AC0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#013AC0] text-[14px] font-medium text-center mt-2'>Pay bills</p>
                 </Link>
                 <Link href='' className='bg-[#FEF5FF] w-[30%] h-[100px] rounded-xl ml-4'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3333 11.0265V5.63984C29.3333 3.51984 28.48 2.6665 26.36 2.6665H20.9733C18.8533 2.6665 18 3.51984 18 5.63984V11.0265C18 13.1465 18.8533 13.9998 20.9733 13.9998H26.36C28.48 13.9998 29.3333 13.1465 29.3333 11.0265Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0003 11.3598V5.3065C14.0003 3.4265 13.147 2.6665 11.027 2.6665H5.64033C3.52033 2.6665 2.66699 3.4265 2.66699 5.3065V11.3465C2.66699 13.2398 3.52033 13.9865 5.64033 13.9865H11.027C13.147 13.9998 14.0003 13.2398 14.0003 11.3598Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0003 26.36V20.9733C14.0003 18.8533 13.147 18 11.027 18H5.64033C3.52033 18 2.66699 18.8533 2.66699 20.9733V26.36C2.66699 28.48 3.52033 29.3333 5.64033 29.3333H11.027C13.147 29.3333 14.0003 28.48 14.0003 26.36Z" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.333 23.3335H27.333" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round"></path><path d="M23.333 27.3335V19.3335" stroke="#AE00BB" stroke-width="1.5" stroke-linecap="round"></path></svg>
                 </div>
                 <p className='text-[#AE00BB] text-[14px] font-medium text-center mt-2'>Airtime to Cash</p>
                 </Link>
              </div>
              {/**next two three */}
              <div className='flex mt-5'>
                 <Link href='' className='bg-[#F7F1FB] w-[30%] h-[100px] rounded-xl'>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9993 29.3333C23.3631 29.3333 29.3327 23.3638 29.3327 16C29.3327 8.63616 23.3631 2.66663 15.9993 2.66663C8.63555 2.66663 2.66602 8.63616 2.66602 16C2.66602 23.3638 8.63555 29.3333 15.9993 29.3333Z" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6674 4H12.0008C9.40078 11.7867 9.40078 20.2133 12.0008 28H10.6674" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4C22.6 11.7867 22.6 20.2133 20 28" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 21.3333V20C11.7867 22.6 20.2133 22.6 28 20V21.3333" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12C11.7867 9.40005 20.2133 9.40005 28 12" stroke="#6401A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#6401A6] text-[14px] font-medium text-center mt-2'>Buy Data</p>
                 </Link>
                 <Link className='bg-[#F0F7F4] w-[30%] h-[100px] rounded-xl ml-4' href=''>  
                 <div className='flex justify-center mt-6'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0163 20.5845H12.3496" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.6816 17.3306V23.9972" stroke="#1E8A5E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8799 3.35735L16.8399 3.45068L12.9733 12.424H9.17328C8.26661 12.424 7.39995 12.6107 6.61328 12.944L8.94661 7.37068L8.99995 7.23735L9.09328 7.02402C9.11995 6.94402 9.14661 6.86402 9.18661 6.79735C10.9333 2.75735 12.9066 1.83735 16.8799 3.35735Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.066 12.6908C23.466 12.5041 22.826 12.4241 22.186 12.4241H12.9727L16.8393 3.45076L16.8793 3.35742C17.0793 3.42409 17.266 3.51742 17.466 3.59742L20.4127 4.83742C22.0527 5.51742 23.1993 6.22409 23.8927 7.07742C24.026 7.23742 24.1327 7.38409 24.226 7.55742C24.346 7.74409 24.4393 7.93076 24.4927 8.13076C24.546 8.25076 24.586 8.37076 24.6127 8.47742C24.9727 9.59742 24.7593 10.9708 24.066 12.6908Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.695 18.931V21.531C28.695 21.7976 28.6816 22.0643 28.6683 22.331C28.415 26.9843 25.815 29.331 20.8816 29.331H10.4816C10.1616 29.331 9.84164 29.3043 9.53497 29.2643C5.29497 28.9843 3.02831 26.7176 2.74831 22.4776C2.70831 22.171 2.68164 21.851 2.68164 21.531V18.931C2.68164 16.251 4.30831 13.9443 6.62831 12.9443C7.42831 12.611 8.28164 12.4243 9.18831 12.4243H22.2016C22.855 12.4243 23.495 12.5177 24.0816 12.691C26.735 13.5043 28.695 15.9843 28.695 18.931Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.94602 7.37061L6.61268 12.9439C4.29268 13.9439 2.66602 16.2506 2.66602 18.9306V15.0239C2.66602 11.2373 5.35935 8.07727 8.94602 7.37061Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.6915 15.0237V18.9304C28.6915 15.997 26.7448 13.5037 24.0781 12.7037C24.7715 10.9704 24.9715 9.61037 24.6381 8.47704C24.6115 8.35704 24.5715 8.23704 24.5181 8.13037C26.9981 9.41037 28.6915 12.037 28.6915 15.0237Z" stroke="#1E8A5E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#1E8A5E] text-[14px] font-medium text-center mt-2'>Wallet</p>
                 </Link>
                 <Link href='' className='bg-[#FFF6E9] w-[30%] h-[100px] rounded-xl ml-4 '>
                 <div className='flex justify-center mt-6'>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.24023 21.1722L21.1736 5.23889" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.8008 24.372L16.4008 22.772" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3906 20.7849L21.5773 17.5983" stroke="#A8581E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.80104 13.652L13.6544 4.79863C16.481 1.97196 17.8944 1.95863 20.6944 4.75863L27.241 11.3053C30.041 14.1053 30.0277 15.5186 27.201 18.3453L18.3477 27.1986C15.521 30.0253 14.1077 30.0386 11.3077 27.2386L4.76104 20.692C1.96104 17.892 1.96104 16.492 4.80104 13.652Z" stroke="#A8581E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66602 29.3314H29.3327" stroke="#A8581E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                 </div>
                 <p className='text-[#A8581E] text-[14px] font-medium text-center mt-2'>Get Card</p>
                 </Link>
              </div>
           </div>
       </div>
    </>
  )
}

export default ThirdBar