"use client"
import "../Dahboard/content.css";
import { useRouter } from 'next/navigation';
export default function Content() {
    const router=useRouter();

    const backhome=()=>{
        router.push('/');
    }
  return (
    <div className="">
      <div className="contentheader    h-2">dashboard</div>
      <div>
        {/* <h5 className="">dashboard</h5> */}
      </div>
      <div  onClick={backhome} className="logout">
         {/* <img title="Notification" className="logo rounded logo-icon " src="./unread.png"></img> */}
        <img title="Notification" className="logo rounded logo-icon " src="./unread.png"></img>
        <img title="Logout" className="logo rounded logo-icon " src="./exit.png"></img>
      </div>

      <div className="maincontent ">
        <div className="borderm rounded w-25 con-move bg-info "> 69 users</div>
        <div className="border rounded w-25  con-move bg-success"> 7 party</div>
        <div className="border rounded w-25 con-move bg-warning">
          {" "}
          5667 totalvote
        </div>
        <div className="border rounded w-25 con-move bg-danger">
          loading...{" "}
        </div>
      </div>
      <div className="content-center">
        
      </div>
    </div>
  );
}
