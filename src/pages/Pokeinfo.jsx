import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Pokeinfo = ({}) => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

const [pokemon, getPokemon] = useFetch()

useEffect(() => {
  getPokemon(url)
},[name])

  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2> {pokemon?.name} </h2>
      
    </article>
  )
}

export default Pokeinfo