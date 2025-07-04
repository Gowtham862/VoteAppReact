"use client";
import "../../Dashboardfinal/Admind/Chart.css";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "e", uv: 100, pv: 2400, fill: "#8884d8" },
  { name: "v", uv: 70, pv: 4567, fill: "#83a6ed" },
  { name: "s", uv: 80, pv: 4567, fill: "#83a6ed" },
];

const Chartorigin = () => {
  return (
    <div className=" bgwhite rounded-xl w-full h-full p-4">
      <div className="success mb-4">
        <h6 className="text-lg font-semibold'">Top Votes</h6>
        <Image width={20} height={20} src="/image.png" alt="search" />
      </div>

      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChart>
        </ResponsiveContainer>
        
        
      </div>
      <div className="kalai">
          <div className="flex flex-col gap-1">
            <div className="w-6 h-6  bg rounded-full">
              <h6>124</h6>
              <h5 className="text-xs text-gray-300">votes</h5>
            </div>
          </div>

        
          <div className="flex flex-col gap-1">
            <div className="w-6 h-6  bg rounded-full">
              <h6 className="font-bold">123</h6>
              <h5 className="text-xs text-gray-300">votes</h5>
            </div>
          </div>
                  </div>
    </div>
  );
};

export default Chartorigin;
