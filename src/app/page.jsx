import React from 'react'
// import Hero from '@/app/pages/hero'
import Home from '@/app/home/page'
import Slider from '@/Component/slider'
import Footer from '@/Component/footer'

const page = () => {
  return (
  <div>
    {/* <Hero/> */}
    <Home/>
    <Slider/>
    <Footer/>
  </div>
  )
}

export default page