import { useEffect } from 'react';
import './App.css';
import Main from './containers/Main';
import {getPokemon, getPokemons} from './api/index'
import { useDispatch, useSelector } from 'react-redux';

function App() {

   const dispatch = useDispatch()
   const pokemons= useSelector(state=>state.pokemons);

   useEffect(()=>{
    const fetchPokemons=async()=>{
      const pokes= await getPokemons()
      const pokeDetails= await Promise.all(pokes.map(poke=>{
        return getPokemon(poke.url).then(
          res=> {
            const pokemonWithDetails={...poke,...res}
            return pokemonWithDetails;
          }
           )  
     }))
     return pokeDetails
    }
    fetchPokemons().then(res=>dispatch({
       type:'SET_POKEMONS',
       payload:res
     })
    )

    //  getPokemons().then(res=>dispatch({
    //   type:'SET_POKEMONS',
    //   payload:res
    // }))
   },[]);

  return (
    <div className="App">
      <Main pokemons={pokemons}/>
    </div>
  );
}

export default App;
