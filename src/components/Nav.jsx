import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className="w-full bg-gradient-to-r gap-5 from-violet-500 to-fuchsia-500 h-16 flex items-center justify-end relative z-10">
      <h1 className="ml-3 text-white font-semibold">Rick And Morty App</h1>
      <Link to="/home" className="text-white font-semibold hover:underline">
        Home
      </Link>
      <Link to="/favorites" className="text-white font-semibold hover:underline">
        Favorites
      </Link>
      <Link to="/about" className="text-white font-semibold mr-auto hover:underline">
        About
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={props.handleLogOut} className="text-white font-semibold hover:underline pr-4">
        LogOut
      </button>
    </div>
  );
}
