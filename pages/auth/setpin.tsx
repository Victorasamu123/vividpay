import Head from 'next/head';
import React,{useEffect,useState} from 'react'
import iconb from "../../public/images/svgexport-14.svg"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/router';
const Setpin = () => {
  const setPinEndPoints : string="http://localhost:5000/auth/setpin"
  const router = useRouter()
  const [Pin, setPin] = useState<string>("");
  const [userId, setuserId] = useState<string>("");
  const [userEmail, setuserEmail] = useState<string>("");
  const [setpinerror, setsetpinerror] = useState<string>("");
  const [Message, setMessage] = useState<string>("");
  useEffect(() => {
   getItem()
  }, [])
  
  const getItem=async()=>{
    let details= localStorage.getItem("userDetails")
    let Details = details? JSON.parse(details): null;
    setuserId(Details._id);
    setuserEmail(Details.Email);
    console.log(userEmail,userId);
  }

  const setpin= async()=>{
    Pin.toString()
    let regexForSetPin=/^[\w]{4,4}$/
    if(
      Pin === "" ||
      !regexForSetPin.test(Pin)
    ){
      if(Pin === ""){
        setsetpinerror("Please enter a valid pin");
      }else if(!regexForSetPin.test(Pin)){
        setsetpinerror("Pin must be exactly 4 character")
      }
    }else{
      setsetpinerror('');
      let goingPin = {Pin,userId,userEmail};
      console.log(goingPin)
      await axios.post(setPinEndPoints,goingPin).then((result)=>{
        if(result.data.status === false){
          setMessage(result.data.message);
        }else{
          setMessage(result.data.message);
          router.push("/auth/signin");
        }
      })
    }
  }
  return (
    <>
     <Head>
      <title>Setpin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='bg-sign flex justify-center items-center pt-20 pb-20'>
           <div className='lg:bg-[white] lg:h-[790px] lg:w-[43%] h-[95%] w-[100%] lg:shadow-lg lg:shadow-black lg:rounded-3xl'>
            <div className='mt-[14px] ml-[13px]'>
             <Image src={iconb} alt='logo' width={210}></Image>
            </div>
            <h2 className='text-[32px] font-apple font-lighter lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[#220C60]'>Set Pin</h2>
            <p className='lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[18px] text-[#757576] font-apple font-medium'>Please set transactions pin for various transactions</p>
            <div className='lg:ml-[75px] lg:mt-[38px] md:ml-[75px] md:mt-[38px] mt-[38px]'>
              <label htmlFor="Otp" className='block text-[14px] text-[#67656E] font-apple font-medium ml-[7.5%] lg:ml-0 md:ml-0'>Setpin</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="number" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='pin should be 4 characters' maxLength={4} onChange={(e)=>setPin(e.target.value)}/>
              </div>
              <div>{setpinerror}</div>
              <div className='flex justify-center lg:block md:block'>
              <button className='block mt-[35px] w-[85%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={setpin}>Confirm</button>
              </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <span className='text-[18px] font-normal'>Already have an acccount?<Link href='/auth/signin' className='font-semibold'>Signin</Link></span>
            </div>
              <p className='text-center mt-[27px] text-[14px]'>Avanin 1.0</p>
           </div>
        </section>
      </main>
    </>
  )
}

export default Setpin;