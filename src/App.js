import './App.css';
import Head from './components/Head';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { listContext } from './context/listContext';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    console.log('pokemonList updated:', pokemonList);
  }, [pokemonList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <listContext.Provider value={{ pokemonList, setPokemonList }}>
          <Main />
        </listContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
