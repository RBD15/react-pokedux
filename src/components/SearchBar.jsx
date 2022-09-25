import React from "react";
import { useRef } from "react";

function Search({handleSearching}){

    const name = useRef()
    function searching(){
        handleSearching(name.current.value)
    }

    return(
        <div className="row py-3">
            <div className="col">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" ref={name} type="search" placeholder="Search" aria-label="Search" onChange={searching} />
                </form>
            </div>
        </div>
    );

}

export default Search;