
import '../Dahboard/dash.css'
import Content from './Content'
import Sidebar from './Sidebar'

export default function Dashboard() {
    return (
        <div>
       <div className='d-flex  vh-100'>
       
        <div className='w-20   sidebarback'><Sidebar/></div>
          <div className='w-100  bg-body-secondary ' ><Content/></div>
       </div>
      
        </div>
    )
}
