import React, { useState, useEffect } from 'react';

// REST Api
import axios from 'axios';

export const withUser = (Component, userID) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => async () => {
      const response = await axios.get(`/users/${userID}`);
      setUser(response.data);
    });

    return <Component {...props} user={user} />;
  };
};
