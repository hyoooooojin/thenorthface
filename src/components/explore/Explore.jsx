import React from 'react'
import logo100 from '../../assets/images/logo100.svg';
import explore2 from '../../assets/images/explore2.png';
import explore3 from '../../assets/images/explore3.png';
import explore4 from '../../assets/images/explore4.png';
import explore5 from '../../assets/images/explore5.png';
import explore6 from '../../assets/images/explore6.png';

const Explore = () => {
  return (
    <div className="explore w-screen mb-30">
        <div className="exploreContainer w-full max-w-[1280px] mx-auto px-4">
            <div className="exploreItems w-full grid grid-cols-3 gap-6">
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] opacity-70 hover:opacity-100" src={logo100} alt="" /></div>
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] hover:scale-110 object-contain cursor-pointer " src={explore2} alt="" /></div>
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] hover:scale-110 object-contain cursor-pointer" src={explore3} alt="" /></div>
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] hover:scale-110 object-contain cursor-pointer" src={explore4} alt="" /></div>
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] hover:scale-110 object-contain cursor-pointer" src={explore5} alt="" /></div>
                <div className="exploreItem aspect-square rounded-2xl shadow flex items-centen justify-center"><img className="w-[70%] hover:scale-110 object-contain cursor-pointer" src={explore6} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Explore