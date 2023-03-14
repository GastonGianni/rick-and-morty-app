import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((newChar) => {
        newChar.name
          ? setCharacters((characters) => [...characters, newChar])
          : window.alert("No existe pj con ese ID");
      });
  };

  const onClose = (id) => {
    const updateCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(updateCharacters);
  };

  return (
    <div className={`App h-screen`}>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
