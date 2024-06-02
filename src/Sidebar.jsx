import React from 'react'
import Contactlist from './Contactlist'

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="p-2 border-2  border-auto mt-3 ">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full sm:w-auto" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
            Search
          </button>

        </div>

      </div>
    </>
  )
}
