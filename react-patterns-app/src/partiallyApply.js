import React from 'react';

const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...rest }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...rest}
    >
      {text}
    </button>
  );
};

export const DangerButton = partiallyApply(Button, { color: 'red' });

export const BigSuccessButton = partiallyApply(Button, {
  size: 'large',
  color: 'green',
});
