import React from 'react';
import Route from 'react-router';
import Account, { SignIn, Register } from 'components/account';

export default (
  <Route path='account' component={ Account }>
    <Route path='register' component={ Register } />
    <Route path='signin' component={ SignIn } />
  </Route>
);
