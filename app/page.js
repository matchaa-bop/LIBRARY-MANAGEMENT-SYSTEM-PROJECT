// This is our landing page
'use client';

import Image from 'next/image';
import Link from "next/link";
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* HOME */}
      <section id="home">
        <div
          className="h-screen w-full flex flex-col items-center justify-center px-6 py-20 mt-0 text-white text-center pt-20 bg-black/60"
          style={{
            backgroundImage: "url('/img/lib-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 leading-tight mb-4">
            Welcome to our Library
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 mt-3 leading-relaxed">
            Our Library lets users browse, borrow, and view books easily.
            It's designed to make library access simple, fast, and well-organized.
          </p>

          <a
            href="#"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-500 
            text-white font-semibold px-6 py-3 rounded-full transition duration-300 mb-8 "
          >
            Login or Register to Access
          </a>

          <div className="flex flex-col sm:flex-col gap-2 sm:gap-4 bg-black/90 rounded-sm pr-10 pl-10 pt-2 pb-2 font-Semibold">
            <Link href="/admin" className="underline hover:text-yellow-500">Admin Panel Test ➤</Link>
            <Link href="/library" className="underline hover:text-yellow-500">Library for Users Test ➤</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="min-h-screen w-full bg-gray-900 py-16 px-4 md:px-8 lg:px-16 text-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-20">About Our Library System</h2>
            <p className="text-gray-300 mb-6">
              Our Library Management System is crafted to enhance the efficiency and user-friendliness of managing books, patrons, and borrowing processes. Whether you are an administrator or a library member, our platform provides a seamless and intelligent experience.
            </p>
            <p className="text-gray-400">
              Featuring automated workflows, real-time inventory management, and a user-friendly dashboard, we are revolutionizing library operations for the modern era.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/img/books.jpg" alt="Library system preview" width={1200} height={80} className="w-full max-w-md pt-20" />
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section
        id="services"
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
        style={{
          backgroundImage: "url('/img/lib1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover what our library system offers to simplify borrowing, tracking, and managing books efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Book Borrowing</h3>
              <p className="text-gray-700 text-sm">Borrow books seamlessly with our smart borrowing system.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Online Catalog</h3>
              <p className="text-gray-700 text-sm">Browse our digital catalog from any device, anytime.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Admin Tools</h3>
              <p className="text-gray-700 text-sm">Manage users, books, and activity from an intuitive dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen w-full text-white py-16 px-4 pt-40"
        style={{
          backgroundImage: "url('/img/lib1.jpg')",
        }}>
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <i className="fas fa--marker-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-300">Zone 8, Bulan, Sorsogon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+123 456 7890</p>
                  <p className="text-gray-300">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">G3LMS01@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-gray-300 mb-6">If you have any questions or need help, reach out to us!</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Type your message here..."
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition duration-300"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP PROFILES */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">GROUP MEMBERS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/M.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">LLloyd Allan Gimena</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/micahh.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Micah Mae Briones</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/cybelle.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Cybelle Ann Godalla</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/mariane.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Mariane Geraldino</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/patrick.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Patrick Palacio</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/gasid.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Ralph Gasid</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/M.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Joshua Catipon</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-gray-900 text-gray-300 py-16 px-6">
        {/* ...unchanged footer content... */}
      </footer>
    </>
  );
}
