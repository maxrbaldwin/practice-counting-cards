import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import WhatsTheCount from '@components/WhatsTheCount';

const routes = (
  <Fragment>
    <Route path="/" component={WhatsTheCount} />
  </Fragment>
);

export default routes;
