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
      className="w-full max-w-[18rem] h-[20rem] border-2 rounded-xl overflow-hidden cursor-pointer"
    >
      <header
        className={`w-full aspect-auto relative mb-2 ${pokemon?.types?.[0]?.type?.name ? getBackgroundClass(pokemon.types[0].type.name) : 'bg-gray-500'}`}
      >
        {pokemon?.sprites?.other["official-artwork"]?.front_default && (
          <img
            className="absolute w-[70%] left-1/2 transform -translate-x-1/2 top-4"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        )}
      </header>
      <section className="p-6">
        <h3 className="text-xl text-center capitalize mb-2">{pokemon?.name}</h3>
        <ul className="flex justify-center gap-2">
          {pokemon?.types?.map((typeInfo) => (
            <li key={typeInfo.type.url} className="text-slate-100">
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
        <hr className="my-4 border-black" />
        <ul className="grid gap-1">
          {pokemon?.stats?.map((statInfo) => (
            <li className="flex justify-between" key={statInfo.stat.url}>
              <span className="uppercase text-md">{statInfo.stat.name}</span>
              <span className="text-md">{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
