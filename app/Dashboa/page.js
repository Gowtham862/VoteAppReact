
"use client"
import React from 'react'
import '../Dashboa/page.css'
import Sidebar from '../Dashboard/Sidebar'
import Dashboard1 from './Dashboard1'
import { useState } from 'react'
export default function page() {
  const [showSidebar, setShowSidebar] = useState(true);
    return (

        <div className='main-content d-flex  vh-100 hlo'>
          {/* {showSidebar&&(
      <div>
        <Sidebar/>
      </div>)} */}
       <div className={`sidebar transition-all position-sticky ${showSidebar ? 'sidebar-show' : 'sidebar-hide'}`}>
              <Sidebar />
            </div>
            <div className=" w-100  hlooo ">
             <Dashboard1 toggleSidebar={()=> setShowSidebar((prev)=>!prev)} /> 
             
              </div>
        </div>
       
    )
}
