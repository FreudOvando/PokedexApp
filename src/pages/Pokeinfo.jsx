import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Pokeinfo = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    getPokemon(url);
  }, [name, url]);

  const getBackgroundClass = (type) => {
    switch (type) {
      case 'grass':
        return 'bg-green-500';
      case 'water':
        return 'bg-blue-500';
      case 'fire':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  console.log(pokemon);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { id, name: pokemonName, abilities, types, height, weight, stats, sprites } = pokemon;

  return (
      <article className={`text-yellow-500 font-mono w-full max-w-md mx-auto p-4 rounded-2xl aspect-auto relative mb-4  bg-gray-700`}>
    <div className={`w-full max-w-md mx-auto p-4 rounded-2xl aspect-auto relative mb-4  ${types[0]?.type.name ? getBackgroundClass(types[0].type.name) : 'bg-gray-500'}`}>
    <img className="w-32 h-32 mx-auto" src={sprites?.other['official-artwork']?.front_default} alt={`${pokemonName} artwork`} />
     </div>
      <h1 className="text-2xl font-bold text-center">#{id}</h1>
      <h2 className="text-2xl capitalize text-center">{pokemonName}</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Abilities:</h3>
        <ul className=" pl-5 list-none">
          {
          abilities.map((ability, index) => (
            <li key={index} className="capitalize">{ability.ability.name}</li>
          )
        )
          }
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Types:</h3>
        <ul className=" pl-5 list-none">
          {
          types.map((type, index) => (
            <li key={index} className="capitalize">{type.type.name}</li>
          ))
          }
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Physical Characteristics:</h3>
        <ul className=" pl-5 list-none">
          <li>Height: {height}</li>
          <li>Weight: {weight}</li>
        </ul>
      </div>
      <section className="mt-4">
        <h3 className="text-md font-semibold">Stats:</h3>
        <ul className="mt-2">
          {stats.map((stat, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="w-32 capitalize">{stat.stat.name}:</span>
              <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden ml-2">
                <div className="h-full bg-blue-500" style={{ width: `${stat.base_stat}%` }}></div>
              </div>
              <span className="ml-2">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-md font-semibold">Moves:</h3>
        <div>
    <ul>
    
    </ul>
        </div>
      </section>
    </article>
  );
};

export default Pokeinfo;
