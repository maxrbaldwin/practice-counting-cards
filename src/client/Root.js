import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes';

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default Root;
