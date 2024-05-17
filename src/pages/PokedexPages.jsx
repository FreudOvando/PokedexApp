import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../component/PokeCard'


const PokedexPages = () => {
  
 const trainer =  useSelector( states => states.trainer )

 const [pokemons , getPokemons ] = useFetch()

 useEffect(() => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'; 
  getPokemons(url);
 },[] )

 console.log(pokemons);
  
  return (
    <div>
      <h1>Pokedex</h1>
      <p>Welcome {trainer}, here you will find your favorite pókemon</p>
<div>
  {
pokemons?.results.map( poke => (
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