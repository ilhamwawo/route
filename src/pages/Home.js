import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchExample from '../components/SearchExample'

const Home = () => {
  const navigate = useNavigate();
  return (
      <div>
        <div>Home </div>
        <SearchExample/>
        <hr />
        <button type="button" className='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded ' onClick={()=>navigate("/about")}>
          About
        </button>
      </div>
      
      
  )
}

export default Home