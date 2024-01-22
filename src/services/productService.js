import { useState, useEffect } from "react";
function getProducts() {
    const [data, setData] = useState([]);

    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setData(data)) // setData(data)
        console.log(data)
}


export default getProducts

