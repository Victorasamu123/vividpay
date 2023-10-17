import React from 'react'
import { MdCancel } from "react-icons/md";
import startimes from "../../../public/images/star-removebg-preview.png"
import Image from 'next/image';
import StartimesPlanArray from '@/components/startimes';
StartimesPlanArray;

interface ModalProps{
    isOpen:boolean;
    onClose:()=>void;
    setIsStarTimesOpen:(isOpen:boolean)=>void;
    
}
const Startimes:React.FC<ModalProps> = ({isOpen, onClose, setIsStarTimesOpen}) => {
   if(!isOpen) return null;
    
   const iconStyle = {
    width:"40px",
    height:"40px",
    cursor:"pointer",
   }
  return (
    <>
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[30%] lg:h-[550px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[550px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[550px] p-4 rounded shadow-lg'>
          <div className='flex items-end justify-end' onClick={onClose}>
            <MdCancel style={iconStyle}/>
          </div>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4 flex'><Image src={startimes} alt='lee moe' width={50}/> Startimes</h3>
       <select name="" id="" className='lg:w-[80%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-10'>
        {
            StartimesPlanArray.map((item,index)=>(
                <option value="" key={index}>{item.plan}     {item.amount}</option>
            ))
        }
       </select>
         <input type="text" className='lg:w-[80%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-10' placeholder='Enter IUC number of decoder'/>
         <input type="text" className='lg:w-[80%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-10' placeholder='Enter account owner of decoder'/>
         <button className='block mt-[15px] lg:w-[80%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={onClose}>Proceed</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default Startimes;