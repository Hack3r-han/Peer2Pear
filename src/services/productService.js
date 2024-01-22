
export const productService = {
  getProducts: async () => {
    try {
      const response = await fetch('./api/productdb.json');
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await fetch('./api/productdb.json');
      const data = await response.json();
      const currentProducts = data.products;

      const updatedProducts = currentProducts.filter((product) => product.id !== productId);

      await fetch('./api/productdb.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', //specifies that the content being sent in the request body is in JSON format
        },
        body: JSON.stringify({ products: updatedProducts }),
      });
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  },
};
