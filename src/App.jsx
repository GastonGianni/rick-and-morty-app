import { useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((newChar) => {
        newChar.name ? setCharacters((characters) => [...characters, newChar]) : window.alert('No existe pj con ese ID');
      });
  };

  const onClose = (id) => {
    const updateCharacters = characters.filter((character) => character.id !== id);
    setCharacters(updateCharacters);
  };

  return (
    <div className={`App h-screen`}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
