import React from "react";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;

  defaultValue?: string;
  error?: {
    message?: string;
  };
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,

}: InputFieldProps) => {
  return (
    <div className="flex flex-col  w-full md:w-1/4">
      <label className="text-sm font-semibold text-blue-800">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-1 ring-gray-300 p-2 out rounded-md text-sm w-full"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
