import React from "react";
import { serve } from "@/assets/icons";
import Image from "next/image";
import { menuimg } from "@/assets/images";
import Link from "next/link";
Link

const Menuflag = () => {
  return (
    <div className="flex flex-row max-md:flex-col justify-around gap-20 max-md:gap-10 max-md:items-start items-center p-4 bg-red text-white">
    <div className="flex flex-row gap-6 items-center ">
      <div className="flex items-center justify-center max-md:h-70">
        <Image src={menuimg} width={50} height={50} alt="menuflag" /> 
      </div>
      <div>
        <h3 className="font-merriweather text-lg">Diverse Culinary Offerings</h3>
        <p className="font-montserrat">Explore a diverse menu crafted for every palate and occasion.</p>
      </div>
    </div>
    <Link href='/menu'>
    <button className="border border-white text-white px-5 py-3 rounded-lg text-red font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
      View Menu
    </button></Link>
  </div>
  
  );
};

export default Menuflag;
