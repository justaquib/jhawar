'use client'
import React from 'react'

function NavBar({open}) {
  return (
    <>
      <header className={`fixed right-0 top-0 ${open === 0 ? 'left-72' : 'left-16'} bg-white dark:bg-gray-900 py-3 px-4 h-20 flex justify-center items-center`}>
          <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                  <div className="text-lg font-bold dark:text-white">Dashboard</div>
              </div>
          </div>
      </header>
    </>
  )
}

export default NavBar