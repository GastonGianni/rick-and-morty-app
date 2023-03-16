import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';
  const [access, setAccess] = useState(false);

  const EMAIL = 'gianni.gaston@hotmail.com';
  const PASSWORD = 'a123456789';

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
      {!isIndexPage && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
