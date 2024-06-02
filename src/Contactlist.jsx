import React from 'react'

export default function Contactlist({contacts}) {
  return (
    <div>
       <div>
              {contacts.map((contact, index) => (
                <div key={index} className='flex px-4 items-center px-8 py-2 text-black font-semibold'>
                  <div>
                    <i className="fa fa-address-book ml-8 text-4xl" aria-hidden="true"></i>
                  </div>
                  <div className='ml-8'>
                    {contact.firstName} {contact.lastName} <br />
                    {contact.phone}
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}
