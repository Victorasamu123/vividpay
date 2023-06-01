import Head from 'next/head';
import React, { useEffect , useState} from 'react'
import iconb from "../../public/images/svgexport-14.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const compsignup = () => {
  const router = useRouter();
  const [Phonenumber, setPhonenumber] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [Profilepicture,setProfilepicture] = useState<string>("");
  const [passworderror, setpassworderror] = useState<string>("");
  const [phonenumbererror, setphonenumbererror] = useState<string>("");
  let Firstname: string =''
  let Lastname: string = ''
  let Email: string = ''
  useEffect(() => {
     Firstname = router.query.param1 as string
     Lastname = router.query.param2 as string
    Email = router.query.param3 as string
    console.log(Firstname,Lastname,Email)
  }, [router.query.param1, router.query.param2, router.query.param3])
  
  const signup = async() =>{
    let regexForPhonenumber=/^[\w]{8,15}$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    Firstname = router.query.param1 as string
    Lastname = router.query.param2 as string
    Email = router.query.param3 as string
    if (
      Phonenumber === "" ||
      Password === "" ||
      !regexForPhonenumber.test(Phonenumber) ||
      !regexForPassword.test(Password)
    ) {
      if (Phonenumber === "") {
        setphonenumbererror("Please enter a value for the phone number");
      } else if (!regexForPhonenumber.test(Phonenumber)) {
        setphonenumbererror("Phonenumber must be at least 8 to 11 characters and spaces are not allowed.");
      } else {
        setphonenumbererror("");
      }
      if(Password==""){
        setpassworderror("please this field is required !!")
      }else if(!regexForPassword.test(Password)){
        setpassworderror("password must contain uppercase,lowercase and numbers !!") 
      }else {
        setpassworderror("");
      }
    }else{
      setphonenumbererror("");
      setpassworderror("");
      console.log(Firstname,Lastname,Email)
      console.log(Phonenumber,DOB,Password,Profilepicture);
    }
  }
  return (
    <>
       <Head>
      <title>Complete signup Process</title>
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
            <h2 className='text-[32px] font-apple font-lighter lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[#220C60]'>Complete process</h2>
            <p className='lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[18px] text-[#757576] font-apple font-medium'>Hi there, Please complete process</p>
            <div className='lg:ml-[75px] lg:mt-[38px] md:ml-[75px] md:mt-[38px] mt-[38px]'>
              <label htmlFor="Phonenumber" className='block text-[14px] text-[#67656E] font-apple font-medium ml-[7.5%] lg:ml-0 md:ml-0'>Phonenumber</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="text" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter your phonenumber' onChange={(e)=>setPhonenumber(e.target.value)}/>
              </div>
              <div>{phonenumbererror}</div>
              <label htmlFor="DOB" className='block text-[14px] text-[#67656E] font-apple font-medium mt-5 ml-[7.5%] lg:ml-0 md:ml-0'>DOB</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="date" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2' onChange={(e)=>setDOB(e.target.value)}/>
              </div>
              <label htmlFor="Password" className='block text-[14px] text-[#67656E] font-apple font-medium mt-5 ml-[7.5%] lg:ml-0 md:ml-0'>Password</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="password" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='password should contain at least 8 characters' onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div>{passworderror}</div>
              <div className='flex justify-center lg:block md:block'>
              <button className='block mt-[35px] w-[85%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={signup}>Sign Up</button>
              </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <span className='text-[18px] font-normal'>Already have an account? <Link href='' className='font-semibold'>Login</Link></span>
            </div>
              <p className='text-center mt-[27px] text-[14px]'>Avanin 1.0</p>
           </div>
        </section>
      </main>
    </>
  )
}

export default compsignup