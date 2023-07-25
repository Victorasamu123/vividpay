import React from 'react'
import { MdCancel } from "react-icons/md";

interface ModalProps {
    isOpen:boolean;
    onClose:()=>void;
    setPrepaid:(isOpen:boolean) => void;
    pinOpen:boolean;
    setpinOpen:(pinOpen:boolean)=>void;
}
const PrepaidComp:React.FC<ModalProps> = ({isOpen,setPrepaid,pinOpen,setpinOpen,onClose}) => {
 if(!isOpen)return null;
 
 const iconStyle = {
    width:'40px',
    height:"40px",
    cursor:"pointer",
  }
  return (
    <>
           <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[300px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[300px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[300px] p-4 rounded shadow-lg'>
          <div className='flex items-end justify-end' onClick={onClose}>
            <MdCancel style={iconStyle}/>
          </div>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Send Money To</h3>
       <h1 className='text-[30px] font-medium mb-4 text-[#ff00ff]'>Service Not Currently Available</h1>
         </div>
         </div>
     </div>
    </>
  )
}

export default PrepaidComp;