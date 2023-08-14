import React, { useState } from 'react'

export default function SearchBar({ setLocation, location }) {
    const [tempLocation, setTempLocation ] = useState(location)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(tempLocation)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={ (e) => { setTempLocation(e.target.value) }} value={tempLocation} className='p-[20px] outline-none w-[100%] text-[white] rounded-md font-semibold bg-[#202B3B]' placeholder='Search For Cities' />
    </form>
  )
}
