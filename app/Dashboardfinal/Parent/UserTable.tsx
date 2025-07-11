import React from 'react'
import { th } from 'zod/v4/locales';
const userdata=[{
    id:"1",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Chennai"
}
,{
    id:"2",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    {
    id:"3",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Thirunelveli"},
    {
    id:"4",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    {
    id:"5",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    
     {
    id:"6",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
     {
    id:"7",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
     {
    id:"8",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"kanchipuram"},
    {
    id:"9",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"pollachi"},
    {id:"10",
    userEmail:"gowthamk712812@gmail.com",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Thirupur"},
    
    


]
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
            <tr className='text-left  text-sm  text-gray-500'>
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
