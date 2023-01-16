import React from 'react'
import icon from '../../public/images/svgexport-15.svg'
const HeaderComp = () => {
  return (
    <>
      <header className='bg-[#FFF7F2] sticky top-0 z-10'>
         <section className='flex max-w-4xl justify-between items-center'>
            <div>
                <img src={icon} alt="hello" width={100} height={100}/>
            </div>
         </section>
      </header>
    </>
  )
}

export default HeaderComp;