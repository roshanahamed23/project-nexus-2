import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Client = ({image,text,link}) => {
  const href=link?link:"#";
  return (
    <Link href={href}>
    <div className='flex transition ease-in-out duration-300 transform hover:scale-90 flex-col items-center justify-center gap-4 px-28 py-10 max-w-sm rounded-lg bg-white border border-gray-400 shadow-md'>
        <div className='rounded-md flex justify-center items-center w-36 h-36 relative'>
        <Image src={image}
        style={{ objectFit: 'cover' }}
        fill
        alt="our clients"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
        ></Image>
        </div>
        <h5 className='font-merriweather text-md whitespace-nowrap font-bold'>{text}</h5>
    </div>
    </Link>
  )
}

export default Client