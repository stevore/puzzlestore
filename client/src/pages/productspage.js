import React from 'react';
import ProductList from '../components/ProductList';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_PRODUCTS_BY_CATEGORY } from '../utils/queries2';
import { useParams } from 'react-router-dom';


const ProductsPage = () => {
  const{categoryId}=useParams();

  const { loading, data } = useQuery(QUERY_PRODUCTS_BY_CATEGORY, {
    // pass URL parameter
    variables: { categoryId: categoryId },
  });
  const products = data?.products || [];

  return (
    <main>
      <div className="container-fluid w-100">
       
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