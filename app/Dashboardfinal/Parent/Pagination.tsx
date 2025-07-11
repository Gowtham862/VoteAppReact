
import React from "react";
import "../../Dashboardfinal/Parent/Paginat.css"

const  Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        previous
      </button>
      <div className="paginationbutton">
    <button className="  px-2 rounded-sm bg-sky-100 ">1</button>
     <button className="px-2 rounded-sm bg-sky-100">2</button>
      <button className="px-2 rounded-sm bg-sky-100">3</button>
      ...
       <button className="px-2 rounded-sm bg-sky-100">10</button>
      </div>
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
