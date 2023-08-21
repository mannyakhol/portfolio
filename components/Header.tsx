import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 flex justify-center z-10">
      <Link href="/">
        <div className="text-white mx-4 hover:text-green-500 transition duration-300 ease-in-out">Home</div>
      </Link>
      <Link href="/about">
        <div className="text-white mx-4 hover:text-green-500 transition duration-300 ease-in-out">About</div>
      </Link>
      <Link href="/projects">
        <div className="text-white mx-4 hover:text-green-500 transition duration-300 ease-in-out">Projects</div>
      </Link>
      <Link href="/contact">
        <div className="text-white mx-4 hover:text-green-500 transition duration-300 ease-in-out">Contact</div>
      </Link>
    </nav>
  );
};

export default Header;
