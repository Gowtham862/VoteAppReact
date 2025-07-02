"use client";
import "./Sidebar.css";
import { BsSearchHeartFill } from "react-icons/bs";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const backhome = () => {
    router.push("/");
  };

  return (
    <div className="w-20 position sticky-top  ">
      <div className="d-flex flex-column sticky-top gap-4 m-3 ">
        {/* <img className="logo rounded" src="./web-design.png"></img> */}
        {/* <img className="logo-text" src="./admin2.jpg"></img> */}
       <GrUserAdmin />


        {/* Admin */}
        <Link href="./Dashboard1" className="textbold d-flex gap-2  text-decoration-none  rounded">
          <MdDashboard className="mt-1" size={20} />
            Dashboard 
        </Link>
        <Link
          href="./Dashboa"
          className="textbold  d-flex gap-2  text-decoration-none rounded"
        >
        <FaUserShield  size={20}/>
          User Details
        </Link>
        <Link href="./Lastd" className="textbold d-flex gap-2  text-decoration-none  rounded">
          {/* <img className="logo rounded" src="./web-design.png"></img> */}
          <MdDashboard className="mt-1" size={20} />
          Voted Details
        </Link>
        <div className="textbold d-flex gap-2  rounded">
          <HiHome className="mt-1" />
          voted
        </div>
        <div className="textbold d-flex gap-2   rounded" >
          <BsSearchHeartFill className="mt-1" size={20} />
          Search
          
        </div>
        <div className="textbold d-flex gap-2  rounded" >
          <MdOutlineExplore className="mt-1" size={20} />
          Explore
        </div>
        <div className=" position-fixed bottom-0 d-flex flex-column  m-3">
          {/* <div className=" rounded">
            <img className="logo rounded" src="./menu.png"></img>More
          </div> */}
        </div>
      </div>
    </div>
  );
}
