import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Login from '../pages/Login'
import Home from '../pages/Home'
import UserList from '../pages/UserList'
import Users from '../pages/Users'
import UserDetail from '../pages/UserDetail'

const AppRoutes = () => {
  return (
    <Routes >
      <Route path = "/" element={<Home/>} />
      <Route path = "/dashboard">
      <Route path = "profile" />
      <Route path = "setting" />
      </Route>
     
      <Route path='users' element = {<Users/>}>
      <Route index element = {<UserList/>}/>
      <Route path = ':id' element = {<UserDetail/>}/>
      </Route>
      
        <Route path = "/aboutme" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/projects" element = {< Projects/>}/>
        <Route path = "/login" element = {<Login/>}/>
     
    </Routes>
    
  )
}

export default AppRoutes