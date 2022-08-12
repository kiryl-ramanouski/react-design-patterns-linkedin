export const LargeProductListItem = ({ name, price, description, rating }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Overage rating: {rating}</p>
    </>
  );
};
