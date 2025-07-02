"use client";
import "./dash.css";
import Content from "./Content";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <div className="main-layout d-flex vh-100">
        {/* {showSidebar && (
          <div className={`sidebar transition-all ${showSidebar ? 'sidebar-show' : 'sidebar-hide'}`}>
            <Sidebar />
          </div>
        )} */}
        <div className={`sidebar transition-all ${showSidebar ? 'sidebar-show' : 'sidebar-hide'}`}>
                <Sidebar />
              </div>
        <div className="w-100  ">
          <Content className="wel" toggleSidebar={() => setShowSidebar((prev) => !prev)} />
           
        </div>
      </div>
    </div>
  );
}
