import React from 'react';
import { Route } from 'react-router-dom';
import HomeRoot from './roots/HomeRoomt';
import UsersListRoot, { loadData } from './roots/UsersListRoot';

// HomeRoot is an object with key of component
export default [
  {
    ...HomeRoot
    path: '/',
    exact: true
  },
  {
    ...UsersListRoot,
    path: '/users'
  }
]
