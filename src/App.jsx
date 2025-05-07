import { useState } from 'react'
import './App.css'
import Nav from './component/nav/Nav'
import Hero from './component/hero/Hero'
import Categori from './component/categori/Categori'
import Collections from './component/collections/Collections'
import Banner from './component/banner/Banner'
import Explore from './component/explore/Explore'
import Footer from './component/footer/Footer'



function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Categori/>
      <Collections/>
      <Banner/>
      <Explore/>
      <Footer/>
    </>
  )
}

export default App
