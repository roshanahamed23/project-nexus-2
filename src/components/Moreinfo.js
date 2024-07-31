import React from 'react'
import { more } from '@/assets/images'
import Image from 'next/image'

const Moreinfo = () => {
  return (
    <div className='flex flex-row max-md:flex-col gap-4 p-4'>
        <div className='flex-1 mb-4'>
            <Image
            src={more}
            alt='more us'
            className='rounded-2xl shadow-2xl max-md:w-250 h-250'
            ></Image>
        </div>

        <div className='flex-1 flex justify-center items-start gap-8 flex-col'>
            <div className='flex gap-2 flex-col '>
            <h3 className='font-bold font-merriweather text-4xl'>Our Promise to You</h3>
            <div className='bg-red w-20 h-1 rounded-lg'></div>
            </div>
            <p className='font-monserrat text-gray-500 text-lg leading-relaxed'>
            When you choose <span className='font-bold'>"Shiva caterers,"</span>, you're not just picking a caterer; you're choosing an unforgettable
             experience. We're committed to delivering excellence in both our service and the food we serve. Your
              event will be more than just memorable—it will showcase your impeccable taste. 
              Our team brings passion, skill, and top-quality ingredients to every dish, ensuring each bite is a delight. 
              Whether it's a wedding, a corporate gathering, or a family celebration, we tailor our menus to suit your preferences perfectly. 
              Contact us today to start planning your next special event with Shiva caterers and see the difference firsthand.</p>
        </div>
    </div>
  )
}

export default Moreinfo