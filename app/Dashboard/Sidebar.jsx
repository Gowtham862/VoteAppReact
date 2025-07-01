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

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const backhome = () => {
    router.push("/");
  };

  return (
    <div className="w-20 ">
      <div className="d-flex flex-column  gap-5 m-2 position-sticky top-0">
        {/* <img className="logo rounded" src="./web-design.png"></img> */}
        {/* <img className="logo-text" src="./admin2.jpg"></img> */}
        <h3>Admin</h3>

        {/* Admin */}
        <Link href="./Dashboard1" className="textbold text-decoration-none  rounded">
          <MdDashboard size={20} />
          Dashboard 
        </Link>
        <Link
          href="./Dashboa"
          className="textbold   text-decoration-none rounded"
        >
        <FaUserShield  size={20}/>
          User Details
        </Link>
        <Link href="./Lastd" className="textbold text-decoration-none  rounded">
          {/* <img className="logo rounded" src="./web-design.png"></img> */}
          <MdDashboard size={20} />
          Voted Details
        </Link>
        <div className="textbold  rounded">
          <HiHome />
          voted
        </div>
        <div className="textbold  rounded" onClick={() => setVisible(false)}>
          <BsSearchHeartFill size={20} />
          Search
        </div>
        <div className="textbold  rounded" onClick={() => setVisible(false)}>
          <MdOutlineExplore size={20} />
          Explore
        </div>
        <div className=" position-fixed bottom-0 d-flex flex-column  m-3">
          <div className=" rounded">
            <img className="logo rounded" src="./menu.png"></img>More
          </div>
        </div>
      </div>
    </div>
  );
}
