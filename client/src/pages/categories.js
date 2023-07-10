import React from 'react';
import CategoryList from '../components/CategoryList';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORYS } from '../utils/queries2';


const Categories = () => {
  const { loading, data } = useQuery(QUERY_CATEGORYS);
  const categorys = data?.categorys || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryList
              categorys={categorys}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Categories;
