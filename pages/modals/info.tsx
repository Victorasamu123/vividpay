import Image from 'next/image';
import React from 'react'
import success from "../../public/images/successijn.png"
import fail from "../../public/images/failoo-removebg-preview.png"
import pending from "../../public/images/pending.png"
interface ModalProps {
    isOpen:boolean;
    pinDone:boolean;
    setpinDone:(pinDone:boolean)=>void;
}
const Info:React.FC<ModalProps> = ({isOpen,pinDone,setpinDone}) => {
if(!isOpen) return null;


const okNah=()=>{
    setpinDone(false);
}
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[350px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[350px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[350px] p-4 rounded shadow-lg'>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Transactions Successful</h3>
         <Image src={fail} alt='' width={400}/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={okNah}>OK</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default Info;