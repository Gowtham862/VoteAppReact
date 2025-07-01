"use client"
import "./content.css";
import { BsPersonCircle } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { RiLogoutBoxFill } from "react-icons/ri";
import { LuMapPinCheck } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
export default function Content({ toggleSidebar }) {
    const router=useRouter();

    const backhome=()=>{
        router.push('/');
    }
  return (
    <div className="">
      <div>
        <div className="contentheader    h-2"><img  onClick={toggleSidebar}  className="logo rounded" src="./menu.png"></img>
      Home</div>
      </div>
    
      <div className="dis">
       <div className="border w-25 h-100">Total Votes</div>
       <div className="border w-25 h-100">Total users</div>
       <div className="border w-25 h-100">users  Registration</div>
       </div>
    </div>
  );
}
