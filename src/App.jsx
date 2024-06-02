import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';


export default function App() {
  const [allvalue,setallvalue]=useState("")
  
  return (
    <>
      <div>
        <div className='flex justify-between p-2 border-2 border-emerald-600'>
          <h1 className='text-2xl font-semibold'>My Contact App</h1>
          <div>
            <button onClick={allvalue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              New +
            </button>
          </div>
        </div>
        <div className='flex'>
          <Sidebar />
          <div className="items-center mt-0 justify-center w-full">
            <Maincontent sub={setallvalue} />
           
          </div>
        </div>
      </div>
    </>
  );
}
