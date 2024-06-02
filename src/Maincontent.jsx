import React, { useState } from 'react';

export default function Maincontent({add,sub}) {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const add  = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setDob("");
  };
  

  return (
    <>
      {
sub.map((e)=>(
  <div className='flex  bg-teal-600 rounded-2xl m-6 p-6 justify-center items-center h-full mt-7'>
          <div className='mr-10'>
            <i className="fa fa-camera  p-6 rounded-full  bg-slate-300 text-4xl" aria-hidden="true"></i>
            <h1 className='font-semibold'>Add picture</h1>
          </div>
          <form action="">
            <h1 className='font-semibold'>First Name</h1>
            <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}
     placeholder='First name' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <h1 className='font-semibold'>Last Name</h1>
            <input type="text" value={lastName} onChange={(e) => 
    setLastName(e.target.value)} placeholder='Last name' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <h1 className='font-semibold'>Number</h1>
            <input type="text" value={phone} onChange={ (e) => 
    setPhone(e.target.value)} placeholder='Phone' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <h1 className='font-semibold'>Email</h1>
            <input type="email" value={email} onChange={ (e) => 
    setEmail(e.target.value)} placeholder='Email' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <h1 className='font-semibold'>Address</h1>
            <input type="text" value={address} onChange={(e) => 
    setAddress(e.target.value)} placeholder='Address' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <h1 className='font-semibold'>Date of birth</h1>
            <input type="date" value={dob} onChange={(e) => 
    setDob(e.target.value)} placeholder='Date of birth' className="border-2 border-slate-500 rounded-xl px-10 py-2" /><br />
            <button onClick={add} className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </form>
        </div>
        
))
        
  }
    </>
  );
}
