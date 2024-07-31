import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";
import Clientpart from "@/components/Clientpart";
import Product from "@/components/Product";
import { about } from "@/assets/images";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-8 w-full">
        <h1 className="font-merriweather text-3xl font-bold text-amber-700 brightness-50 text-center mb-8">Welcome to Shiva caterers</h1>
        <div className="px-2">
          <section className="flex flex-row max-lg:flex-col gap-2">
            <motion.div 
               animate={{ y: [0, -30, 0, -30, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="p-32 transition max-sm:text-4xl whitespace-nowrap transform hover:scale-105 duration-300 ease-linear brightness-50 flex flex-0 items-center justify-center font-merriweather text-6xl text-red">
              Why Choose Us
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 1 }}
                className="bg-white shadow-md rounded-lg p-2 mb-6 font-merriweather"
              >
                <h2 className="text-lg font-semibold mb-4">
                  Exceptional Quality
                </h2>
                <p className="text-gray-700">
                  At Shiva caterers, we provide top-notch food and service. Our
                  fresh ingredients and skilled chefs ensure a delightful dining
                  experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 1 }}
                className="bg-white shadow-md rounded-lg p-2 mb-6"
              >
                <h2 className="text-lg font-semibold mb-4 font-merriweather text-red">
                  Customizable Menus
                </h2>
                <p className="text-gray-700">
                  Every event is unique. We offer customizable menus tailored to
                  your preferences and dietary needs, perfect for weddings,
                  corporate events, or birthday parties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 1 }}
                className="bg-white shadow-md rounded-lg p-2 mb-6"
              >
                <h2 className="text-lg font-semibold mb-4 font-merriweather">
                  Professional Service
                </h2>
                <p className="text-gray-700 ">
                  Our experienced team ensures your event is seamless and
                  memorable. From planning to execution, we deliver exceptional
                  service with a personal touch.
                </p>
              </motion.div>
            </div>
          </section>
          <div className="rounded-md flex justify-center items-center w-full h-96 relative my-3">
        <Image
          src={about}
          alt="productimage"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
          sizes="100vw"
        />
      </div>
          <div className="text-amber-700 brightness-50 text-center m-4 bg-amber p-2">
            <h3 className="font-merriweather text-4xl mb-2">16 Years Of Experience In Catering Services</h3>
            <p className="text-lg">Having around 16 years of experience in the catering service, we focus our work on a quality oriented ideology</p>
          </div>
          <Product/>

          <Clientpart/>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
