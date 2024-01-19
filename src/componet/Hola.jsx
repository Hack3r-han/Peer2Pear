import React from "react";
import  getProducts  from "../services/productService";

function Hola() {
    const response = async () => {
        await getProducts("http://localhost:3000/products")
    }
    return (
        <>
            {response().forEach(element => {
                <h1>{element.title}</h1>
            })}
            <h1>mi edad es{10 + 10}</h1>
        </>
    );
}
export default Hola