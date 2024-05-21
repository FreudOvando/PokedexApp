import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ poke }) => {
  const [pokemon, getPokemon] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(poke.url);
  }, [poke.url, getPokemon]);

  const handleDetail = () => {
    if (pokemon) {
      navigate(`/pokemon/${pokemon.name}`);
    }
  };

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


  return (
    <article
      onClick={handleDetail}
      className="bg-gray-700 w-[20rem] h-[35rem] border-2 rounded-xl cursor-pointer"
    >
      <header
        className={`w-[18.6rem] h-[10rem] m-2 p-2 rounded-2xl aspect-auto relative mb-2 ${pokemon?.types?.[0]?.type?.name ? getBackgroundClass(pokemon.types[0].type.name) : 'bg-gray-500'}`}
      >
        {pokemon?.sprites?.other["official-artwork"]?.front_default && (
          <img
            className="relative w-[50%] left-1/2 transform -translate-x-1/2 top-4"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        )}
      </header>
      <section className="m-2 p-2 font-mono text-xl text-justify">
        <h3 className="text-xl text-center capitalize mb-2 text-yellow-500">{pokemon?.name}</h3>
        <ul className="flex justify-center gap-2 text-yellow-500">
          {pokemon?.types?.map((typeInfo) => (
            <li key={typeInfo.type.url} className="text-xl m-1 p-1 text-justify">
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
        <hr className=" border-black" />
        <ul className="grid gap-1 text-yellow-500">
          {pokemon?.stats?.map((statInfo) => (
            <li className="flex justify-between" key={statInfo.stat.url}>
              <span className="uppercase text-md m-1">{statInfo.stat.name}</span>
              <span className="text-md">{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
