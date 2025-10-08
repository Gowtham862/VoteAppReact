import React from 'react'
import Link from 'next/link'
import Homepage from './Homepage'
import './pag.css'
function Homeai() {
    return (
        <div className='layout'>
            <header>
            <Link href='/Ai' className='logo'>
            <img src="/ai.png" height={20} width={20} alt="" />
            <span>Gowtham ai</span>
            </Link>
            <div className='user text-white'>user</div>
            </header>
            <main>
              <Homepage/>
            </main>
        </div>
    )
}

export default Homeai
