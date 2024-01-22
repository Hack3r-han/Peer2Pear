import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { productService } from '../services/productService';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (error) {
      // Handle error as needed
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await productService.deleteProduct(productId);

      // Update the local state to reflect the deleted product
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      // Handle error as needed
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {(
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default AdminDashboard;