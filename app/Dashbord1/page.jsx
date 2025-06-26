import React from 'react'
import Sidebar from '../Dahboard/Sidebar'
import Board from './Board'
export default function page() {
    return (
        <>
        <div>
            <Sidebar/>
        </div>
        <div >
        <Board  className="w-100"/>
        </div>
        </>
    )
}
