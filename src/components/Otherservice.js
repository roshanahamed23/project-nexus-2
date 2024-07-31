'use client'
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselAutoplay } from "embla-carousel-autoplay";
import {networking,wedding,corporate,community,birthday} from "@/assets/images/product";
import Client from "./Clients";
import Autoplay from "embla-carousel-autoplay";


const clients = [
  {
    image: birthday,
    text: "Birthday Events",
    link:"/service/birthday-events"
  },
  {
    image: corporate,
    text: "Corporate Events",
    link:"/service/corporate-events"
  },
  {
    image: community,
    text: "Community Events",
    link:"/service/community-events"
  },
  {
    image: networking,
    text: "Networking Events",
    link:"/service/networking-events"
  },
  {
    image: wedding,
    text: "Wedding Events",
    link:"/service/wedding-events"
  },
];

const Otherservice = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()]);


  return (
    <div className="px-4 mb-4">
    <h2 className="font-merriweather py-2 text-xl font-bold text-center">Other Services</h2>
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

export default Otherservice;
