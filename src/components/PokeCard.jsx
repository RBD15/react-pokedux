import React , { useEffect,useState }  from "react";
import {getPokemon} from '../api'

function PokeCard({pokemon}){
    const [pokemonData,setPokemonData] = useState({})

    // useEffect(()=>{
    //     getPokemon(pokemon.url).then(res=>console.log(res))
    // },[])

    // console.log(getPokemon(pokemon.url))
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{pokemon.name}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                </ul>
                <button type="button" className="w-45 btn btn-lg btn-outline-primary mx-1">Add</button>
                <button type="button" className="w-45 btn btn-lg btn-outline-danger mx-1">Remove</button>

            </div>
        </div>
    </div>
    );
}

export default PokeCard;