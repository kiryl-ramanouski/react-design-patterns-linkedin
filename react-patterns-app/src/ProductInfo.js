import React from 'react';

export const ProductInfo = ({ product }) => {
  const { name, price, description, rating } = product || {};
  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Overage rating: {rating}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
