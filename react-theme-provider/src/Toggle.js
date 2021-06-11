import React from 'react'
import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import ToggleContainer from './Toggle.styled';

const Toggle = ({ theme, actualTheme, toggleTheme }) => {
  const isLight = theme === 'light';
  console.log(theme);
  return (
    <ToggleContainer theme={actualTheme} lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
