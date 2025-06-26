"use client";
import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CContainer
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilSpeedometer } from "@coreui/icons";

import "@coreui/coreui/dist/css/coreui.min.css";
import { useRouter } from "next/navigation";
import "../vote/vote.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [search, setsearch] = useState("");
  const [showvote, setshowvote] = useState([]);
  const router = useRouter();
  const back = () => {
    // router.push(`/user?${params}`)
  };
  // const filteredData = palani.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  // useEffect(() => {
  //   adminvote();
  // }, []);

  // const adminvote = async () => {
  //   console.log("gowtham get ready");
  //   fetch("http://192.168.68.146:8080/api/votes/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setshowvote([data]);
  //     })
  //     .catch((err) => {
  //       console.error("Fetch error:", err);
  //     });
  // };

  return (
    
    <div className="body">
      <CSidebar>
       <div className="adminheader">
        <div className=" border ">
          Admin
        </div>
        </div>
       </CSidebar>
      
         
    </div>
  );
}
