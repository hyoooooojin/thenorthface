import React from 'react'
import logo from '../../assets/images/logo.svg'
import hero1 from '../../assets/images/hero1.png'
import hero2 from '../../assets/images/hero2.png'
import hero3 from '../../assets/images/hero3.png'

const Hero = () => {
  return (
    <div className="hero w-screen mb-30">
      <div className="heroContainer w-full px-12 flex flex-col items-center">

        <div className="heroLogo w-full flex justify-end mb-6 ">
          <div className="logoBlock h-40">
            <img className="w-full h-full" 
              src={logo} 
              alt="" />
          </div>
        </div>

        <div className="heroFeatured w-full flex justify-center gap-[0.5%] ">
          <div className="featuredItem w-[33%] aspect-[4/5] rounded-2xl overflow-hidden shadow">
            <img className="w-full h-full" src={hero1} alt="" />
          </div>
          <div className="featuredItem w-[33%] aspect-[4/5] rounded-2xl overflow-hidden shadow">
            <img className="w-full h-full" src={hero2} alt="" />
          </div>
          <div className="featuredItem w-[33%] aspect-[4/5] rounded-2xl overflow-hidden shadow flex items-center relative">
            <img className="my-auto" src={hero3} alt="" />
            <span className="heroBtn absolute bottom-[3%] right-[3%] text-white font-bold px-[clamp(12px,2vw,16px)] py-[clamp(0px,1vw,4px)] bg-black rounded-2xl cursor-pointer">+</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero

