import React from 'react'
import Image from 'next/image'
export default function Tablesearch() {
    return (
          <div className= 'w-full md:w-auto flex  items-center gap-2 text-xs ring-[1.5px]  rounded-full ring-gray-300 px-2' >
                     <Image width={20}  height={10} src='/search.png' alt='search'/>
                     <input type='text' className='w-[300px] p-2   bg-transparent outline-none ' placeholder='search'/> 
                </div>
    )
}
