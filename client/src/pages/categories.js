import React from 'react';
import CategoryList from '../components/CategoryList';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORYS } from '../utils/queries2';


const Categories = () => {
  const { loading, data } = useQuery(QUERY_CATEGORYS);
  const categorys = data?.categorys || [];

  return (
    <main>
      <div className="container-fluid w-100">
        
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryList
              categorys={categorys}
              title="Puzzle Category"
            />
          )}
     
      </div>
    </main>
  );
};

export default Categories;
