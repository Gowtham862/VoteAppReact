'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // for app router
export default function Home() {
 const router = useRouter();

  const adminback = () => {
    router.push('/Admin');}
    const gotouser = () => {
    router.push('/user');} // Navigate to /Admin
  return (

 <div className="kkk">
      <div className="header">
        <Link href='./home' className="underline">About</Link>
        <div className="underline">Home</div>
        <div className="underline">Help</div>
        <div className="underline">Features</div>
      </div >
     
       <div  className="ner">
        <div onClick={adminback} className=" pro  ">Admin</div>
        <div onClick={gotouser} className=" pro ">User</div>
      </div>
    
    
     
      <div>
        <div className="slider-container">
  <div className="slider-track">
    <img src="./vote5.jpg" alt="Image" />
    <img src="./vote6.png" alt="Image" />
    <img src="./vote8.jpg" alt="Image" />
    <img src="./vote7.png" alt="Image" />
    <img src="./vote10.webp"alt="Responsive image" />
    <img src="./new.avif" alt="Image" />
   
    <img src="./signup.jpg" alt="Image" />
        <img src="./tnlogo.png" alt="Image" />
    <img src="./voteforinfia.jpg" alt="Image" />
    <img src="./signup.jpg" alt="Image" />

    
   
  </div>
 
</div>
  {/* <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum.</p> */}
      </div>
     
    </div>
  );
};
