import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex-shrink-0'>
    <Header {...children}/>
    </div>
    <div className='flex-1'>
    {children}
    </div>
    <div className='flex-shrink-0'>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout