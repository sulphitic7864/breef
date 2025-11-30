import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PostJob from './pages/PostJob'
import Navbar from './components/layout/Navbar'
import Footer from './components/Footer'


export default function App(){
return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/post-job" element={<PostJob/>} />
</Routes>
<Footer />
</BrowserRouter>
)
}