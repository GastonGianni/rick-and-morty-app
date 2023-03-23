import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full bg-gradient-to-r md:gap-5 from-violet-500 to-fuchsia-500 h-16 flex items-center justify-between md:justify-end relative z-10">
      <h1 className="ml-3 hidden md:block text-white font-semibold">Rick And Morty App</h1>
      {isMenuOpen ? (
        <div className="w-1/3 bg-gray-400">
          <button onClick={handleOpenMenu} className="text-black">
            X
          </button>
          <div className="gap-3 flex-col flex text-black">
            <Link to="/home" className=" font-semibold hover:underline">
              Home
            </Link>
            <Link to="/favorites" className=" font-semibold hover:underline">
              Favorites
            </Link>
            <Link to="/about" className=" font-semibold hover:underline">
              About
            </Link>
          </div>
        </div>
      ) : (
        <button onClick={handleOpenMenu} className="min-w-[22px] block md:hidden ml-2">
          <img src="https://icongr.am/clarity/bars.svg?size=22&color=ffffff" alt="" />
        </button>
      )}

      <div className="hidden mr-auto gap-3 md:flex">
        <Link to="/home" className="text-white font-semibold hover:underline">
          Home
        </Link>
        <Link to="/favorites" className="text-white font-semibold hover:underline">
          Favorites
        </Link>
        <Link to="/about" className="text-white font-semibold hover:underline">
          About
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={props.handleLogOut} className="hidden sm:block text-white font-semibold hover:underline pr-4">
        LogOut
      </button>
    </div>
  );
}
