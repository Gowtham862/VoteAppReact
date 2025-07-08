import React from 'react'
import Image from 'next/image'
import './Menu.css'
export default function Navbar() {
    return (
        <div className=' admin-left p-4'>
            {/* <p>hlo</p> */}
        <div className= 'hidden md:flex flex  items-center gap-2  top-div-input  px-2' >
             {/* <Image width={20}  height={10} src='/search.png' alt='search'/> */}
              <Image width={20}  height={10} src='/search.png' alt='search'/>
             <input type='text' className=' p-2 input-edit ' placeholder='search'/> 
        </div>
        {/* <div className='flex gap-6 justify-end w-full '>
         <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer'>
              <Image width={20}  height={20} src='/search.png' alt='search'/>
        </div>
          <div className='w-7 h-7 flex items-center justify-center cursor-pointer'>
              <Image width={20}  height={20} src='/search.png' alt='search'/>
        </div>
        </div> */}
        <div className='flex flex-col'>
            <span className='text-Xs leading-3 font-medium'>Admin</span>
            <span className=' nav-left  text-right'>Gowtham</span>
        </div>
       
        </div>
    )
}
