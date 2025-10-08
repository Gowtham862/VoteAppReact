import React, { useState, useEffect } from "react";
import Userform from "../Forms/userform";

import Image from "next/image";
import "../Admind/Deleted.css";

import { toast } from "react-toastify";
import Updateform from "./Updateformc";
type DeletedProps = {
  table: "user" | "voter" | "event";
  type: "add" | "filter" | "shared image" | "delete" | "update";
  data?: any;
  id?: string | number;
   partyname?:any,
   candidatename:string,
   districtname:any,
   districtid:any,
   partyid:any
  onDeleteSuccess?: () => void;
};

const Deletedid = ({
  table,
  type,
  data,
  id,
   partyname,
   candidatename,
   districtname,
   districtid,
   partyid,
  onDeleteSuccess,
}: DeletedProps) => {
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
  const [voter, setvoter] = useState("");
  const [email, setemail] = useState("");
  const updatedata = async (e: any) => {
    e.preventDefault();
    console.log(voter);
  };

  const close = () => {
    setShow(false);
  };
  const deleteItem = async (e: any) => {
    e.preventDefault();

    console.log("not sucess");
    try {
      const response = await fetch(
        `http://localhost:8080/candidates/${id}/deletecandi`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setopen(false);
        toast(`user id ${id} sucessfully deleted`);

        console.log(`Item with ID ${id} deleted successfully.`);

        setmessage(`user Id ${id} deleted successfully`);
        
        if (onDeleteSuccess) {
          onDeleteSuccess();
        }
      } else {
        console.error("Failed to delete item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  const Form = () => {
    return type === "delete" ? (
      <form onSubmit={deleteItem}>
        <div className="d-flex contents">
          <p className="text-ls">Are you want to delete this id</p>
        </div>
  
        <div className="buttons-delete">
          <button  type="submit" className="buttons-arrange border">
            delete
          </button>
          <button onClick={() => setopen(false)} className="buttons-arrange">
            Cancel
          </button>
        </div>
      </form>
    ) : type === "update" ? (
      <Updateform type="update" id={id} partyname={partyname} candidatename={candidatename} districtname={districtname} 
      districtid={districtid} partyid={partyid}/>
    ) : (
      <Userform type="add" />
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

export default Deletedid;
