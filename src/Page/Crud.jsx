import React, { useEffect, useState } from "react";

    export function Products() {
        const [content, setContent] = useState(<ProductList showForm={showForm} />); //este estado es para el contenido 
        //una variable para el contenido, y otra para actualizarlo, y usamos el Hook "useState", este es importado automaticamente de react, luego, debemos proveerle un valor inicial al contenido, este valor inicial será ProductList().

        //Esta funcion muestra la lista de productos
        function showList() {
            setContent(<ProductList showForm={showForm} />); //llamamos a setContent para cambiar el valor de content.
        }

        //Esta funcion muestra el formulario
        function showForm(product) {
            setContent(<ProductForm product={product} showList={showList} />); //llamamos a showForm para actualizar el valor de content. y el valor es igual a ProductForm()
        }

        return (
            <div className="container my-5">
                {content}
            </div>
        );
    }



    //funcion para mostrar la lista de productos
    export function ProductLi(props) {
        const [products, setProducts] = useState([]); //de nuevo se usa un hook, en este caso para traer la data del servidor y actualizar la variable productos con la data traida

        //esta funcion se encarga de leer la data del servidor
        function fetchProducts() {

            // "http://localhost:3004/products"
            fetch("http://localhost:3000/products")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch products");
                    }
                    return response.json()
                })
                .then((data) => {
                    //console.log(data);
                    setProducts(data);
                })
                .catch((error) => console.log("Error: ", error));

        }

        //fetchProducts();  si se llega ejecutar esta funcion de esta manera entra en un loop infinito
        useEffect(() => fetchProducts(), []);

        function deleteProduct(id) {
            fetch('http://localhost:3000/products/' + id, {
                method: 'DELETE'
            })
                .then((response) => response.json())
                .then((data) => fetchProducts());
        }

        return (
            <>
                <h2 className="text-center mb-3">List of Products</h2>
                <button onClick={() => props.showForm({})} type="button" className="btn btn-primary me-2">Create</button>
                <button onClick={() => fetchProducts()} type="button" className="btn btn-outline-primary me-2">Refresh</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.createdAt}</td>
                                        <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                            <button onClick={() => props.showForm(product)} type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                                            <button onClick={() => deleteProduct(product.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>

                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }



    export function ProductForm(props) {
        const [errorMessage, setErrorMessage] = useState("");

        function handleSubmit(event) {
            event.preventDefault();

            // read form data
            const formData = new FormData(event.target);

            //convert formData to object
            const product = Object.fromEntries(formData.entries());

            //form validation
            if (!product.name || !product.brand || !product.category || !product.price) {
                console.log("Please provide all the required fields");
                setErrorMessage(
                    <div className="alert alert-warning" role="alert">
                        Please provide all the required fields
                    </div>
                )
                return;
            }

            if (props.product.id) {
                //update the product
                fetch("http://localhost:3000/products/" + props.product.id, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product)
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not Ok");
                        }
                        return response.json()
                    })
                    .then((data) => props.showList())
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
            else {
                //create a new product
                product.createdAt = new Date().toISOString().slice(0, 10); //esto es para obtener a fecha de cuando se crea el objeto
                fetch("http://localhost:3000/products", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product)
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not Ok");
                        }
                        return response.json()
                    })
                    .then((data) => props.showList())
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        }

        return (
            <>
                <h2 className="text-center mb-3">{props.product.id ? "Edit Product" : "Create New Product"}</h2>


                <div className="row">
                    <div className="col-lg-6 mx-auto">

                        {errorMessage}                                                  {/*aqui se muestra el comentari de error*/}

                        <form onSubmit={(event) => handleSubmit(event)}>                {/*aqui se usa el evento on submit para subir los datos del formulario*/}
                            {props.product.id && <div className="row mb-3">             {/*si el i del producto es valido, mostramos es fila o row*/}
                                <label className="col-sm-4 col-form-label">ID</label>
                                <div className="col-sm-8">
                                    <input readOnly className="form-control-plaintext"
                                        name="id"
                                        defaultValue={props.product.id}
                                    />
                                </div>
                            </div>}

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="name"
                                        defaultValue={props.product.name}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Brand</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="brand"
                                        defaultValue={props.product.brand}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-8">
                                    <select className="form-select"
                                        name="category"
                                        defaultValue={props.product.category} >

                                        <option value='Other'>Other</option>
                                        <option value='Phones'>Phones</option>
                                        <option value='Computers'>Computers</option>
                                        <option value='Accesories'>Accesories</option>
                                        <option value='GPS'>GPS</option>
                                        <option value='Cameras'>Cameras</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Price</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="price"
                                        defaultValue={props.product.price}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control"
                                        name="description"
                                        defaultValue={props.product.description}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Cancel</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        );
    }
    

