import React from 'react'

import '../Dashboa/page.css'
import Sidebar from '../Dashboard/Sidebar'
import Dashboard1 from './Dashboard1'
export default function page() {
    return (
        <div className='d-flex  vh-100 hlo'>
      <div>
        <Sidebar/>
      </div>
      <div className="vw-100 vh-100  hlooo ">
             <Dashboard1/> 
             
              </div>
        </div>
       
    )
}
