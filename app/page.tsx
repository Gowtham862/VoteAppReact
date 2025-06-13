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
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href='./home  '>
            About us
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
     <div >
      
        </div>
        <div className='buttons'>
      
 
  <div className="container">
        <div onClick={adminback} className="  pro bg-info">Admin</div>
        <div onClick={gotouser} className="pro  bg-danger">User</div>
       
    </div>
 
 
 <div className='bg'></div>
 </div>

    </div>
  );
};
