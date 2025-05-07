import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-10 md:flex-row md:justify-center md:items-start md:gap-10">
        {/* 브랜드스토리 */}
        <div className="w-fit min-w-[140px] hidden md:block">
          <p className="text-[12px] font-semibold mb-3">ABOUT US</p>
          <ul className="space-y-1 text-[10px] text-gray-300">
            <li>VISION</li>
            <li>TEAM</li>
            <li>TNF 100</li>
            <li>남극대륙횡단</li>
          </ul>
        </div>

        {/* 고객지원실 */}
        <div className="w-fit min-w-[140px] hidden md:block">
          <p className="text-[12px] font-semibold mb-3 ">FAMILY</p>
          <ul className="space-y-1 text-[10px] text-gray-300">
            <li>화이트라벨</li>
          </ul>
          <p className="text-[12px] font-semibold mt-8 mb-3">STORE</p>
          <ul className="space-y-1 text-[10px] text-gray-300">
            <li>매장찾기</li>
          </ul>
        </div>

        {/* 고객지원실 */}
        <div className="w-fit min-w-[140px] hidden md:block">
          <p className="text-[12px] font-semibold mb-3">고객지원실</p>
          <ul className="space-y-1 text-[10px] text-gray-300">
            <li>FAQ</li>
            <li>문의하기</li>
            <li>A/S안내</li>
            <li>공지사항</li>
          </ul>
        </div>

        {/* 고객센터 */}
        <div className="text-left min-w-[140px]">
          <p className="text-[12px] font-semibold mb-3 md:text-left">온라인몰 고객지원실</p>
          <p className="text-[10px] text-gray-200 mb-1">1661-3512</p>
          <ul className="text-[10px] text-gray-400 mb-5">
            <li>월~금요일 09:00~18:00</li>
            <li>토, 일, 공휴일 휴무</li>
          </ul>

          <p className="text-[12px] font-semibold mb-1 md:text-left">매장고객 및 AS문의</p>
          <p className="text-[10px] text-gray-200 mb-1">1899-2626</p>
          <ul className="text-[10px] text-gray-400">
            <li>월~금요일 09:00~18:00</li>
          </ul>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="mt-12 text-center text-[9px] text-gray-500 border-t border-gray-700 py-4">
        ⓒ 2025 TNF. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
