import React from 'react'
import { MdCancel } from "react-icons/md";

interface ModalProps{
    isOpen: boolean;
    onClose: ()=> void;
    setVivid:(isOpen:boolean)=>void;
}
const OpenVivid:React.FC<ModalProps> = ({isOpen, setVivid, onClose}) => {
    if(!isOpen) return null;

    const iconStyle = {
        width:'40px',
        height:"40px",
      }
  return (
    <>
     <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[400px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[400px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[400px] p-4 rounded shadow-lg'>
          <div className='flex items-end justify-end' onClick={onClose}>
            <MdCancel style={iconStyle}/>
          </div>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Card Details</h3>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card expiry date'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter card CVV '/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans'>Proceed</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default OpenVivid;