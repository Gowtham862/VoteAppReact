import React, { useState, useEffect } from "react";
import Userform from "../Forms/userform";
import Upd from "../Forms/Upd";
import Image from "next/image";
import "./Deleted.css";
import "../../Dashboardfinal/Admind/Service/deleteuser"
import { toast } from "react-toastify";
import { deleteuse } from "../../Dashboardfinal/Admind/Service/deleteuser";
type DeletedProps = {
  table: "user" | "voter" | "event";
  type: "add" | "filter" | "shared image" | "delete" | "update";
  data?: any;
  voterid?:any,
  email?:any,
  dob?:any,
  location?:any,
  id?: string | number;
   onDeleteSuccess?: () => void;
};

const Deleted = ({ table, type,voterid, data, email,id ,dob ,location,onDeleteSuccess}: DeletedProps) => {
  const size =
    type === "add"
      ? "w-8 h-8"
      : type === "filter"
      ? "w-8 h-8"
      : type === "shared image"
      ? "w-8 h-8"
      : "w-7 h-7";
  const back =
    type === "add"
      ? "bg:yellow"
      : type == "filter"
      ? "bg-yellow"
      : type === "shared image"
      ? "bg-yellow"
      : "bg-white";

  const [open, setopen] = useState(false);
const [show, setShow] = useState(false);
  const [message, setmessage] = useState("");
  const [voter,setvoter]=useState("");
  const[emails,setemail]=useState("");
 const updatedata= async(e:any)=>{
 e.preventDefault();
  console.log(voter);

 }
 
   const close=(()=>{
      setShow(false);
    })
  const deleteItem = async (e:any) => {
    e.preventDefault();
    console.log(id);
     const response=await deleteuse(id);
      if (response) {
          toast(`user id ${id} deleted succesffully`)
      }
  };
  const Form = () => {
    return type === "delete" ? (
      <form onSubmit={deleteItem}>
        <div className="d-flex contents">
          <p className="text-ls">Are you want to delete this id</p>
        </div>
      
       
            <div className="buttons-delete">
          <button
            type="submit"
            className="buttons-arrange border">
            delete
          </button>
          <button onClick={() => setopen(false)} className="buttons-arrange">
            Cancel
          </button>
           
        </div>
      </form>
    ) : type === "update" ? (
      
      <Upd  type="update" id={id} voterid={voterid} email={email} dob={dob} location={location}/>
     
    
    ) : (
      <Userform type="add"  />
    );
  };
  return (
    <div>
      <button
        className={`${size} iconcolor flex items-center justify-center rounded-full  ${back} `}
        onClick={() => setopen(true)}
      >
        <Image src={`/${type}.png`} alt={type} height={16} width={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0  opacity Z-50 flex items-center justify-center">
          <div className="bg-gray-100 p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <span className="close-button"> &times;</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deleted;
