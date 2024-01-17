import React from "react";
import  Product  from "../services/movil";

function Hola() {
    const Productsjson = Product("http://localhost:3000/products")
    return (
        <>
            {/* <p>{Aqui debemos mostrar el resultado de la Api}</p> */}
        </>
    );
}
export default Hola