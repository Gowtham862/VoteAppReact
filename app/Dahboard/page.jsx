"use client"
import '../Dahboard/dash.css'
import Content from './Content'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Dashboard() {
      const [showSidebar, setShowSidebar] = useState(true);
   
  

    return (
        <div>
       <div className='d-flex  vh-100'>
       
      {showSidebar&&(  <div className='w-20   sidebarback' >
<Sidebar />
            
        </div>)}
          <div className='w-100  bg-body-secondary '><Content toggleSidebar={() => setShowSidebar(prev => !prev)}/></div>
       </div>
      
        </div>
    )
}
