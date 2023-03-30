import React, { useContext } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { DarkModeContext } from '../context/DarkModeContext';

function ThemeSwitcher() {
  const { theme, handleThemeSwitcher } = useContext(DarkModeContext);

  const handleThemeClick = () => {
    handleThemeSwitcher()
  }

  return (
    <>
      {(theme === "dark") ? (
        <div onClick={handleThemeClick} className='themeSwitchCont cursor-pointer bg-[#1b2747] text-white object-contain p-3 flex justify-center items-center rounded-full'>
          <BsFillSunFill size={18} />
        </div>
      ) : (
        <div onClick={handleThemeClick} className='themeSwitchCont cursor-pointer bg-[#1b2747] text-white object-contain p-3 flex justify-center items-center rounded-full'>
          <BsFillMoonFill size={18} />
        </div>
      )}

    </>
  )
}

export default ThemeSwitcher