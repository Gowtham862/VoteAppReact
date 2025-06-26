"use client";
import "../Dahboard/Sidebar.css";


import { useRouter } from 'next/navigation';
export default function Sidebar() {
const router=useRouter();
const backhome=()=>{
    router.push('/');
}

  return (
    <div  className="">
      <div className="d-flex flex-column  gap-3 m-3 position-fixed">
        {/* <img className="logo rounded" src="./web-design.png"></img> */}
        {/* <img className="logo-text" src="./admin2.jpg"></img> */}
        <h3>Admin</h3>
        
        {/* Admin */}
        <div className="textbold  rounded" > <img className="logo rounded" src="./web-design.png"></img>Dashboard 1</div>
        <div className="textbold  rounded"> <img className="logo rounded" src="./web-design.png"></img>Dashboard 2</div>
        <div className="textbold  rounded"> <img className="logo rounded" src="./web-design.png"></img>Dashboard 3</div>
        <div className="textbold  rounded" >
          {/* {" "}
          <i className="bi bi-house-heart-fill"></i>Home */}
           <img className="logo rounded" src="./house-Key.png"></img>
          Home
        </div>
        <div className="textbold  rounded"> <img className="logo rounded" src="./search.png"></img>Search</div>
        <div className="textbold  rounded"> <img className="logo rounded" src="./web-design.png"></img>Explore</div>
      
      
      <div className=" position-fixed bottom-0 d-flex flex-column  m-3" >
        
        <div className=" rounded">  <img className="logo rounded" src="./menu.png"></img>More</div>
        </div>
      </div>
    </div>
  );
}
