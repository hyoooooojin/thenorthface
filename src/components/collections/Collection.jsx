import React from 'react'

const Collection = ({mainImg, ImgClass, label, subImg1, subImg2, subImg3}) => {
  return (
    <div className="collection w-full flex justify-between items-end">
        
        <div className="collectionLeft flex">
          <div className="mainItem  w-[30vw] aspect-[4/3] rounded-2xl overflow-hidden shadow cursor-pointer flex items-center justify-center">
            <img className={`${ImgClass}`} src={mainImg} alt="" />
          </div>
          <div className="collectionBt self-start flex items-center ml-4">
            <span className="flex items-center text-white font-bold px-[clamp(12px,2vw,16px)] py-[clamp(0px,1vw,4px)] bg-black rounded-2xl cursor-pointer">+</span>
            <span className="ml-1 text-[2rem]">{label}</span>
          </div>
        </div>

        <div className="collectionRight w-[40vw] h-[50%] flex gap-3">
          <div className="subItem w-[33%] aspect-square rounded-2xl overflow-hidden shadow cursor-pointer">
            <img src={subImg1} alt="" />
          </div>
          <div className="subItem w-[33%] aspect-square rounded-2xl overflow-hidden shadow cursor-pointer">
            <img src={subImg2} alt="" />
          </div>
          <div className="subItem w-[33%] aspect-square rounded-2xl overflow-hidden shadow cursor-pointer">
            <img src={subImg3} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Collection