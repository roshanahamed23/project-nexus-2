import React from 'react';
import Servicecart from './Servicecart';
import { serve, plate, chef } from "@/assets/icons";

const cartInfo = [
  {
    icon: serve,
    title: "Our Catering Services",
    description: "Explore our range of catering services designed to suit any occasion. Whether you need a full-service experience or a simple drop-off, we have the perfect solution to meet your needs.",
    buttonText: "View Services",
    link:"#service"
  },
  {
    icon: plate,
    title: "Our Exquisite Menu",
    description: "Delight your guests with our diverse and customizable menu options. From appetizers and main courses to desserts and beverages, we cater to all tastes and dietary requirements.",
    buttonText: "Browse Menu",
    link:"/menu"
  },
  {
    icon: chef,
    title: "About Shiva caterers",
    description: "Learn more about our story, our passion for food, and our commitment to excellence. Meet our team of experienced chefs and event planners dedicated to making your event perfect.",
    buttonText: "Meet Our Team",
    link:"/about-us"
  }
];

const Service = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-4 gap-4 p-4">
      {cartInfo.map((info, index) => (
        <Servicecart key={index} {...info} />
      ))}
    </div>
  );
};

export default Service;
