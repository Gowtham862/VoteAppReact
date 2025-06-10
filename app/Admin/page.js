"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Admin.css"
export default function Home() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const router=useRouter();
  const back=()=>{
    router.push('/')// user to see my webpage and go back
  }
  const welcome=()=>{
    if(email&&password==24)
    {
    router.push('/vote')
    }// want to navigate admin to see votes 
     else {
      alert('Enter valid name or password!');
  }
  }
 
  return (
    
   <div className="bimage">
     <div className="d-flex justify-content-center align-items-center centered-form">
    <form className="form-box">
      <h4 className="text-center mb-4"> Admin Login</h4>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" value={email}  onChange={(e) => setemail(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)} className="form-control form-control-sm" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button onClick={welcome} type="submit" className="btn btn-primary btn-sm w-100">Submit</button>
    </form>
  </div>
    <button onClick={back}>gowtham</button>
   </div>
    
  );
}