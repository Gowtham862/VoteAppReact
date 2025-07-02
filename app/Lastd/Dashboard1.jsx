
import '../Lastd/page.css'

export default function Dashboard1({toggleSidebar}) {
    return (
        <div className='viewportheight'>
            <div className='votedpartyheader'><img  onClick={toggleSidebar}  className="logo rounded" src="./menu.png"></img>
        Home
      </div>
           
          
           <div className='heightfor'>

           <div className='FUN'>
          
            <div className='border w-25 bg-secondary  rounded heighhh'>Voted for dmk 70   </div>
          
            <div className='border w-25 bg-secondary rounded heighhh'>Voted for Admk 80</div>
            <div className='border w-25 bg-secondary rounded heighhh'>Voted for DMdk 98</div>
           
           </div>
           <div className='votedparty'>
             <div className='border w-25 bg-secondary rounded heighhh '>Voted for dmk 90</div>
            <div className='border w-25 bg-secondary rounded  heighhh'>Voted for Admk 89</div>
            <div className='border w-25  bg-secondary rounded   heighhh'>Voted for DMdk 90</div>
           </div>
           </div>
        </div>
    )
}
