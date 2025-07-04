import React from "react";
import Chart from "../../Dashboardfinal/Admind/Chart";
import Chartorigin from "../../Dashboardfinal/Admind/Chartorigin";
import LastChart from "../../Dashboardfinal/Admind/LastChart";
import Attendance from "../../Dashboardfinal/Admind/Attendance";
import Calender from "../../Dashboardfinal/Admind/Calender";
export default function Adminpage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <Chart type="users" />
          <Chart type="registration" />
          <Chart type="Totaldistrict" />
          <Chart type="Total votes" />
        </div>
        {/* first chat */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* second chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <Chartorigin />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <Attendance />
          </div>
        </div>
        <div className="w-full h-[500px]">
              <LastChart/>
        </div>
      </div>
        
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <Calender/>
      
      </div>
    </div>
  );
}
