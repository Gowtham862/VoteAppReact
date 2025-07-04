import { useState } from "react";
import { useEffect } from "react";
import "../Dashboa/Dashboard1.css";
import { BsSearchHeartFill } from "react-icons/bs";

const array = [
  {
    id: "1",
    name: "gowtham",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "2",
    name: "Vsanth",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "chenai",
  },
  {
    id: "3",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "4",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "5",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "6",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "7",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "8",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
  {
    id: "9",
    name: "kalai",
    voterid: "1234",
    userdateofbirth: "12-04093",
    useremail: "gowthamk@gmail.com",
    userdistrict: "palani",
  },
 
];
export default function Dashboard1({ toggleSidebar }) {
  const [search, setsearch] = useState("");
  const [page,setpage]=useState(1);
  const [data,setdata]=useState([]);
  useEffect(()=>{
   fetch(`http://localhost:3005/posts?_limit=7&_page=${page}`)
       .then((res) => res.json())
       .then((data)=>{
        console.table(data)
        setdata(data);
       })
  },[page])
 

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
          
      
        <input
          placeholder="Search"
          onChange={(e) => setsearch(e.target.value)}
          className="ml-3 w-100 p-1  tableinput"
          type="text"
        />
      </div>
      <div
        // style={{ overflowX: "auto", maxHeight: "400px", overflowY: "auto" }}
        className="centertable "
      >
        <table className="table w-100 table-striped  rounded ">
          <thead>
            {/* <tr  ><td colSpan="5">
    search</td></tr> */}
            <tr>
              <th className="p-1 sticky-top bg-white " scope="col">
                UserId
              </th>
              <th className="p-1 sticky-top bg-white" scope="col">
                UserEmail
              </th>
              <th className="p-1 sticky-top bg-white" scope="col">
                UserVoterId
              </th>
              <th className="p-1 sticky-top bg-white" scope="col">
                UserDateof birth
              </th>
              <th className="p-1 sticky-top bg-white" scope="col">
                UserDistrict
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search === ""
                  ? item
                  : item.useremail
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.userdistrict
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.userdateofbirth
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.voterid.toLowerCase().includes(search.toLowerCase());
                      
              })
              .map((item, index) => (
                <tr className="p-1" key={index}>
                  <th scope="row">{item.id}</th>
                  {/* <td>{item.name}</td> */}
                  <td className="p-1">{item.useremail}</td>
                  <td className="p-1">{item.voterid}</td>
                  <td className="p-1">{item.userdateofbirth}</td>
                  <td className="p-1">{item.userdistrict}</td>
                </tr>
              ))}
          </tbody>
        </table>
         <div className="previous">
      
        <button type="button" onClick={()=>{setpage((prev)=>prev-1)}} className="btn btn-primary m-4 ">Previous</button>
         <button type="button"  onClick={()=>{setpage((prev)=>prev+1)}} className="btn btn-primary m-4 ms-3 px-4   ">Next </button>
      </div>
      </div>
     
    </div>
  );
}
