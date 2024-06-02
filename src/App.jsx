import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Contactlist from './Contactlist';

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function addTask(e) {
    e.preventDefault();
    setContacts([
      ...contacts,
      {
        Name: firstName,
        LastName: lastName,
        Contact: phone,
        Mail: email,
        Address: address,
        Date: dob
      }
    ]);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setDob("");
    setIsFormVisible(false);
  }

  function toggleForm() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <>
      <div>
        <div className='flex justify-between p-2 border-2 border-emerald-600'>
          <h1 className='text-2xl font-semibold'>My Contact App</h1>
          <div>
            <button onClick={toggleForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              New +
            </button>
          </div>
        </div>
        <div className='flex'>
          <Sidebar contacts={contacts} />
          <div className="items-center mt-0 justify-center w-full">
            {isFormVisible && (
              <div className='flex bg-teal-600 rounded-2xl m-6 p-6 justify-center items-center h-full mt-7'>
                <div className='mr-10'>
                  <i className="fa fa-camera p-6 rounded-full bg-slate-300 text-4xl" aria-hidden="true"></i>
                  <h1 className='font-semibold'>Add picture</h1>
                </div>
                <form onSubmit={addTask}>
                  <h1 className='font-semibold'>First Name</h1>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First name' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <h1 className='font-semibold'>Last Name</h1>
                  <input type="text" value={lastName} onChange={(e) =>
                    setLastName(e.target.value)} placeholder='Last name' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <h1 className='font-semibold'>Number</h1>
                  <input type="text" value={phone} onChange={(e) =>
                    setPhone(e.target.value)} placeholder='Phone' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <h1 className='font-semibold'>Email</h1>
                  <input type="email" value={email} onChange={(e) =>
                    setEmail(e.target.value)} placeholder='Email' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <h1 className='font-semibold'>Address</h1>
                  <input type="text" value={address} onChange={(e) =>
                    setAddress(e.target.value)} placeholder='Address' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <h1 className='font-semibold'>Date of birth</h1>
                  <input type="date" value={dob} onChange={(e) =>
                    setDob(e.target.value)} placeholder='Date of birth' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded">
                    Save
                  </button>
                </form>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </>
  );
}
