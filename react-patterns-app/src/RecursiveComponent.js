import React from 'react';

const isObj = (x) => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObj(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value], i) => (
        <li key={i}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};
