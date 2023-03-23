import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Favorites from './components/Favorites.jsx';
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [searchedIds, setSearchedIds] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';

  const EMAIL = '';
  const PASSWORD = '';

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  const handleLogOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((newChar) => {
        if (newChar.name) {
          if (!searchedIds.includes(newChar.id)) {
            setCharacters((characters) => [...characters, newChar]);
            setSearchedIds((searchedIds) => [...searchedIds, newChar.id]);
          } else window.alert('Ya se ha agregado este personaje');
        } else window.alert('No existe personaje con ese ID');
      });
  };

  const onClose = (id) => {
    const updateCharacters = characters.filter((character) => character.id !== id);
    setCharacters(updateCharacters);
    const updateSearchedIds = searchedIds.filter((searchedId) => searchedId !== id);
    setSearchedIds(updateSearchedIds);
  };

  return (
    <div className={`App h-screen`}>
      {!isIndexPage && <Nav onSearch={onSearch} handleLogOut={handleLogOut} />}
      <div className="max-w-[1200px] mx-auto">
        <Routes>
          <Route path="/" element={<Form login={login} />}></Route>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
