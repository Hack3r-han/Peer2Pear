import { useState, useEffect } from 'react';

function useFetch(url) {
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(json=>console.log(json))
    }, []);
}

function Hola(props) {
    return (
        <div>
            <h1>Hola {props.name}</h1>
            <button onClick={useFetch('https://fakestoreapi.com/products')}>Fetch</button>
            
        </div>
    );
}
export default Hola