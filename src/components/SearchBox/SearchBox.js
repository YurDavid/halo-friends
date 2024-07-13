import React from "react";
import './searchbox.css';

function SearchBox (props){

    return (
        <input
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        />
    )
}

export default SearchBox;