import React from 'react';
import Image from 'next/image';

const Servicecart = ({ icon, title, description, buttonText, link }) => {
  return (
    <div className="border rounded-md shadow-sm text-center p-6 flex flex-col gap-4 justify-center items-center">
      <div className="rounded-full p-2 bg-red flex justify-center items-center w-24 h-24">
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
          <Image 
            src={icon}
            alt="icon-service"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <h5 className="font-merriweather font-semibold text-md">{title}</h5>
      <p className="font-monserrat text-slate-500 max-w-sm">{description}</p>
      <a href={link}>
        <button className="border border-gray-400 px-5 py-3 rounded-lg text-black font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Servicecart;
