import { useState } from "react";
import "../Dashboa/Dashboard1.css";

const array=[{
  id:'1',
  name:"gowtham",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'2',
  name:"Vsanth",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"chenai"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
{
  id:'3',
  name:"kalai",
  voterid:"1234",
  userdateofbirth:"12-04093",
  useremail:"gowthamk@gmail.com",
  userdistrict:"palani"
},
]
export default function Dashboard1({ toggleSidebar }) {
  const [search,setsearch]=useState("");
  return (
    <div className="">
      <div>
        <div className="contentheader h-2">
          <img
            onClick={toggleSidebar}
            className="logo rounded"
            src="./menu.png"
          ></img>
          Home
        </div>
      </div>
       {/* onChange={(e) => setemail(e.target.value)} */}
        <div>
        <input placeholder="Search" onChange={(e)=>setsearch(e.target.value)} className="ml-3 w-100  tableinput" type="text" />
       </div>
      <div style={{ overflowX: "auto", maxHeight: "400px", overflowY: "auto" }} className="centertable ">
       
        
        <table className="table  table-primary w-75 rounded p-3">
          
  <thead>
   {/* <tr  ><td colSpan="5">
    search</td></tr> */}
    <tr>
      <th  className="p-1 sticky-top bg-white " scope="col">UserId</th>
      <th className="p-1 sticky-top bg-white" scope="col">UserEmail</th>
      <th className="p-1 sticky-top bg-white" scope="col">UserVoterId</th>
      <th className="p-1 sticky-top bg-white" scope="col">UserDateof birth</th>
      <th className="p-1 sticky-top bg-white"scope="col">UserDistrict</th>
    </tr>
  </thead>
  <tbody>
    {array.map((item,index)=> ( 
    <tr className="p-1" key={index}>
    <th scope="row">{item.id}</th>
      {/* <td>{item.name}</td> */}
      <td className="p-1">{item.useremail}</td>
      <td className="p-1">{item.voterid}</td>
      <td className="p-1">{item.  userdateofbirth}</td>
       <td className="p-1">{item. userdistrict}</td>
      
    </tr>
    ))}
    
  </tbody>
</table>
      </div>
    </div>
  );
}
