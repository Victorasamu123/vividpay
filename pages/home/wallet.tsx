import React, { useState,useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import iconb from "../../public/images/svgexport-14.svg"
import Headers from '@/components/header.tsx/headers';
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import SideBar from '@/components/home/sidebar';
import ThirdBar from '@/components/home/thirdbar';
const Wallet = () => {
  return (
    <div>Wallet</div>
  )
}

export default Wallet