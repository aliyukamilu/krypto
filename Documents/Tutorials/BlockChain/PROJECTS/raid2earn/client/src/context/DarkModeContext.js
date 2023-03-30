import React, { createContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <DarkModeContext.Provider value={{ theme, handleThemeSwitcher }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  )
}

export { DarkModeContext, DarkModeProvider };