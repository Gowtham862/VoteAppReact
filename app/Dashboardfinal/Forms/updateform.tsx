"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import "./form.css";
import InputField from "./Inputfield";
import { z } from "zod";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be a least 3 characters" })
    .max(8, { message: "username must be a least 3 characters" }),
  email: z.string().email({ message: "Invalid Email address!" }),
  Voterid: z
    .string()
    .min(8, { message: "Voterid must be a least 3 characters" }),
  Dateofbirth: z
    .string()
    .min(8, { message: "FirstName must be a least 3 characters" }),
  District: z
    .string()
    .min(8, { message: "LastName must be a least 3 characters" }),
 
});
type Inputs = z.infer<typeof schema>;
const updateform = ({ type, data ,voterid}: { type: "update"; data?: any ;voterid:any}) => {

   
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });
 const handles=(data:any)=>{
  
  console.log(data)

 }
  return (
    <form className="form-content" onSubmit={handleSubmit(handles)}>
      <h6 className="text-xl font-semibold">Hey Admin you can update user here </h6>
      <span className="learn-font"> Authentication information</span>
      <div className="content-wrap">
     
      </div>
      <span className=" learn-font ">Personal Information</span>
      <div className="content-wrap">
     

        <InputField
  
          label="Voterid"
          name="Voterid"
          // defaultValue={data?.Voterid}
          register={register}
          error={errors?.Voterid}
        />
        <InputField
     
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
 
          label="Dateofbirth"
          name="Dateofbirth"
          defaultValue={data?.Dateofbirth}
          register={register}
          error={errors?.Dateofbirth}
        />
        <InputField
     
          label="District"
          name="District"
          defaultValue={data?.District}
          register={register}
          error={errors?.District}
        />
      </div>
      <button  className="bg-blue-400 p-2 text-white rounded-md ">Submit</button>
    </form>
  );
};

export default updateform;
