
import { createContext, useState } from 'react';
import { productsApiService } from '../api/ProductsApiService';

const ProductsStore = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await productsApiService.fetchProducts();
            if (response) {
                setProducts(response);
            } else {
                console.warn("No products found in the response");
            }
        } catch (error) {
            console.error("Error while fetching products:", error);
        }
    };

    const removeProduct = async (id) => {
        try {
            const response = await productsApiService.removeProduct(id);
            if (response.ok) {
                const newProducts = products.filter(({ id: currentId }) => currentId !== id);
                setProducts(newProducts);
            } else {
                console.warn("Failed to remove product");
            }
        } catch (error) {
            console.error("Error while removing product:", error);
        }
    };

    const updateProduct = async (oldProduct, newProductData) => {
        if (!oldProduct || !newProductData) {
            console.warn("Invalid product data provided for update");
            return;
        }
        const newProduct = { ...oldProduct, ...newProductData };
        try {
            const response = await productsApiService.updateProduct({ 
                id: oldProduct.id,
                ...newProductData 
            });
            if (response.ok) {
                setProducts(products.map((product) => (product.id === oldProduct.id ? newProduct : product)));
            } else {
                console.warn("Failed to update product");
            }
        } catch (error) {
            console.error("Error while updating product:", error);
        }
    };

    return {
        fetchProducts,
        removeProduct,
        updateProduct,
    };
};

export const productsStore = new ProductsStore();
export const ProductsStoreContext = createContext(productsStore);