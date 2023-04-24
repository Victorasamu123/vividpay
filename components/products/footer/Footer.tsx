import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/images/Facebook.webp"
import github from "../../../public/images/git.svg"
import linkedin from "../../../public/images/hello.png"
import instagram from "../../../public/images/instagram.webp"
const Footer = () => {
  const new_date :Date= new Date()
    const year : number = new_date.getFullYear()
  return (
    <>
      <div className="bg-[#0D0526] lg:pl-28 md:pl-0 pl-0 lg:text-start md:text-center text-center pt-20">
         <div className="lg:flex md:block block">
          <div id="one">
            <Link href='/' passHref><h1 className="text-white font-bold font-apple text-[40px]">VIVIDPAY</h1></Link>
            <p className="text-white">
            Vividpay is a Digital Wallet with <br />
            completely unique features. Our goal is <br />
            to create financial opportunities & <br />
            innovations for the 1 billion+ people in <br />
            Africa.
            </p>
            <p className="text-white mt-6">Own by Asamu Victor</p>
            <p className="text-white mt-6">Developed by Asamuu Victor</p>
          </div>
          <div className="lg:ml-20 md:ml-20 ml-0" id="two">
            <h1 className="text-white font-bold text-[18px]">VIVIPAY</h1>
            <Link href='/#hero' passHref className="text-white "><h3 className="mt-6">Home</h3></Link>
            <Link href='/#about' passHref className="text-white "><h3 className="mt-6">About Us</h3></Link>
            <Link href='/#product' passHref className="text-white "><h3 className="mt-6">Products</h3></Link>
            <Link href='/#contact' passHref className="text-white "><h3 className="mt-6">Contact-Us</h3></Link>
          </div>
          <div className="lg:ml-36 md:ml-0 ml-0" id="three">
            <h1 className="text-white font-bold text-[18px]">PRODUCTS</h1>
             <h3 className="mt-6 text-white">Airtime to Cash</h3>
             <h3 className="mt-6 text-white">Cashpin</h3>
             <h3 className="mt-6 text-white">Virtual Cards</h3>
          </div>
          <div className="lg:ml-36 md:ml-0 ml-0" id="four">
            <h1 className="text-white font-bold text-[18px]">SOCIAL MEDIA</h1>
            <p className="text-white mt-6">
            Follow us on social media and find out the<br />
            latest updates and features
            </p>
            <div className="flex mt-2 items-center justify-center pb-3 lg:items-start lg:justify-start">
              <Link href='' passHref className="mr-4">
                <Image src={facebook} alt='facebook' className="w-10"></Image>
              </Link>
              <Link href='' passHref className="mr-4">
                <Image src={instagram} alt='facebook' className="w-10"></Image>
              </Link>
              <Link href='' passHref className="mr-4">
              <Image src={linkedin} alt='facebook' className="w-10"></Image>
              </Link>
              <Link href='' passHref className="mr-4">
              <Image src={github} alt='facebook' className="w-10"></Image>
              </Link>
            </div>
          </div>
         </div>
          <div className="flex justify-center items-center mt-10">
            <hr className="w-[80%] bg-white"/>
          </div>
          <div className="flex justify-center items-center pb-5 p-5 lg:">
            <p className="text-white font-medium">
             Copyright © Asamu victor Technology Limited {year} - All rights reserved.
            </p>
          </div>
      </div>
    </>
  )
}

export default Footer;