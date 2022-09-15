import { useEffect, useState } from 'react';
import './App.css';
import Main from './containers/Main';
import {getPokemons} from './api/index'

function App() {

  const [pokemons,setPokemons] = useState([])
  useEffect(()=>{
    getPokemons().then(res=>setPokemons(res))

  },[]);

  return (
    <div className="App">
      <Main pokemons={pokemons}/>
    </div>
  );
}

export default App;
