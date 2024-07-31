import React from 'react';
import Image from 'next/image';
import { heroDark, heroImage } from '@/assets/images'; 
import Link from 'next/link';
const Hero = () => {
  return (
    <section>
      <div className='lg:flex flex-row mt-1'>
        {/* Hero Content */}
        <div className="relative h-screen lg:flex-1">
          <Image
            src={heroDark}
            fill
            style={{ objectFit: 'cover' }}
            alt="Hero Background"
            priority={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-6 items-start justify-center
 text-white text-left px-4">
            <p className="text-lg md:text-2xl mb-4">Elevate Your Events with Gourmet Catering Excellence</p>
            <h1 className="text-2xl md:text-4xl font-merriweather font-bold mb-4">Deliciously Crafted, Professionally Served Perfectly Tailored for Every Occasion</h1>
            <p className="text-md md:text-lg mb-16 max-w-2xl">
              From intimate gatherings to grand celebrations, our catering services bring the finest culinary experiences to your table.
            </p>
            <Link href="/menu">
            <button className="bg-red text-white font-semibold py-2 px-4 rounded">
              Explore our Menus
            </button>
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className='lg:flex-1 h-screen relative max-lg:hidden'>
          <Image
            src={heroImage}
            alt="Hero Image"
            fill
            style={{ objectFit: 'cover' }}
            className='object-cover'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
