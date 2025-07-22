import React from 'react'
import { Outlet } from 'react-router-dom'

const 
Users = () => {
  return (
    <div>
        <h2 className='text-2xl max-w-l text-center'>Users Section</h2>
       
        <Outlet/>
    </div>
  )
}

export default 
Users