import { useEffect } from 'react';
import './App.css';
import Main from './containers/Main';
import { useDispatch, useSelector } from 'react-redux';
import {handlePokemons} from './handles/index'
function App() {

   const dispatch = useDispatch()
   const pokemons= useSelector(state=>state.pokemons);

   useEffect(()=>{
    handlePokemons().then(res=>{
      dispatch({type:'pokemonsSlice/toggleLoading',payload:true})
      dispatch({
       type:'pokemonsSlice/setPokemons',
       payload:res
     })
    dispatch({type:'pokemonsSlice/toggleLoading',payload:false})
    }
    )
   },[]);

  return (
    <div className="App">
      <Main pokemons={pokemons}/>
    </div>
  );
}

export default App;
