import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../component/PokeCard'
import SelectType from '../component/SelectType'


const PokedexPages = () => {
  
 const trainer =  useSelector( states => states.trainer )

const [searchedName, setSearchName] =  useState('')
const [typeSelected, setTypeSelected] = useState('allpokemons')


 const [pokemons , getPokemons, getTypePokemon ] = useFetch()

 useEffect(() => {
  if(typeSelected === 'allpokemons') {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'; 
    getPokemons(url);
  } else {
    //preticion de pokemons por tipo 
    getTypePokemon(typeSelected)
  }
 

 },[typeSelected] )

 console.log(pokemons);

 const inputName = useRef()

 const handleSearch = (e) => {
  e.preventDefault()
  setSearchName(inputName.current.value.trim().toLowerCase())

 }
 const callbackFilter= poke => {
  const filterName = poke.name.includes(searchedName)
  return filterName;
 }

  
  return (
    <div>
      <h1>Pokedex</h1>
      <p>Welcome {trainer}, here you will find your favorite pókemon</p>
      <form onSubmit={handleSearch}>
        <input ref={inputName} type="text" />
        <button>Search</button>
      </form>
      <SelectType
      setTypeSelected={setTypeSelected}
      />
<div>
  {
pokemons && pokemons.results.filter(callbackFilter).length === 0 ? <h2> there no pokemons</h2> :
pokemons?.results.filter(callbackFilter).map( poke => (
<PokeCard
key={poke.url}
poke={poke}
 />
))
  }
</div>
  
      
    </div>
  )
}

export default PokedexPages