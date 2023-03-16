import { useState } from 'react';

export default function SearchBar(props) {
  const [character, setCharacter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(character);
  };

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <form className="flex gap-4 px-5" onSubmit={handleSubmit}>
        <input type="search" className="rounded-md h-7 focus:outline-none" onChange={handleChange} placeholder="Ingrese un ID" />
        <button className="border font-semibold active:shadow-none bg-white shadow-md rounded-md px-2 hover:bg-slate-100">Agregar</button>
      </form>
    </div>
  );
}
