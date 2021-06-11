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
        <Toggle theme={actualTheme} toggleTheme={toggleTheme} />
        <h1>It's a {theme} theme!</h1>
        <footer>
          <div>Credits:</div>
          <div><small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small></div>
          <div><small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small></div>
        </footer>
      </>
    </ThemeProvider>
  )
}

export default App;
