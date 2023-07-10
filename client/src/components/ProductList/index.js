import React from 'react';

const ProductList = ({ products, name }) => {
  try {
  console.log(products);
  if (!products.length) {
    return <h3>Products out of stock.</h3>;
  }
} catch (error){
  console.log("err ",error)
}

  return (
    <div>
      <h3>{name}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {product.name} <br />
              <span style={{ fontSize: '1rem' }}>
                had this name on 
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{product.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;