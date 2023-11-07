import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
  return (
    <>
        <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
            <MagnifyingGlassIcon className='w-6' />
        </button>
    </>
  )
}

export default Search