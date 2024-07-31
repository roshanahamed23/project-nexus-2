import React from "react";
import {
  birthday,
  community,
  networking,
  corporate,
  wedding,
} from "@/assets/images/product";
import Productcart from "./Productcart";

const productInfo = [
  {
    image: birthday,
    title: "Birthday Event",
    description:
      "Festive catering for birthdays, making every celebration deliciously memorable.",
    buttonText: "View Details",
    link:"/service/birthday-events"
  },
  {
    image: corporate,
    title: "Corporate Event",
    description:
      "Professional catering solutions that impress and satisfy corporate event attendees.",
    buttonText: "View Details",
    link:"/service/corporate-events"
  },
  {
    image: community,
    title: "Community Event",
    description:
      "Community-focused catering, fostering connection with delicious, diverse menu options.",
    buttonText: "View Details",
    link: "/service/community-events"
  },
  {
    image: networking,
    title: "Networking Event",
    description: "Culinary delights to enhance networking events, fostering connections and collaborations.",
    buttonText: "View Details",
    link:"/service/networking-events"
  },
  {
    image: wedding,
    title: "Wedding Event",
    description: " Elegant menus and flawless service for your unforgettable wedding celebration.",
    buttonText: "View Details",
    link:"/service/wedding-events"
  },
];

const Product = () => {
  return (
    <div id="service" className="bg-black text-white p-4 text-center">
      <h2 className="font-merriweather text-xl font-bold">Catering  <span className="text-red">Service</span></h2>
      <div className="flex flex-col lg:flex-row mt-4 gap-4 p-4">
        {productInfo.map((product, index) => {
            return(<Productcart key={index} {...product} />);
        })}
      </div>
    </div>
  );
};

export default Product;
