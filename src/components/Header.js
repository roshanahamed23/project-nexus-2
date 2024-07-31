import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Logo } from "@/assets/images";
import Image from "next/image";
import { isLogin,logOut } from "@/utils";
import { useRouter } from "next/navigation";



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const authenticate = async () => {
      const Loggedin = await isLogin();
      if (Loggedin.auth) {
        setAuth(true);
      } else {
        setAuth(false);
      
      }
    };
    authenticate();
  }, []);

  return (
    <header className="flex flex-row justify-around items-center w-full h-20 py-3 shadow-bottom max-sm:justify-between pl-2 pr-4">
      <div>
        <Image className="h-[120px] w-[170px]" src={Logo} alt="logo" priority={true} />
      </div>

      {/* Desktop Navigation */}
      <nav className="max-sm:hidden">
        <ul className="flex gap-10 list-none justify-center items-center font-merriweather">
          <li><Link href="/" className="hover:text-red transition-colors duration-500 ease-in-out">Home</Link></li>
          <li><Link href="/menu" className="hover:text-red transition-colors duration-500 ease-in-out">Menu</Link></li>
          <li><Link href="/about-us" className="hover:text-red transition-colors duration-500 ease-in-out">About Us</Link></li>
          <li><Link href="/contact-us" className="hover:text-red transition-colors duration-500 ease-in-out">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="max-sm:hidden m-8">
        {!auth ? <button><Link href="/signup" className="block p-2 bg-red rounded-md">Signup</Link></button>:<button onClick={logOut} className="block p-2 text-white bg-red rounded-md
        ">Logout</button>}
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute mt-80 w-full z-10 bg-white p-4 shadow-lg">
          <ul className="list-none">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/menu" className="block py-2">Menu</Link></li>
            <li><Link href="/about-us" className="block py-2">About Us</Link></li>
            <li><Link href="/contact-us" className="block py-2">Contact Us</Link></li>
            <li><Link href="/contact-us" className="block py-2">Book Now</Link></li>
            {user && <li><p className="block py-2">{User.name}</p></li>}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
