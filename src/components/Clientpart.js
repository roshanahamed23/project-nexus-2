"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { accenture, anand, manpho, president, jain } from "@/assets/images";
import Autoplay from "embla-carousel-autoplay";
import Client from "./Clients";

const clients = [
  {
    image: anand,
    text: "Anand Sweets",
  },
  {
    image: president,
    text: "President University",
  },
  {
    image: jain,
    text: "Jain Heights",
  },
  {
    image: manpho,
    text: "Manpho construction",
  },
  {
    image: accenture,
    text: "Accenture",
  },
];

const Clientpart = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="px-4 mb-4">
    <h2 className="font-merriweather py-3 text-xl font-bold text-center">Our Clients</h2>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {clients.map((client, index) => {
          return (
            <div className="flex flex-row px-2" key={index}>
              <Client {...client} />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Clientpart;
