import React, { createContext, useState } from 'react';
const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');
    const toggletheme = () => 
      setTheme((t) === 'light' ? 'dark' : 'light'  );

  return (
   
        <ThemeContext.Provider value={{ theme, toggletheme }}>
            {children}
        </ThemeContext.Provider>    

  );
}

export default ThemeContext;