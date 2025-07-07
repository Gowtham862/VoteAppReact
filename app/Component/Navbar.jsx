import React from 'react'
import Image from 'next/image'
export default function Navbar() {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* <p>hlo</p> */}
        <div className= 'hidden  md:flex border border-red-500 focus:border-blue-500 item-center gap-2 text-xs ring[1.5px]  rounded-full ring-gray-300 px-2' >
             <Image width={20}  height={10} src='/search.png' alt='search'/>
             <input type='text' className='w-[300px] p-2   bg-transparent outline-none ' placeholder='search'/> 
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
            <span className='text-[10px] text-right'>Gowtham</span>
        </div>
       
        </div>
    )
}
