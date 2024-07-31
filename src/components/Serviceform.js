import React, { useContext, useState } from 'react';
import axios from 'axios';


const ServiceForm = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');


  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);
  const handleDetailsChange = (e) => setDetails(e.target.value);


  const handleSubmit = (e) => {
    axios.post("/api/customer",{name,email,service}).then((res)=>console.log(res));
    axios.post("/api/mail",{name,email,phone,service,details}).then((res)=>console.log(res));
    
  };

  return (
    <div className="p-4 h-auto flex items-center justify-center  rounded-2xl">
      <form onSubmit={handleSubmit} className=" bg-amber-700 flex flex-col gap-4 p-6 rounded-lg shadow-lg w-full">
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2">Name</label>
          <input
            value={name}
            onChange={handleNameChange}
            placeholder="First and Last Name"
            className="input"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
            className="input"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2">Phone</label>
          <input
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Your Phone Number"
            className="input"
            type="tel"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2">Service</label>
          <input
            value={service}
            onChange={handleServiceChange}
            placeholder="Service Needed"
            className="input"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2">Details</label>
          <textarea
            value={details}
            onChange={handleDetailsChange}
            placeholder="Details"
            className="input"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center sm:max-w-xs bg-red transition ease-in-out hover:scale-105 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
