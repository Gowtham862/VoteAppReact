"use client"
import '../../Dashboardfinal/Admind/Chart.css'
import Image from 'next/image';

import React from "react";
import { BiRegistered } from 'react-icons/bi';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
} from "recharts";
const data = [
  { name: "mon",Registered: 700, voted: 240},
  { name: "tues",Registered: 500, voted: 500 },
  { name: "wed",Registered: 90, voted: 600},
  { name: "Thur", Registered: 600, voted: 400},
  { name: "fri",Registered: 100, voted: 800 },
];

const Attendance=()=>{
    return(
        <div className="bgwhite rounded-lg p-4 h-full ">
             <div className="success">
                 <h6 className='text-lg font-semibold'>Attendance</h6>
                   <Image width={20} height={20} src="/image.png" alt="search" />
             </div>
             <ResponsiveContainer>
                <BarChart width={500} height={310} data={data} barSize={20}>
                     <CartesianGrid vertical={false} stroke="#ddd" strokeDasharray="3 3"/>
                     <XAxis axisLine={false} dataKey="name" tick={{fill:"#d1d5db"}} />
                     <YAxis axisLine={false}/>
                     <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
                     <Legend align='left'className='' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
                      {/* fillmens color of chart */}
                     <Bar dataKey="Registered" fill='#8884d8'
                    
                     activeBar={<Rectangle fill='#8884d8' stroke='blue' />} legendType='circle'
                     />
                    <Bar dataKey="voted"  fill="#C3EBFA"  activeBar={<Rectangle fill='#C3EBFA' stroke='blue' />} legendType='circle' />   
                    
                </BarChart>
             </ResponsiveContainer>
        </div>
    )
}

export default Attendance
