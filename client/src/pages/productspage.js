import React from 'react';
import ProductList from '../components/ProductList';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries2';


const ProductsPage = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  return (
    <main>
      <div className="flex-row justify-center">
       
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              products={products}
              name="Puzzles"
            />
          )}
        </div>
    
    </main>
  );
};

export default ProductsPage;