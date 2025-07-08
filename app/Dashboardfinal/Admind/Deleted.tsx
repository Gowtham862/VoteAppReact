import React, { useState } from "react";
import Userform from "../Forms/userform";
import Image from "next/image";
import "./Deleted.css";
type DeletedProps = {
  table: "user" | "voter" | "event";
  type: "add" | "filter" | "shared image" | "delete";
  data?: any;
  id?: number;
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
  const back = type === "add" ? "bg:yellow" : "bg-blue";
  const [open, setopen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? <form></form> : <Userform type="add" />;
  };
  return (
    <div>
      <button
        className={`${size} iconcolor flex items-center justify-center rounded-full  ${back}`}
        onClick={() => setopen(true)}
      >
        <Image src={`/${type}.png`} alt={type} height={14} width={14} />
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
