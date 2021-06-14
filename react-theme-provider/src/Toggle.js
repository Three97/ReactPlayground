import React from 'react'
import { func, string } from 'prop-types';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import ToggleContainer from './Toggle.styled';

const Toggle = ({ theme, actualTheme, toggleTheme }) => {
  const isLight = theme === 'light';
  //console.log("theme: " + theme);
  //console.log("actualTheme: " + actualTheme);
  return (
    <div title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>
      <ToggleContainer theme={actualTheme} isLightTheme={isLight} onClick={toggleTheme}>
        <SunIcon />
        <MoonIcon />
      </ToggleContainer>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
