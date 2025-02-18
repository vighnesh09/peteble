import React from 'react'
// import Hero from '@/app/pages/hero'
import Home from '@/app/Pages/index'
import Slider from '@/app/Component/slider'
import Footer from '@/app/Component/footer'

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