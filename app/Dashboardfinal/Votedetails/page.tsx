"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Tablesearch from "../Parent/Tablesearch";
import Pagination from "../Parent/Pagination";
import UserTable from "../Parent/UserTable";
import "../../Dashboardfinal/Votedetails/Votdetails.css";
import Deleteid from "../../Dashboardfinal/Votedetails/Deleteid";
import "../../Dashboardfinal/Parent/Tablesearc.css";
import "../../Dashboardfinal/Parent/Paginat.css";
import Link from "next/link";
import { getallparty } from "./Service/getallparty";

type Candidate = {
  candiId: number;
  candi_name: string;
  party: {
    partyId: number;
    partyName: string;
    partyDesp: string;
    partySymbol: string | null;
    deleted: boolean;
    createdon: string | null;
    createdby: string | null;
    updatedon: string | null;
    updatedby: string | null;
  };
  district: {
    id: number;
    name: string;
  };
};


const columns = [
  {
    header: "C_Id",
    accessor: "info",
  },
  {
    header: "PartyId",
    accessor: "UserId",
    className: "hidden md:table-cell",
  },
  {
    header: "Partyname",
    accessor: "partyname",
    className: "hidden md:table-cell",
  },
  {
    header: "Candidatename",
    accessor: "candidatename",
    // className: "hidden md:table-cell",
  },
  {
    header:"Districtid",
    accessor:"districtid",
     className: "hidden md:table-cell",

  },
  {
    header: "CandidateDistrict",
    accessor: "UserDistrict",
    className: "hidden md:table-cell ",
  },
  {
    header: "Actions",
    accessor: "action",
    
  },
  
];

export default function page() {
  const [data, setData] = useState<any>([]);
 const [page, addpage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
    datas();
  }, [page]);
  const datas=async() => {
     
    const response= await getallparty(page);
    // console.log(response.data)
    //   setData(response.data);

    fetch(`http://localhost:8080/candidates/getcandidate?num=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;
  const renderRow = (item: Candidate) => (
    <tr
      className="border-b border-gray-200 even:bg-slate-50 text-sm "
      key={item.candiId}
    >
      <td className="flex items-center gap-4 p-2">
        <div className="flex flex-col">
          <h6 className=" object-cover font-semibold">{item.candiId}</h6>
        </div>
      </td>
      {/* {item.voterid} */}
      <td className="hidden md:table-cell">{item.party.partyId}</td>
      {/* {item.dob} */}
      
      <td className="hidden md:table-cell">{item.party.partyName}</td>
      {/* {item.district} */}
      
      <td className="hidden md:table-cell">{item.candi_name}</td>
          <td>{item.district.id}</td>
      <td>{item.district.name}</td>
  
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href=""> */}
          <Deleteid table="user" type="delete" id={item.candiId} onDeleteSuccess={datas} candidatename="" districtname=""/>
           <Deleteid table="user" type="update" id={item.candiId}  partyname={item.party.partyName}   candidatename={item.candi_name} districtname={item.district.name}/>
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/delete.jpg" alt="" width={20} height={20} />
             
            </button> */}
          {/* </Link> */}
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
              <Image
                src="/shared image.png"
                className=""
                alt=""
                height={14}
                width={14}
              />
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

      <UserTable columns={columns} renderRow={renderRow} data={data} />
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
      <div className=""></div>
    </div>
  );
}
