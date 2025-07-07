"use client"
import React from 'react'
import {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../Dashboardfinal/Admind/Chart.css'
import '../../Dashboardfinal/Admind/Calender.css'


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
    {
        id:"1",
        tittle:"Welcome to Vote Application ",
        time:"12:00 PM -2:00PM",
        description:"thankyou"
    },
    {
        id:"2",
        tittle:"You can see user Details",
        time:"12:00 PM -2:00PM",
         description:"thankyou"
    },
    {
        id:"3",
        tittle:"party Details",
        time:"12:00 PM -2:00PM",
         description:"thankyou"
    },
]


const Calender=()=> {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className=''>
               <Calendar onChange={onChange} value={value} />
               <div className='fle items-center justify-between'>
                <h6 className='text-xl  font-semibold my-4'>Events</h6> </div>
               <div  className='flex flex-col gap-1'>
               {events.map((index,item)=>
               (
                  <div className='p-2 rounded-md even_top border-2 border-gray-100 border-t-4 odd even:bg' key={index.id}>
                    <div className='flex items-center justify-between'>
                        <h6 className='font-semibold text-gray-600'>{index.tittle}</h6>
                        <span className='text-gray-300 text-xs'>{index.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400'>{index.description}</p>
                  </div>
               ))}
                

            
               </div>
        </div>
    )
}

export default Calender
