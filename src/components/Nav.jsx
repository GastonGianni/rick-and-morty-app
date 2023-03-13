import React from 'react';
import SearchBar from './SearchBar';

export default function Nav(props) {
  return (
    <div className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 h-16 flex items-center justify-end">
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
