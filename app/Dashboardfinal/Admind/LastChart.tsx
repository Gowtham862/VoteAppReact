"use client";
import React from "react";
import "../../Dashboardfinal/Admind/Chart.css";
import Image from "next/image";
import { BiRegistered } from "react-icons/bi";
import {
  RadialBarChart,
  LineChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
} from "recharts";
const data = [
  { name: "Jan", voted: 100, Registered:  240},
  { name: "Feb", voted: 200, Registered: 500 },
  { name: "mar", voted: 300,  Registered: 600 },
  { name: "April",voted: 400, Registered: 400 },
  { name: "May",voted: 500,   Registered: 500 },
     { name: "june",voted: 100,  Registered: 500 },
      { name: "july",voted: 100,  Registered: 100 },
       { name: "aug",voted: 300,  Registered: 100 },
        { name: "sep",voted: 100,  Registered: 200 },
       { name: "oct",voted: 600,  Registered: 300 },
        { name: "nov",voted: 500,  Registered: 400 },
       { name: "dec",voted: 400,  Registered: 300 },
];

const LastChart = () => {
  return (
    <div className="bgwhite rounded-xl w-full h-full p-4">
      <div className="success">
        <h6 className="text-lg font-semibold">Top districts Votes</h6>
        <Image width={20} height={20} src="/image.png" alt="search" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis tickMargin={10} axisLine={false} dataKey="name" tick={{fill:"#d1d5db"}}  />
          <YAxis tickMargin={10} axisLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend  align='left'className='' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}/>
          <Line
          type="monotone"
          dataKey="voted"
          stroke="#8884d8"
        //   activeDot={{r:8}}
          strokeWidth={5}
          
          />
          <Line type="monotone" dataKey="Registered" stroke="#CFCEFF"  strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastChart;
