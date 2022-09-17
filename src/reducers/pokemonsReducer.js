import {SET_POKEMONS} from '../actions/type'
const initialState = {pokemons:[]};

export const pokemonsReducer= (state=initialState,action)=>
{
    switch(action.type){
        case SET_POKEMONS:
            return {...state,pokemons:action.payload};
            break;
        default:
            return state;
    }

}