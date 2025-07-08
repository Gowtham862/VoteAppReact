import React from 'react'
import Image from 'next/image'
export default function Tablesearch() {
    return (
          <div className= 'w-full md:w-auto flex  items-center gap-2  top-div-input  px-2' >
                     <Image width={20}  height={10} src='/search.png' alt='search'/>
                     <input type='text' className='p-2 input-edits' placeholder='search'/> 
                </div>
    )
}
