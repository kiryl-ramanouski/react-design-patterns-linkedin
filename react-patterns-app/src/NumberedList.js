export const NumberedList = ({ items, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...item} />
        </div>
      ))}
    </>
  );
};
