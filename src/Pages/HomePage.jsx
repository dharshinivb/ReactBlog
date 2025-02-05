import React from 'react'
import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import BlogListing from '../Components/BlogListing';
import ViewAll from '../Components/ViewAll';
const HomePage = () => {
  return (
    <>
     <Hero/>
     <HomeCards/>
     <BlogListing isHome='true'/>
     <ViewAll/>
    </>
  )
}

export default HomePage