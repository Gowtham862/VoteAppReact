"use client"
import React from "react";

import Image from "next/image";
import Tablesearch from "./Tablesearch";
import Pagination from "./Pagination";
import UserTable from "./UserTable";
import Deleted from '../../Dashboardfinal/Admind/Deleted'

import "../../Dashboardfinal/Parent/Tablesearc.css";
import Link from "next/link";
type userda={
    id:string;
    userEmail:string;
     UserVoterId:string;
  UserDoB :string;
     UserDistrict:string;

}
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
const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "UserId",
    accessor:"UserId",
    className:"hidden md:table-cell",
  },
   {
    header: "Uservoterid",
    accessor:"Uservoterid",
    className:"hidden md:table-cell",
  },
    {
    header: "UservDOB",
    accessor:"UservDOB",
    className:"hidden md:table-cell",
  },
    {
    header: "UserDistrict",
    accessor:"UserDistrict",
    className:"hidden md:table-cell",
  },
  {
    header:"Actions",
    accessor:"action"
  }
];

export default function page() {
  const renderRow = (item: userda) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm " key={item.id}>
      <td className=" p-2 flex items-center gap-4">
        <div className="flex flex-col">
          <h6 className=" object-cover font-semibold">gowtham</h6>
        </div>
      </td>
      {/* {item.voterid} */}
      <td className="hidden md:table-cell">3</td>
      {/* {item.dob} */}
      <td className="hidden md:table-cell">tn123</td>
      {/* {item.district} */}
      <td className="hidden md:table-cell">04-09-2025</td>
      <td>thirunelveli</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href="">
            <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/delete.jpg" alt="" width={20} height={20} />

            </button>
                           {/* <Deleted table='user' type='delete'/> */}
          </Link>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h6 className="hidden md:block text-lg font-smibold">All users</h6>

        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <Tablesearch />
          <div className="flex items-center gap-4 self-end">
            {/* <button className="w-8 h-8   iconcolor  ">
              <Image src="/shared image.png" alt="" height={14} width={14} />
            </button> */}

            {/* <button className="w-8 h-8 iconcolor ">
              <Image src="/filter.png" alt="" height={14} width={14} />
            </button> */}
            {/* <button className="iconcolor ">
              <Image src="/add.png" alt="" height={14} width={14} />
            </button> */}
            <Deleted table="user" type="shared image"/>
            <Deleted table='user' type='filter'/>
            <Deleted table="user" type="add"/>
          </div>
        </div>
      </div>
      {/*user list */}
    
        <UserTable columns={columns} renderRow={renderRow} data={userdata} />
        <Pagination />
      
      {/* pagination */}
      <div className=""></div>
    </div>
  );
}
