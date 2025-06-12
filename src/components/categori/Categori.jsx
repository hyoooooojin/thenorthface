import React from 'react'
import CategoriBtn from './CategoriBtn'
import logo from '../../assets/images/logo.svg'
import CategoriBtnWhite from './CategoriBtnWhite'


const Categori = () => {
  return (
    <div className="categori w-screen mb-30">
      <div className="categoriContainer">

        <div className="categori1 flex items-center ml-40">
          <CategoriBtn label="bag"/>
          <CategoriBtn label="hoodie"/>
          <span className="inline-block w-[8vw] m-1"><img className="w-full h-full object-contain" src={logo} alt="" /></span>
          <CategoriBtnWhite label="woman"/>
          <CategoriBtn label="gloove"/>
        </div>
        <div className="categori2 flex items-center justify-end mr-20">
          <CategoriBtn label="pants"/>
          <CategoriBtn label="etc"/>
          <CategoriBtnWhite label="man"/>
          <CategoriBtn label="T-shirts"/>
          <CategoriBtn label="shoese"/>
        </div>
        <div className="categori3 flex items-center ml-20 ">
          <CategoriBtn label="wallet"/>
          <CategoriBtn label="jacket"/>
          <CategoriBtnWhite label="kids"/>
          <CategoriBtn label="T-shirts"/>
          <CategoriBtn label="hat"/>
        </div>

      </div>
    </div>
  )
}

export default Categori