"use client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import "./form.css";
import InputField from "./Inputfield";
import { z } from "zod";
import { toast } from "react-toastify";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const gow = z.object({
  voterid: z
    .string()
    .min(0, { message: "Voterid must be at least 8 characters" }),
  email: z.string().email({ message: "Invalid Email address!" }),
  dob: z
    .string()
    .min(3, { message: "Date of Birth must be at least 8 characters" }),
  location: z
    .string()
    .min(3, { message: "District must be at least 8 characters" }),
});
type User = { name: string };
type Inputs = z.infer<typeof gow>;
const Upd = ({
  type,
  data,
  id,
  voterid,
  email,
  dob,
  location,
}: {
  type: "update";
  data?: any;
  id: any;
  voterid: any;
  email: any;
  dob: any;
  location: any;
}) => {
  const [open, setopen] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [districtId, setdistrictId] = useState(null);
  const [selectedOption, setSelectedOption] = useState<any>();
  const [loca, setloca] = useState("");
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

  const handleChange = (e: any) => {
    const value = e.target.value;
    const indexInSelect = e.target.selectedIndex;
    setloca(value);
    // const indexInDistricts = indexInSelect - 1;
    setdistrictId(indexInSelect);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(gow),
    defaultValues: {
      voterid: voterid || "",
      email: email,
      dob: dob,
      location: location,
    },
  });

  const onsubmit = handleSubmit((data) => {
    console.log("hlo");
    console.log(selectedOption.label);
    console.log(JSON.stringify(data));
    console.log(id);
    if(data.dob&&data.email&&data.location&&selectedOption.label)
    {

    
    fetch(`http://localhost:8080/api/users/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voterid: data.voterid,
        email: data.email,
        dob: data.dob,
        location: selectedOption.label,
      }),
    }
  )
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
}
else{
  toast("field cannot be empty")
}
});

  return (
    <form className="form-content" onSubmit={onsubmit}>
      <h6 className="text-xl font-semibold">
        Hey Admin you can update user {id}
      </h6>
     
      <span className="learn-font text-blue-800 ">
      
        Authentication information
      </span>
      <div className="content-wrap"></div>
      <span className=" learn-font text-blue-800">Personal Information</span>
      <div className="content-wrap">
        {/* <h1></h1> */}

        <InputField
          label="Voterid"
          name="voterid"
          defaultValue={data?.voterid}
          register={register}
          error={errors?.voterid}
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
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
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
          type="date"
          label="Dateofbirth"
          name="dob"
      //     defaultValue={
      //  data?.dob ? new Date(data?.dob).toISOString().split("T")[0] : ""
      // }
          defaultValue={data?.dob}
          register={register}
          error={errors?.dob}
        />
      
        {/* <InputField
        
          label="District"
          name="location"
          defaultValue={data?.location}
          register={register}
          error={errors?.location}
        /> */}

        {/* <select
         label="District"
          className="optionval division "
          size="3"
          aria-label="size 3 select example"
          value={loca}
          onChange={handleChange}
        >
          <option className="text-blue-800 font-semibold " value="">Select your Division</option>

          {districts.map((item, index) => (
            <option key={index} value={item?.name}>
              {item?.name}
            </option>
          ))}
        </select> */}

        <Select
          className="optionval text-gray-800"
          // isLoading
          
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={districts}
          placeholder={location}
          isClearable
        />
      </div>
      <button type="submit" className="bg-blue-400 p-2 text-white rounded-md ">
        Submit
        </button>
      </form>
    );
};

export default Upd;