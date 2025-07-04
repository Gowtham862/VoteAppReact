"use client"

import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Dashboard1 from './Dashboard1'
import '../Lastd/page.css'
import { useState } from 'react';

export default function page() {
   const [showSidebar, setShowSidebar] = useState(true);
    return (

        <div className='main-layout d-flex   vh-100 hlo'>
          {/* { showSidebar&&(
             <div>
               <Sidebar/>
             </div>)} */}
              {/* <div className={`sidebar-container ${showSidebar ? 'show' : 'hide'}`}>
        <Sidebar />
      </div> */}
       <div className={`sidebar transition-all ${showSidebar ? 'sidebar-show' : 'sidebar-hide'}`}>
        <Sidebar />
      </div>
             <div className="vw-100  hloo ">
                    
                    <Dashboard1 className="dashboar" toggleSidebar={() => setShowSidebar((prev) => !prev)} />
                     </div>
               </div>
    )
}
