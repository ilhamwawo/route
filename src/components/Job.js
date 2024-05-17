import React from 'react'
import { useParams } from 'react-router-dom'

const Job = () => {
    const { id } = useParams()
  return (
    <div>
        <h1>Job {id}  </h1>
    </div>
  )
}

export default Job