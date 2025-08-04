"use client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// import "./form.css";
import "../Forms/form.css";
import Select from "react-select";
import InputField from "../Forms/Inputfield";
import { z } from "zod";
import { toast } from "react-toastify";
const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const gow = z.object({
  candidatename: z
    .string()
    .min(8, { message: "Voterid must be at least 8 characters" }),
  districtname: z.string().min(3, { message: "Invalid Email address!" }),
  partyName: z
    .string()
    .min(3, { message: "Date of Birth must be at least 8 characters" }),
  partydesc: z
    .string()
    .min(3, { message: "District must be at least 8 characters" }),
});
type OptionType = {
  value: string;
  label: string;
};
type Inputs = z.infer<typeof gow>;
const Updateform = ({
  type,
  data,
  id,
  partyname,
  candidatename,
  districtname,
}: {
  type: "update";
  data?: any;
  id: any;
  partyname: any;
  candidatename: string;
  districtname:any
}) => {
  const [open, setopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [loca, setloca] = useState("");
  const [districts, setDistricts] = useState([]);
const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
    console.log('Selected:', option);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(gow),
    defaultValues: {
      partyName: partyname,
      candidatename: candidatename,
      districtname:districtname

    },
  });
  const onsubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    console.log(id);
    fetch(`http://localhost:8080/candidates/${id}/updatecandi`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candi_name: data.candidatename,
        district: {
          id: 1,
          name: data.districtname,
        },
        party: {
          partyId: 3,
          partyName: data.partyName,
          partyDesp: "tamilaga vetri kalagam",
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          setopen(false);
          // toast(`HTTP error! status: ${response.status}`);
          toast(`user id ${id} updated successfully`);
          reset();
        } else {
          toast(response.json());
        }
        // return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });

  useEffect(() => {
    user();
  }, []);
  const user = () => {
    console.log("gowtham get ready");
    fetch("http://localhost:8080/district/all")
      .then((res) => res.json())
      .then((dat) => {
        console.log("Fetched data:", dat);
        console.log("Array length:", dat.length);
        const l = dat.length;
        // if (Array.isArray(dat)) {
        const formattedDistricts = dat.map((district: any) => ({
          value: district.id, // or district.name if no id
          label: district.name,
        }));
        setDistricts(formattedDistricts);
        // setDistricts(dat);
        // }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };

  return (
    <form className="form-content" onSubmit={onsubmit}>
      <h6 className="text-xl font-semibold">
        Hey Admin you can update user {id} here{" "}
      </h6>
      <span className="learn-font"> Authentication information</span>
      <div className="content-wrap"></div>
      <span className=" learn-font ">personal Information</span>
     <h1>{districtname}</h1>
      <div className="content-wrap ">
        <InputField
          label="Candidatename"
          name="candidatename"
          defaultValue={data?.candidatename}
          register={register}
          error={errors?.candidatename}
        />
        {/* <InputField
          label="Districtname"
          name="districtname"
          defaultValue={data?.districtname}
          register={register}
          error={errors?.districtname}
        /> */}

        <Select value={selectedOption} 
          className="optionval text-gray-800"
          defaultValue={data?.districtname}
          isClearable
          onChange={ handleChange }
          options={districts}
          placeholder={districtname}
        />
       
        <InputField
          label="PartyName"
          name="partyName"
          defaultValue={data?.partyName}
          register={register}
          error={errors?.partyName}
          inputProps={{
            readOnly: true,
            style: {
              backgroundColor: "rgba(191, 203, 221, 1)",
              color: "white",
              cursor: "not-allowed",
            },
          }}
        />

        <InputField
          label="Partydesc"
          name="partydesc"
          // defaultValue={data?.partydesc}
           defaultValue={data?.districtname}
          register={register}
          error={errors?.partydesc}
        />
      </div>
      <button type="submit" className="bg-blue-400 p-2 text-white rounded-md ">
        Submit
      </button>
    </form>
  );
};

export default Updateform;
