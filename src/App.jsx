import React, { useEffect } from 'react'
import User from './components/User'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { useTheme } from './hooks/UseTheme'
import ThemeProvider from './context/ThemeProvider';

function App(){
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeProvider>
    <div className='bg-white dark:bg-black text-black dark:text-white'>
      <Navbar/>
   
      <AppRoutes/>
      <Footer/>

      
    </div>
    </ThemeProvider>
    
  )
}

export default App