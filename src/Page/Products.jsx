import React, { useEffect, useState } from "react"


export function Products() {
    const [ content, setContent ] = useState(<ProductList showForm={showForm} />);

    function showList() {
        setContent(<ProductList showForm={showForm} />);
    }

    function showForm() {
        setContent(<ProductForm showList={showList} />);
    }

    return (
        <div className= "container my-5">
            {content}
        </div>
    );
}


function ProductList (props) {
    const [products, setProducts] = useState([])

    function fetchProducts() {

            fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unexpected Server Response")
                }
                return response.json()
            
           })
          .then((data) => {
            //console.log(data);
            setProducts(data);
           })
          .catch((error) => console.log("Error: ",error));
          
    }

    //fetchProducts();
    useEffect(() => fetchProducts(), []);

    return ( 
        <>
        <h2 className="text-center mb-3">List of Products</h2>
        <button onClick={() => props.showForm() }type="button" className="btn btn-outline-warning mb-3">Create</button>
        <button onClick={() => fetchProducts() }type="button" className="btn btn-outline-warning mb-3">Refresh</button>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>price</th>
                    <th>img</th>
                    <th>brand</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { 
                    products.map((product, index) => {
                        return ( 
                            <tr key={index}>

                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.img}</td>
                                <td>{product.brand}</td>
                                <td>{product.createAt}</td>
                                <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                    <button type="button" className="btn btn-outline-warning mb-3">Edit</button>
                                    <button type="button" className="btn btn-outline-warning mb-3">Delete</button>
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

function ProductForm (props) {
    return ( 
        <>
        <h2 className="text-center mb-3">Create new Product</h2>
        

        <div className="row">
            <div className="col-lg-6 mx-auto">
                <form>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                name="name"
                                defaultValue="" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Brand</label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                name="brand"
                                defaultValue="" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category</label>
                        <div className="col-sm-8">
                            <select className="form-select"
                                name="category"
                                defaultValue=""> 

                                <option value="Other">Other</option>
                                <option value="Phones">Phones</option>
                                <option value="Computers">Computers</option>
                                <option value="Accesories"></option>
                                <option value="GPS">GPS</option>
                                <option value="Cameras">Cameras</option>
                            </select>

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                name="price"
                                defaultValue="" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className="col-sm-8">
                            <textarea className="form-control"
                                name="description"
                                defaultValue="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-sm-4 col-sm-4 d-grid">
                            <button type="submit" className="btn btn-outline-warning mb-3">Save</button>
                        </div>
                        <div className="col-sm-4 d-grid">
                        <button onClick={() => props.showList()} type="button" className="btn btn-outline-warning mb-3">Cancel</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        </>
    );
} 