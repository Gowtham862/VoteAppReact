"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./form.css";
import InputField from "./Inputfield";
import { z } from "zod";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be a least 3 characters" })
    .max(20, { message: "username must be a least 3 characters" }),
  email: z.string().email({ message: "Invalid Email address!" }),
  password: z
    .string()
    .min(8, { message: "password must be a least 3 characters" }),
  firstName: z
    .string()
    .min(8, { message: "FirstName must be a least 3 characters" }),
  LastName: z
    .string()
    .min(8, { message: "LastName must be a least 3 characters" }),
  phonenumber: z
    .string()
    .min(8, { message: "phonenumber must be a least 3 characters" }),
  Address: z.string().min(8, { message: "Address is required!" }),
  DOB: z.string().min(8, { message: "DOB is required!" }),
});
type Inputs = z.infer<typeof schema>;
const userform = ({ type, data }: { type: "add" | "update"; data?: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const handle = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="form-content" onSubmit={handle}>
      <h6 className="text-xl font-semibold">Create a userName</h6>
      <span className="learn-font"> Authentication information</span>
      <div className="content-wrap">
        <InputField
          label="username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="Email"
          defaultValue={data?.Email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className=" learn-font ">personal Information</span>
      <div className="content-wrap">
        <InputField
          label="Firstname"
          name="Firstname"
          defaultValue={data?.Firstname}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="LastName"
          name="LastName"
          defaultValue={data?.LastName}
          register={register}
          error={errors?.LastName}
        />
        <InputField
          label="Phone"
          name="Phone"
          defaultValue={data?.Phone}
          register={register}
          error={errors?.phonenumber}
        />

        <InputField
          label="Firstname"
          name="Firstname"
          defaultValue={data?.Firstname}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="LastName"
          name="LastName"
          defaultValue={data?.LastName}
          register={register}
          error={errors?.LastName}
        />
        <InputField
          label="Phone"
          name="Phone"
          defaultValue={data?.Phone}
          register={register}
          error={errors?.phonenumber}
        />
        <InputField
          label="dob"
          name="dob"
          defaultValue={data?.dob}
          register={register}
          error={errors?.DOB}
        />
      </div>
      <button className="bg-blue-400 p-2 text-white rounded-md ">Submit</button>
    </form>
  );
};

export default userform;
