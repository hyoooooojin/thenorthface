import React from 'react'
import Collection from './Collection'
import jacketCollectionMainImg from '../../assets/images/jacketCollectionMainImg.jpg'
import jacketCollectionSubImg1 from '../../assets/images/jacketCollectionSubImg1.jpg'
import jacketCollectionSubImg2 from '../../assets/images/jacketCollectionSubImg2.jpg'
import jacketCollectionSubImg3 from '../../assets/images/jacketCollectionSubImg3.jpg'
import vestCollectionMainImg from '../../assets/images/vestCollectionMainImg.png'
import vestCollectionSubImg1 from '../../assets/images/vestCollectionSubImg1.jpg'
import vestCollectionSubImg2 from '../../assets/images/vestCollectionSubImg2.jpg'
import vestCollectionSubImg3 from '../../assets/images/vestCollectionSubImg3.jpg'
import pantsCollectionMainImg from '../../assets/images/pantsCollectionMainImg.jpg'
import pantsCollectionSubImg1 from '../../assets/images/pantsCollectionSubImg1.jpg'
import pantsCollectionSubImg2 from '../../assets/images/pantsCollectionSubImg2.jpg'
import pantsCollectionSubImg3 from '../../assets/images/pantsCollectionSubImg3.jpg'

const Collections = () => {
  return (
    <div className="collections w-screen mb-30">
      <div className="collectionsContainer w-full px-14 flex flex-col gap-8">
        <Collection
          ImgClass="w-[120%]"
          mainImg={jacketCollectionMainImg}
          label="Jacket"
          subImg1={jacketCollectionSubImg1}
          subImg2={jacketCollectionSubImg2}
          subImg3={jacketCollectionSubImg3}
        />
        <Collection 
          ImgClass="w-[70%]"
          mainImg={vestCollectionMainImg}
          label="Vest"
          subImg1={vestCollectionSubImg1}
          subImg2={vestCollectionSubImg2}
          subImg3={vestCollectionSubImg3}
          />
        <Collection 
          ImgClass="w-[120%]"
          mainImg={pantsCollectionMainImg}
          label="Pnats"
          subImg1={pantsCollectionSubImg1}
          subImg2={pantsCollectionSubImg2}
          subImg3={pantsCollectionSubImg3}
          />
      </div>
    </div>
  )
}

export default Collections