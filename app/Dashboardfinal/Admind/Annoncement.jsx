import React from "react";
import "../../Dashboardfinal/Admind/Calender.css";
const Annoncement = () => {
  return (
    <div className="bg-white  p-4 rounded-md">
      <div className="announcements">
        <h6 className="text-xl font-semibold">Announcements</h6>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="background-announcement rounded-md p-4">
          <div className="announcements">
            <h6>Every citizen To Vote</h6>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-05-2026
            </span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, suscipit?</p>
        </div>
      </div>
       <div className="flex flex-col gap-4 mt-4">
        <div className="background-third rounded-md p-4">
          <div className="announcements">
            <h6>Time to Raise</h6>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-05-2026
            </span>
          </div>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, suscipit?</p>
        </div>
      </div>
       <div className="flex flex-col gap-4 mt-4">
        <div className="background-second rounded-md p-4">
          <div className="announcements">
            <h6>Its Time to Vote</h6>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-05-2026
            </span>
          </div>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, suscipit?</p>
        </div>
      </div>
    </div>
  );
};

export default Annoncement;
