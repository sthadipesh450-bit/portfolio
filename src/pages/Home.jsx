import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../components/Weather'
import NewsApp from '../components/NewsApp'
import Portfolio4 from '@/components/Hero'
import TypingTest from '@/components/TypingTest'

const Home = () => {
  return (
    <div>
      <Portfolio4/>
        
         <Link to = "/users" className='text-blue-700 ' >
         View Users
         </Link>
         <TypingTest/>
         <WeatherApp/>
         <NewsApp/>
         
    </div>
  )
}

export default Home