import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const actualTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={actualTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} actualTheme={actualTheme} toggleTheme={toggleTheme} />
        <h1>It's a {theme} theme!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  )
}

export default App;
