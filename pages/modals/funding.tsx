import React from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
const Funding: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white w-[50%] h-[400px] p-4 rounded shadow-lg flex justify-center items-center flex-col backdrop-filter backdrop-blur-sm'>
       <h3 className='text-[30px] font-medium mb-4'>Card Details</h3>
         <input type="email" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <input type="email" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card expiry date'/>
         <input type="email" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter card CVV '/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={onClose}>Proceed</button>
         </div>
     </div>
    </>
  )
}

export default Funding;