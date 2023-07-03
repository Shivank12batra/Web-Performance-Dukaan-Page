import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
import Features from '@/components/Features'
import Tools from '@/components/Tools'
import Themes from '@/components/Themes'

const Index = () => {
  return (
    <div>
      <Navbar/>
       <Hero/>
       <Brands/>
       <Features/>
       <Tools/>
       <Themes/>
    </div>
  )
}

export default Index