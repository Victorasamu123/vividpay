import React from 'react'
import { MdCancel } from "react-icons/md";

interface ModalProps {
    isOpen:boolean;
    onClose:()=>void;
    setOthers:(isOpen:boolean)=>void;
}
const ToOtherBank:React.FC<ModalProps> = ({isOpen,onClose,setOthers}) => {
 if(!isOpen) return null;
    const iconStyle = {
        width:'40px',
        height:"40px",
        cursor:"pointer",
      }
  return (
    <>
           <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[500px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[500px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[500px] p-4 rounded shadow-lg'>
          <div className='flex items-end justify-end'>
            <MdCancel style={iconStyle}/>
          </div>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Send Money To</h3>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter account name of receiver'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter account number of receiver'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter receiving bank'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter amount to send'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Remark'/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans'>Proceed</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default ToOtherBank;