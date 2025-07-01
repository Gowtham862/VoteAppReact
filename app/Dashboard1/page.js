"use client"
import Sidebar from '../Dashboard/Sidebar'
import Content from '../Dashboard/Content'
import { useState } from 'react';

export default function page() {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <div className='d-flex vh-100'>
             {showSidebar && (
            <div>
             <Sidebar/>
            </div>)}
            <div className='w-100  bg-body-secondary'>
                <Content toggleSidebar={() => setShowSidebar((prev) => !prev)}/>
            </div>
        </div>
    )
}
