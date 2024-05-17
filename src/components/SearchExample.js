import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchExample = () => {
    const [searchParams, setSearchParams] = useSearchParams({n: ""})
    const number = searchParams.get("n")
    console.log(searchParams)
  return (
    <div>SearchExample
        <div> 
      <h1>{number}</h1>
      <input type="number" name="" id="" value={number} onChange={e=> setSearchParams({n: e.target.value})} />
      </div>
    </div>
  )
}

export default SearchExample