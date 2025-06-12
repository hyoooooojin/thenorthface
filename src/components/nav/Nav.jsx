import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 스크롤 감지 → 메뉴 닫기
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="nav relative w-screen h-24 mb-20 z-50">

      {/* 사이드 메뉴 */}
      <div className={`navBlock fixed top-0 h-screen w-[50%] bg-black/10 backdrop-blur-3xl rounded-tr-2xl rounded-br-2xl transition-all duration-500 ease-in-out
        ${isOpen ? 'left-0' : '-left-full'}`}>
          <div className="navMenu absolute top-[25%] left-1/2 transform -translate-x-1/2 text-black font-bold text-center">
            <p className="mb-4 text-xl cursor-pointer">여성</p>
            <p className="mb-4 text-xl cursor-pointer">남성</p>
            <p className="mb-22 text-xl cursor-pointer">키즈</p>
            <p className="mb-2 text-black/50 cursor-pointer">멤버십</p>
            <p className="cursor-pointer">로그인</p>
          </div>
      </div>

      <div className="navContainer w-full h-full px-12 flex items-center justify-between">
        
        {/* 햄버거 아이콘 */}
        <div
          className="hamburger w-9 h-9 relative flex items-center justify-center cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span
            className={`absolute w-full h-1 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-3'
            }`}
          ></span>
          <span
            className={`absolute w-full h-1 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute w-full h-1 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-3'
            }`}
          ></span>
        </div>

        {/* 오른쪽 아이콘 */}
        <div className="icons flex gap-3">
          <span className="icon cursor-pointer"><NotificationsIcon /></span> 
          <span className="icon cursor-pointer"><LocalMallIcon /></span> 
          <span className="icon cursor-pointer"><PersonIcon /></span> 
        </div>
      </div>
    </div>
  );
};

export default Nav;
