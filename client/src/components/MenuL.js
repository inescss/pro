import React from 'react';

import { Route } from 'react-router-dom';


import Layout from './Layout';
import Home from '../pages/Home';

const App = ({ component: Component, rest }) => {
  
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          
          <Component {...routeProps} />
          <Home />
        </Layout>
      )}
    />
  );
};

export default App;