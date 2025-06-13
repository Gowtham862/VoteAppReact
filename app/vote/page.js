"use client"
import { useRouter } from "next/navigation";
import '../vote/vote.css'
export default function Home() {
  const router=useRouter();
  const back=()=>{
    router.push('/')
  }
  return (
   <div>
    <div className=" bg-danger p-3">Welcome Admin now you can </div>
    <div className="adminback ">
    <div className=" bg-primary p-5 w-50">primary</div>
     <div className=" bg-primary p-5 w-50">primary</div>
      <div className=" bg-primary p-5 w-50">primary</div>
      </div>
    <button onClick={back}>Back</button>
   </div>
    
  );
}