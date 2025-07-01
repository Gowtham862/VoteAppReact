import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Dashboard1 from './Dashboard1'
import '../Lastd/page.css'
export default function page() {
    return (
        <div className='d-flex   vh-100 hlo'>
             <div>
               <Sidebar/>
             </div>
             <div className="vw-100 hloo ">
                    
                    <Dashboard1/>
                     </div>
               </div>
    )
}
