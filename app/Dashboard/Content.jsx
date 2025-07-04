"use client"
import "./content.css";
import { BsPersonCircle } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { FaUserShield } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa";
export default function Content({ toggleSidebar}) {
    const router=useRouter();

    const backhome=()=>{
        router.push('/');
    }
  return (
    <div className="">
      <div>
        <div className="contentheader"><img  onClick={toggleSidebar}  className="logo rounded" src="./menu.png"></img>
      Home</div>
      </div>
  
   
    <div className="contentin-dashboard">
        
         <div className="border bg-white Total-Votes rounded w-25">
        <h1 className="m-5 text-dark ">66</h1>
        <p  className="">Total Votes</p>
        <span></span>
          <div className="bor"></div>
        </div>
        <div className="border bg-white rounded Total-users w-25">
        <h1 className="m-5 text-dark ">150</h1>
        <p  className="">  <FaUserShield className="" size={20}/>Total users</p>
        </div>
         
         <div className="border w-25 bg-white rounded registeration">
        <h1 className="m-5 text-dark ">15</h1>
        <p  className="  "> <FaRegistered size={20} />Registerations</p>
        {/* <p className="mt-5 ">moreinfo</p> */}
        </div>
        
        </div>
        {/* <div>
        <div className="border w-50 graph">hlo</div>
        </div> */}
    </div>
  );
}
