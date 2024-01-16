import { useState, useEffect } from 'react';

function useFetch(url) {
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
}

function Hola(props) {
    return (
        <div>
            <h1>Hola {props.name}</h1>
            <button onClick={useFetch("https://pokeapi.co/api/v2/pokemon")}>Fetch</button>
            <img src={`https://pokeapi.co/api/v2/pokemon/ ${props.name}`} alt="bulasaur" />
        </div>
    );
}
export default Hola