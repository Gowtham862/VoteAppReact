import React, { useState, useEffect } from "react";
import Userform from "../Forms/userform";
import Image from "next/image";
import "./Deleted.css";
import useFetch from "./Service/Fetchdata";
type DeletedProps = {
  table: "user" | "voter" | "event";
  type: "add" | "filter" | "shared image" | "delete" | "update";
  data?: any;
  id?: string | number;
};

const Deleted = ({ table, type, data, id }: DeletedProps) => {
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
  const [dele, setdele] = useState(id);

//    const[deleteData, datas, error, loading]=useFetch('http://localhost:8080/api/users/13/delete');
// useEffect(()=>{
//   deleteItem()
// },[dele])
  const deleteItem = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${dele}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`Item with ID ${dele} deleted successfully.`);
      } else {
        console.error("Failed to delete item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  const Form = () => {
    return type === "delete" ? (
      <form>
        <div className="d-flex contents">
          <p className="text-ls">Are you want to delete this id</p>
        </div>
        <div className="buttons-delete">
          <button
            onClick={() => setdele(id)}
            className="buttons-arrange border"
          >
            delete
          </button>
          <button onClick={() => setopen(false)} className="buttons-arrange">
            Cancel
          </button>
        </div>
      </form>
    ) : type === "update" ? (
      <form>
        <h1></h1>
      </form>
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

export default Deleted;
