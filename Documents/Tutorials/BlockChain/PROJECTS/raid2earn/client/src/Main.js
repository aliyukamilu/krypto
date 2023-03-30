import React, { useState } from "react";
import { Header, Hunts, Welcome, Sidebar } from "./components";
import { DarkModeProvider } from './context/DarkModeContext'

function Main() {
  const [connected, setConnected] = useState(true)

  return (
    <div className="h-screen dark:bg-[#10172af6] dark:text-white overflow-y-auto">
      <DarkModeProvider>
        <Header />
        <section className="h-full flex relative">
          {(connected && <Sidebar />)}
          <div className='h-full lg:pl-[240px]'>
            {(connected ? (
              <Hunts />
            ) : (
              <Welcome />
            ))}
          </div>
        </section>
      </DarkModeProvider>
    </div>
  )
}

export default Main