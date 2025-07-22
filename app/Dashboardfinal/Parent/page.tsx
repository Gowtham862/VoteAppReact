"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Tablesearch from "./Tablesearch";
import Pagination from "./Pagination";
import UserTable from "./UserTable";
import Deleted from "../../Dashboardfinal/Admind/Deleted";
import { useState } from "react";
import "../../Dashboardfinal/Parent/Tablesearc.css";
import "../../Dashboardfinal/Parent/Paginat.css";
import Link from "next/link";
type userda = {
  userId: string;
  email: string;
  voterid: string;
  dob: string;
  location: string;
  data: any[];
};
const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "UserId",
    accessor: "UserId",
    className: "hidden md:table-cell",
  },
  {
    header: "Uservoterid",
    accessor: "Uservoterid",
    className: "hidden md:table-cell",
  },
  {
    header: "UservDOB",
    accessor: "UservDOB",
    className: "hidden md:table-cell",
  },
  {
    header: "UserDistrict",
    accessor: "UserDistrict",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
export default function page() {
  const [datas, setdatas] = useState<any[]>([]);
  const [page, addpage] = useState(0);
  // const [datas, setdatas] = useState<{ content: any[] }>({ content: [] });
const handle= async (userid:string)=>{
   console.log("userid"+userid);
}
  const empty = () => {
    console.log("users");
    console.log(datas);
  };
  useEffect(() => {
    empty();
  }, [datas]);
  useEffect(() => {
    data();
  }, [page]);

  const data = () => {
    // fetch("http://localhost:8080/api/users")
    // fetch("http://localhost:8080/api/users/page?page=0&size=3")
    fetch(`http://localhost:8080/api/users/getUserList?num=${page}`)
      .then((res) => res.json())
      .then((da) => {
        console.log(da);
        setdatas(da);
        // console.log("hlo"+da[0].email);
      });
  };
  const renderRow=(item:userda) => (
    <tr
      className="border-b border-gray-200 even:bg-slate-50 text-sm "
      key={item.userId}
    >
      <td className=" p-2 flex items-center gap-4">
        <div className="flex flex-col">
          {/* <h6 className=" object-cover font-semibold">{item.userId}</h6> */}
        </div>
      </td>
      {/* {item.voterid} */}
      
      <td className=" hide-table">{item.userId}
        {/* <button className="" onClick={()=>handle(item.userId)}></button> */}
      </td>
  
      {/* {item.dob} */}

      <td className=" hide-table">{item.voterid}</td>
      {/* {item.district} */}
      <td className=" hide-table">{item.dob}</td>
      <td>{item.location}</td>  
      <td>
        <div className="update">
          {/* <Link rel="stylesheet" href="" > */}
            <Deleted table="user" type="delete" id={item.userId} />
             <Deleted table="user" type="update" />
             {/* </Link> */}
         
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
            <Deleted table="user" type="shared image" />
            <Deleted table="user" type="filter" />
            <Deleted table="user" type="add" />
          </div>
        </div>
      </div>
      {/*user list */}

      <UserTable columns={columns} renderRow={renderRow} data={datas} />
      {/* <Pagination /> */}
      <div className="d-flex gap-3 justify-content-end">
        <button
          className="py-2 px-4 rounded-md bg-slate-200 rounded text-xs font-semibold "
          onClick={(e) => addpage((prev) => prev - 1)}
          disabled={page == 0 ? true : false}
        >
          previous
        </button>
        <button
          className="py-2 px-4 rounded-md bg-slate-200 text-xs rounded font-semibold "
          //  onClick={(e)=>{setvalue((prev)=>prev+1)}}
          onClick={(e) => addpage((prev) => prev + 1)}
          disabled={page == 3 ? true : false}
        >
          Next
        </button>
      </div>

      {/* pagination */}
      <div className=""></div>
    </div>
  );
}
