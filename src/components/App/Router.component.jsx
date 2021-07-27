// import React, { useLayoutEffect } from 'react';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';

import Layout from '../Layout';
// import { random } from '../../utils/fns';
import GlobalStyles from '../../__globalStyles';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
