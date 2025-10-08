import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import {handleSearchValue} from '../../Dashboardfinal/Parent/UserTable'
export default function Tablesearch({data}:
    {data:any[]}) {
   const [search,setsearch]=useState("");
   const receive=(value:any)=>{
                   setsearch(value)
        handleSearchValue(search) 
   }
    return (
          <div className= 'w-full md:w-auto flex  items-center gap-2  top-div-input  px-2' >
                     <Image width={20}  height={10} src='/search.png' alt='search'/>

                     <input type='text' className='p-2 input-edits'onChange={(e)=>receive(e.target.value)} placeholder='search'/> 

                    {/* <h1>{data.map((i)=>i.userId)}</h1> */}
                 
                </div>
    )
}
// export default receive;