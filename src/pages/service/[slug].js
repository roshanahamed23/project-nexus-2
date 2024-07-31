import React, { useEffect, useState } from "react";
import { service } from "@/assets";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import ServiceForm from "@/components/Serviceform";
import Otherservice from "@/components/Otherservice";

const Service = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [serviceData, setserviceData] = useState({});

  useEffect(() => {
    if (slug) {
      const data = service.find((ser) => ser.slug == slug);
      setserviceData(data);
    }
  }, [slug]);

  return (
    <Layout>
      <div className="flex flex-col items-start justify-center mt-2 gap-8 bg-black text-white mypadding">
        <h2 className="font-merriweather text-xl font-bold">
          {serviceData.title}
        </h2>
        <button className="border border-slate-500 px-5 py-3 bg-red rounded-lg text-white font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
          <a href="#form"> Book Now</a>
        </button>
      </div>
     
      <div className="mypadding flex flex-col gap-6">
        <div className="relative rounded-lg border flex items-center justify-center w-auto h-96">
          <Image
            src={serviceData.image}
            fill
            style={{ objectFit: 'cover' }}
            alt="service"
            className="rounded-xl"
          ></Image>
        </div>
        <h3 className="font-merriweather font-semibold text-xl">
          Information about {serviceData.title}
        </h3>
        <p className="font-monserrat text-gray-500 text-lg leading-relaxed">
          {serviceData.description}
        </p>
        <h3 className="font-merriweather font-semibold text-xl">
          Forms of payment accepted
        </h3>
        <ul className="flex flex-row max-md:flex-col gap-3 text-md">
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Cash
          </li>
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Bank Tranfer
          </li>
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Cheque
          </li>
        </ul>
        <div id="form">
          <h2 className="font-merriweather font-semibold text-xl text-center mb-4">Book a Catering</h2>
          <ServiceForm />
        </div>
        <Otherservice />
      </div>
    </Layout>
  );
};

export default Service;
