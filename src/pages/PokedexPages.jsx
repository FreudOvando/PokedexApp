import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import PokeCard from '../component/PokeCard';
import SelectType from '../component/SelectType';
import homephoto from '../assets/imagehome.png'


const PokedexPages = () => {
  const trainer = useSelector((states) => states.trainer);

  const [searchedName, setSearchName] = useState('');
  const [typeSelected, setTypeSelected] = useState('allpokemons');

  const [pokemons, getPokemons, getTypePokemon] = useFetch();

  useEffect(() => {
    if (typeSelected === 'allpokemons') {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
      getPokemons(url);
    } else {
      getTypePokemon(typeSelected);
    }
  }, [typeSelected, getPokemons, getTypePokemon]);

  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName(inputName.current.value.trim().toLowerCase());
  };

  const callbackFilter = (poke) => {
    return poke.name.includes(searchedName);
  };

  return (
    <div className="flex items-center justify-center flex-col flex-wrap mx-2 min-w-[375px] max-w-6xl shadow-lg shadow-black border-spacing-1 bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-4 m-4 p-4 font-mono w-full">
      <img src={homephoto} alt="mainphoto" className='w-[30rem] h-[10rem] m-1 p-1 ' />
        <p className="text-2xl text-center m-2 p-2 text-red-500">
          Welcome {trainer}, here you will find your favorite Pokémon
        </p>
        <form className="flex flex-wrap items-center justify-center gap-4 w-full" onSubmit={handleSearch}>
          <input
            ref={inputName}
            type="text"
            placeholder="Charizard"
            className="bg-slate-300 rounded-2xl text-xl w-[10rem] max-w-sm h-[3rem] m-2 p-2 text-center shadow-lg shadow-red-600"
          />
          <button className="bg-slate-300 rounded-xl text-xl w-[15rem] max-w-sm h-[3rem] m-2 p-2 text-center shadow-lg shadow-red-600">
            Find by name
          </button>
          <SelectType setTypeSelected={setTypeSelected} />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 w-auto">
        {pokemons && pokemons.results.filter(callbackFilter).length === 0 ? (
          <h2 className="col-span-full text-center">There are no Pokémon</h2>
        ) : (
          pokemons?.results.filter(callbackFilter).map((poke) => (
            <PokeCard key={poke.url} poke={poke} />
          ))
        )}
      </div>
    </div>
  );
};

export default PokedexPages;
