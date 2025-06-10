"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter();
  const back=()=>{
    router.push('/')
  }
  return (
   <div>
    <div>successfully</div>
    <button onClick={back}>Back</button>
   </div>
    
  );
}