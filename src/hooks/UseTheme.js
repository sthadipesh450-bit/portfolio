import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("UseTheme must be used within a ThemeProvider");
    }
  return context;
}
