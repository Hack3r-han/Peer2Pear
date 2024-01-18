import React from "react";

export function Products() {
    return(
        <div className="container my-5">
            <ProductList />
            <ProductForm />
        </div>
    );
}

export function ProductList() {
    return(
        <>
        <h2 className="text-center mb-3">Products Page</h2>
        <button type="button" className="btn btn-primary me-2">Create</button>
        </>
    );
}

export function ProductForm() {
    return(
        <>
        <h2 className="text-center mb-3">Create New Product</h2>
        <button type="button" className="btn btn-secondary me-2">Cancel</button>
        </>
    );
}

