import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function Detail() {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // const history = useHistory();

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);

      try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        setIsLoading(false);

        if (response.data.name) {
          setCharacter(response.data);
        } else {
          window.alert('No hay personaje con ese ID');
        }
      } catch (error) {
        setIsLoading(false);
        window.alert('Hubo un error al obtener los datos del personaje');
      }
    };

    fetchCharacter();
  }, [id]);
  return (
    <section>
      <Link to="/home">
        {' '}
        <button className="flex justify-center items-center group gap-4">
          <img src="https://icongr.am/jam/arrow-left.svg?size=54&color=995dc0" alt="backImg" />
          <h4 className="font-bold absolute translate-x-11 -translate-y-[1px] hidden group-hover:block  text-violet-500">Atras</h4>
        </button>
      </Link>

      <div>
        {!isLoading ? (
          <div className="z-20 absolute bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-md min-w-[575px] top-1/4 left-1/2 -translate-y-16 -translate-x-1/2 font-semibold  text-3xl flex flex-col items-center gap-4 text-white justify-center shadow-2xl p-4">
            <h1 className="text-5xl">{character.name}</h1>
            <img className="shadow-xl rounded-full" src={character.image} alt="" />
            <h1>Status | {character.status}</h1>
            <h1>Species | {character.species}</h1>
            <h1>Gender | {character.gender}</h1>
            <h1>Origin | {character.origin.name}</h1>
          </div>
        ) : (
          <div className="z-20 absolute font-bold">Cargando...</div>
        )}
      </div>
    </section>
  );
}
