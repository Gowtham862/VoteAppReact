"use client"
import React, { useState } from 'react';
import './vote.css'
export default function Homead() {
  // const [party, setparty] = useState("");
   const[name,setname]=useState("");
   const[voteid,setvoteid]=useState("");
  const[namerr,setnamerr]=useState("");
  const [optionerror,setoptionerror]=useState("");
  const[voteiderr,setvoteiderr]=useState("");
  const handleChange = (e) => {
    setparty(e.target.value);
    console.log("Selected:", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!party) {
    //  setoptionerror("Please select an option before submitting.");
    //   return ;
    // }
    if(!name)
    {
      setnamerr("name cannot be Null");
      return ;
    }
    if(!voteid)
    {
      setvoteiderr("vote id cannot be null");
      return ;
    }
   setnamerr("");
   setoptionerror("");
   setvoteiderr("");
    try {
      // console.log("hlo",party);
      console.log("voteid",voteid);
      const response = await fetch("http://192.168.68.113:8080/api/votes/increment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({voteid: voteid }),
      });
 
      const result = await response.text();
      alert(result);
      console.log(result);
    } catch (error) {
      console.error("Error signing up:", error);
    }
    // setparty("");
    setname("");
    setvoteid("");
  };

  return (
    <div className='color'>
      
           <div className=' p-2 text-bg-info d-flex justify-content-center'>
            Welcome, proud citizens aged 20!
        Your voice matters now more than ever.
          Online voting makes it easier, faster, and safer.
           </div>

        <div className="hlo m-3">
     
      <div className='all m-3'>
        <form className='form-box'>
          <h3>vote day</h3>
          <div className='mb-3'>
                <label  className="mb-1" htmlFor=" ">Enter your Full Name</label>
              { namerr&& <p className='optioner'>{namerr}</p>}
           <input value={name} onChange={(e)=>setname(e.target.value)} className='form-control form-control-sm'  ></input>
          </div>
          <div className='mb-3'>
          <label  className="mb-1" htmlFor="voterid">Enter your voter id</label>
          {voteiderr &&<p className="optioner">{voteiderr}</p>}
           <input value={voteid} onChange={(e)=>setvoteid(e.target.value)}
           className='form-control form-control-sm '  ></input>
          </div>
        {optionerror&&  <p className='optioner'>{optionerror}</p>}
      {/* <select className="form-select ff" onChange={handleChange}>
      
        <option value="">select</option>
        <option value="Admk">Admk</option>
        <option value="tvk">Tvk</option>
        <option value="Dmdk">Dmdk</option>
        <option value="Bjp">Bjp</option>
        <option value="Inc">Inc</option>
        <option value="Dmk">Dmk</option>
      </select> */}
        <button className="btn btn bg-danger text-dark btn-sm w-100 mt-3" onClick={handleSubmit}>
        Submit
      </button>
</form>
      {/* <p className="mt-2">You selected:{party}</p> */}

    
    </div>
    </div>
   
    </div>

  );
}
