import { useEffect } from 'react';
import './App.css';
import Main from './containers/Main';
import {getPokemons} from './api/index'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  //  const [pokemons,setPokemons] = useState([])
  //  useEffect(()=>{
  //    getPokemons().then(res=>setPokemons(res))
  //  },[]);

   const dispatch = useDispatch()
   const pokemons= useSelector(state=>state.pokemons);

   useEffect(()=>{
     getPokemons().then(res=>dispatch({
       type:'SET_POKEMONS',
       payload:res
     }))
   },[]);

  return (
    <div className="App">
      <Main pokemons={pokemons}/>
    </div>
  );
}

export default App;
