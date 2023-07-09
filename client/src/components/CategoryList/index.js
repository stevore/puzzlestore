import React from 'react';

const CategoryList = ({ categorys, name }) => {
  if (!categorys.length) {
    return <h3>No categorys Yet</h3>;
  }

  return (
    <div>
      <h3>{name}</h3>
      {categorys &&
        categorys.map((category) => (
          <div key={category._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {category.name} <br />
              <span style={{ fontSize: '1rem' }}>
                had this name on 
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;