"use client"
import React from "react";

import Image from "next/image";
import Tablesearch from "../Parent/Tablesearch";
import Pagination from "../Parent/Pagination";
import UserTable from "../Parent/UserTable";

import "../../Dashboardfinal/Parent/Tablesearc.css";
import Link from "next/link";
type voted={
    id:string;
    party:string;
     UserVoterId:string;
  UserDoB :string;
     UserDistrict:string;

}
const userdata=[{
    id:"1",
    party:"DMK",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Chennai"
}
,{
    id:"2",
    party:"ADMK",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    {
    id:"3",
   party:"ADMK",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Thirunelveli"},
    {
    id:"4",
    party:"DMDK",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    {
    id:"5",
    party:"INC",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
    
     {
    id:"6",
     party:"BJb",
    UserVoterId:"TN@123",
    UserDoB:"12=09-2024",
    UserDistrict:"Coimbatore"},
     
   

]
const columns = [
  {
    header: "party",
    accessor: "info",
  },
  {
    header: "partyId",
    accessor:"UserId",
    className:"hidden md:table-cell",
  },
   {
    header: "PartyName",
    accessor:"Uservoterid",
    className:"hidden md:table-cell",
  },
    {
    header: "VotedFor",
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
  const renderRow = (item: voted) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm " key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <div className="flex flex-col">
          <h6 className=" object-cover font-semibold">{item.party}</h6>
        </div>
      </td>
      {/* {item.voterid} */}
      <td className="hidden md:table-cell">{item.id}</td>
      {/* {item.dob} */}
      <td className="hidden md:table-cell">tn123</td>
      {/* {item.district} */}
      <td className="hidden md:table-cell">{item.UserDistrict}</td>
      <td>thirunelveli</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href="">
            <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/delete.jpg" alt="" width={20} height={20} />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h6 className="hidden md:block text-lg font-smibold">Voted Details</h6>

        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <Tablesearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8   iconcolor  ">
              <Image src="/shared image.png" alt="" height={14} width={14} />
            </button>
            <button className="iconcolor ">
              <Image src="/filter.png" alt="" height={14} width={14} />
            </button>
            <button className="iconcolor ">
              <Image src="/add.png" alt="" height={14} width={14} />
            </button>
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
