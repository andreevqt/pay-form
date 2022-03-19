import React, { useEffect } from 'react';
import Theme from '../theme/theme';
import GlobalStyle from '../theme/global-style';
import Home from '../pages/home';

const App = () => (
  <Theme>
    <GlobalStyle />
    <Home />
  </Theme>
);


export default App;
