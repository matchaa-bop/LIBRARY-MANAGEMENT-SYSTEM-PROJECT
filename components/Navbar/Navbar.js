'use client';

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import AuthModal from "../auth/AuthModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="fixed top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/20 px-6 py-2 flex justify-between
      items-center left-0 w-full">
      {/* Logo */}
      <div className="logo flex items-center space-x-2 italic">
  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500 flex items-center justify-center bg-white">
    <Image src="/img/logos.jpg" alt="Logo" width={48} height={48} className="object-cover w-12 h-12" />
  </div>
  <span className="text-white text-xl font-bold">
    G5<span className="text-yellow-500 text-xl font-bold Logo">LMS</span>
  </span>
</div>

      <ul className="hidden md:flex space-x-6 text-white font-bold">
      <li>
        <Link href="#home" className="hover:text-yellow-500">
          Home
        </Link>
      </li>
      <li>
        <Link href="#about" className="hover:text-yellow-500">
          About
        </Link>
      </li>
      <li>
        <Link href="#services" className="hover:text-yellow-500">
          Services
        </Link>
      </li>
      <li>
        <Link href="#contact" className="hover:text-yellow-500">
          Contact
        </Link>
      </li>
    </ul>


      <button
       onClick={() => setShowModal(true)}
       className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 
        rounded-full text-sm font-semibold hover:from-yellow-500 hover:to-orange-600">
        Log In
      </button>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </nav>
  );
}
