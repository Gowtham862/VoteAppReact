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
  { name: "Jan", income: 100, expense:  240},
  { name: "Feb", income: 200, expense: 500 },
  { name: "mar", income: 300,  expense: 600 },
  { name: "April",income: 400, expense: 400 },
  { name: "May", income: 500,   expense: 500 },
     { name: "june",income: 100,  expense: 500 },
      { name: "july",income: 100,  expense: 100 },
       { name: "aug",income: 300,  expense: 100 },
        { name: "sep",income: 100,  expense: 200 },
       { name: "oct",income: 600,  expense: 300 },
        { name: "nov",income: 500,  expense: 400 },
       { name: "dec",income: 400,  expense: 300 },
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
          dataKey="income"
          stroke="#8884d8"
        //   activeDot={{r:8}}
          strokeWidth={5}
          
          />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF"  strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastChart;
