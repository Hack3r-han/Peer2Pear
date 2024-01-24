import React, { useState, useEffect } from "react";
import Card from "../components/Cards";

const ProductService = {
    async getProducts() {
        try {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
};

export const ProductList = () => {
    const [product, setProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const data = await ProductService.getProducts();
            setProduct(data);
        } catch (error) {

        }
    };

    const deleteProduct = async (id) => {
        try {
            await ProductService.deleteProduct(id);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

   
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {product.map(products => (
                <div class="row row-cols-1 row-cols-md-3 g-2 m-4 d-inline-flex align-items-baseline" key={products.id}>
                    <Card props={products} />
                </div>
            ))}
        </>
    )
}