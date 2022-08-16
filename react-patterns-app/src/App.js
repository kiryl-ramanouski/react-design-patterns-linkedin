import React from 'react';

// Components
import { UserInfo } from './UserInfo';

// HOC
import { withUser } from './withUser';

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
  return <UserInfoWithLoader />;
}

export default App;
