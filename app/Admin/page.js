"use client"
import { useRouter } from "next/navigation";
import { Ripple } from "react-css-spinners";
import { useRef, useState } from "react";
import "./Admin.css"
export default function Home() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [emailerr,setemailerr]=useState("");
  const[passeror,setpasseror]=useState("");
  const[loader,setloader]=useState(false);
  const inputfocus=useRef(null);
  const router=useRouter();
  const back=()=>{
    router.push('/')// user to see my webpage and go back
  }
  const welcome=(e)=>{
   e.preventDefault();
  //  inputfocus.current.focus();
  // //  inputfocus.current.style.backgroundcolor="gray";
  //  inputfocus.current.style.boxshadow = "none"; 
  //  inputfocus.current.style.bordercolor = "green"; 
  //  inputfocus.current.focus();
 
  // inputfocus.current.style.boxShadow = "none";
  // inputfocus.current.style.borderColor = "green";


   if(!email)
  {
    setemailerr("Email cannot be null");
    return ;
  }
  if(!password)
  {
    setpasseror("Password cannot be null");
  }
  setemail("");
  setpassword("");
   setloader(true);
  setTimeout(()=>{
    if(email&&password==24)
    {
     
    router.push('/Dashboardfinal')
    }// want to navigate admin to see votes 
     else {
      setloader(false);
      alert('Enter valid name or password!');
  }
 }
),3000}
  return (
    
   <div className="bimage">
     <div className="d-flex justify-content-center align-items-center centered-form">
    <form className="form-box formbgcolor">
      <h4 className="text-center mb-4"> Admin Login</h4>
      <div className="mb-0">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      { emailerr&& <p className="adminerror">{emailerr}</p>}
        <input value={email}  onChange={(e) => setemail(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-2 ">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        {passeror&&<p className="adminerror">{passeror}</p>}
        <input type="password" value={password} ref={inputfocus}  onChange={(e) => setpassword(e.target.value)} className="form-control form-control-sm" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div >
    {loader && (
    <div style={{
      position: 'absolute',
      top: '70%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
    }}>
      {/* <Ripple 
        color="rgb(13, 16, 24)" 
        size="100"
        thickness={4}
      /> */}
      <div className="spinner-border  text-warning" role="status">
  <span className="sr-only"></span>
</div>
    </div>
  )}
      <button onClick={welcome} type="submit" className="btn btn-primary btn-sm w-100">Submit</button>
    </form>
  </div>
    <button  onClick={back}>gowtham</button>
   </div>
    
  );
}