import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import { Dashboard } from './screens/Dashbord';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}