import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero'
import HomeCards from './Components/HomeCards'
import BlogListing from './Components/BlogListing'
import ViewAll from './Components/ViewAll'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <BlogListing/>
    <ViewAll/>
    </>
  )
}

export default App