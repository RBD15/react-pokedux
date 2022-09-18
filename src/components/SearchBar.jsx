import React from "react";
import { useRef } from "react";

function Search(){

    const name = useRef()
    function searching(){
        console.log(name.current.value)
    }

    return(
        <div className="row py-3">
            <div className="col">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" ref={name} type="search" placeholder="Search" aria-label="Search" onChange={searching} />
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
    );

}

export default Search;