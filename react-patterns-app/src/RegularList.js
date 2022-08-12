export const RegularList = ({ items, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...item} />
      ))}
    </>
  );
};
