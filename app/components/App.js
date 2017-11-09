import React from 'react';
import Routes from '../routes';
import ErrorsDisplay from './errorHandler/container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () =>
  <MuiThemeProvider>
    <div>
      {Routes}
      <ErrorsDisplay/>
    </div>
  </MuiThemeProvider>;

export default App;
