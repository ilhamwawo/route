import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About</h1>
      <button type="button" className='bg-green-500 hover:bg-green-700 py-2 px-4 rounded' onClick={()=> navigate(-1)}>
        Go Back to Home
      </button>
    </div>
  )
}

export default About