import React from 'react';

function Sidebar({ contacts }) {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Contacts</h2>
      <div className="p-2 border-2  border-auto mt-3 ">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full sm:w-auto" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
            Search
          </button>

        </div>
      <ul>
        {contacts.map((contact, index) => (
          <div key={index} className='flex px-4 items-center px-8 py-2 text-black font-semibold'>
          <div>
            <i className="fa fa-address-book ml-8 text-4xl " aria-hidden="true"></i>
          </div>
          <div className='ml-8 text-black'>
            {contact.firstName} {contact.lastName} <br />
            {contact.phone}
          </div>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
