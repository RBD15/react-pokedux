import React , { useEffect,useState }  from "react";
import { useDispatch } from "react-redux";
import { SET_POKEMON } from "../actions/type";
import {getPokemon} from '../api'

function PokeCard({pokemon}){
    // const dispatch = useDispatch()
    // const [pokemonData,setPokemonData] = useState({})

    // useEffect(()=>{
    //     getPokemon(pokemon.url).then(res=>
    //         dispatch({
    //             'type':SET_POKEMON,
    //             'payload':res
    //         })
    //         )
    // },[])

    // console.log(getPokemon(pokemon.url))
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{pokemon.name}</h4>
            </div>
            <div className="card-body">
                <div className="card-title pricing-card-title"><img src={pokemon.sprites.front_default} alt="" /></div>
                <ul className="list-unstyled mt-3 mb-4">
                    {pokemon.abilities.map(ability=>
                        <li>{ability.ability.name}</li>    
                    )}
                    
                </ul>
                <button type="button" className="w-45 btn btn-lg btn-outline-primary mx-1">Add</button>
                <button type="button" className="w-45 btn btn-lg btn-outline-danger mx-1">Remove</button>

            </div>
        </div>
    </div>
    );
}

export default PokeCard;