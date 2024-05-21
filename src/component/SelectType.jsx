import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"


const selectType = ({setTypeSelected}) => {

  const  [ types , getTypes] = useFetch();
  
  
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
    getTypes(url)
  },[])

  const handleChange = e => {
    setTypeSelected(e.target.value)
  }

  return (
    <select className='bg-black text-slate-100 rounded-xl  text-xl min-w-[10rem] h-[3rem] m-2 p-2 text-center shadow-lg shadow-red-600'   onChange={handleChange} >
        <option className="m-1" value='Allpokemons'> All pokemons</option>
      {
        types?.results.map( typeInfo => (
<option key={typeInfo.url} value={typeInfo.url} > {typeInfo.name} </option>
        ))
      }
    </select>
  )
}

export default selectType