import React from 'react'
import { th } from 'zod/v4/locales';

const UserTable=({ columns,renderRow,data

}:
    {columns:{header: string ;accessor:string;className?:string}[];
    renderRow:(item:any)=>React.ReactNode;
       data:any[];
})=> {
    return (
        <div>

        
        <table className='w-full  mt-4'>
           <thead>
            <tr className='text-left  text-sm p-4 text-blue-800'>
                {columns.map((colu)=>(
                    <th className={colu.className} key={colu.accessor}>{colu.header}</th>
                    
                    
                ))}
            </tr>
           </thead>
       
           <tbody>{data.map((i)=>renderRow(i))}</tbody>
        </table>
        <div>
            {/* {data.map((item,index)=>{
               return <div key={index}>{item.email}</div>
            })} */}
        </div>
        </div>
    )
}

export default UserTable
