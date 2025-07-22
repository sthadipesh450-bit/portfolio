import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../components/Weather'
import NewsApp from '../components/NewsApp'

const Home = () => {
  return (
    <div>
        
         <Link to = "/users" className='text-blue-700 ' >
         View Users
         </Link>
         <WeatherApp/>
         <NewsApp/>
         
    </div>
  )
}

export default Home