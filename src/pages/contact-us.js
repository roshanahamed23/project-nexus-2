import Layout from '@/components/Layout';
import ServiceForm from '@/components/Serviceform';
import React from 'react';

const ContactUsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-8 flex flex-col lg:flex-row flex-1">
        <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2">
          <h1 className="text-3xl font-bold font-merriweather text-red text-center mb-8">Contact Us</h1>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="text-gray-700">
              No.3, Suggatta Road, Hunsamaranahalli, Bengaluru Urban - 562157, Karnataka
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <p className="text-gray-700">
              <a href="mailto:shivacaterersdeliciousfoods@gmail.com" className="text-blue-600 hover:underline">
                shivacaterersdeliciousfoods@gmail.com
              </a>
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Phone Number</h2>
            <p className="text-gray-700">
              <a href="tel:+917406166660" className="text-blue-600 hover:underline">
                +91 74061 66660
              </a>
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              Have questions or ready to book your event with Shiva Caterers? Reach out to us using the information above or fill out the form below. We look forward to hearing from you!
            </p>
          </section>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2 flex-1 mt-20">
        <h2 className="font-merriweather font-semibold text-2xl text-center mb-4">Book a Catering</h2>
        <ServiceForm />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
