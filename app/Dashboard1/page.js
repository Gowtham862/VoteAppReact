"use client"
import Sidebar from '../Dashboard/Sidebar'
import Content from '../Dashboard/Content'
import { useState } from 'react';
import '../Dashboard1/page.css'
export default function page() {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <div className='main-content d-flex vh-100'>
             {/* {showSidebar && (
            <div>
             <Sidebar/>
            </div>)} */}
            <div className={`sidebar transition-all ${showSidebar ? 'sidebar-show' : 'sidebar-hide'}`}>
                    <Sidebar />
                  </div>
            <div className='w-100  bg-body-secondary'>
                <Content toggleSidebar={() => setShowSidebar((prev) => !prev)}/>
            </div>
        </div>
    )
}
