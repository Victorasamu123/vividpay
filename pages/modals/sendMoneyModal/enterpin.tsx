import React from 'react'

interface ModalProps{
    isOpen:boolean;
    setpinOpen:(isOpen:boolean)=>void;
    info:boolean;
    setinfo:(info:boolean)=>void;
}
const Enterpin: React.FC<ModalProps> = ({isOpen,setpinOpen,info,setinfo}) => {
    if(!isOpen) return null;

    const closePin =():void=>{
        setpinOpen(false);
        setinfo(true);
    }
  return (
    <>
       <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[300px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[300px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[300px] p-4 rounded shadow-lg'>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Enter pin</h3>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] border-[#623ECA] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={closePin}>Send</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default Enterpin;