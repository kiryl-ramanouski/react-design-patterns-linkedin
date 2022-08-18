import React from 'react';

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

export const DangerButton = (props) => {
  return <Button {...props} color="red" />;
};

export const BigSuccessButton = (props) => {
  return <Button {...props} size="large" color="green" />;
};
