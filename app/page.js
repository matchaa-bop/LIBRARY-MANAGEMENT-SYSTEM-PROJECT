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
                <div className="backdrop-blur-md bg-black/60 rounded-2xl px-8 py-6 mb-6 shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow">
          Welcome to our Library
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-2 mt-3 leading-relaxed text-gray-100 drop-shadow">
          Our Library lets users browse, borrow, and view books easily.
          It&apos;s designed to make library access simple, fast, and well-organized.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/admin"
          className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl px-8 py-4 font-semibold text-lg text-yellow-400 hover:bg-white/20 hover:text-yellow-500 transition-all duration-200"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          Admin Panel Test ➤
        </Link>
        <Link
       href="/library"
         className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl px-8 py-4 font-semibold text-lg text-blue-300 hover:bg-white/20 hover:text-blue-400 transition-all duration-200"
         style={{
         boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255,255,255,0.18)",
         }}
        >
        Library for Users Test ➤
        </Link>
        </div>
        </div>
      </section>

      {/* ABOUT */}
            <section className="min-h-screen w-full bg-gray-900 py-24 px-4 md:px-16 lg:px-32 text-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 pt-10">About Our Library System</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Our Library Management System is crafted to enhance the efficiency and user-friendliness of managing books, patrons, and borrowing processes. Whether you are an administrator or a library member, our platform provides a seamless and intelligent experience.
            </p>
            <p className="text-xl md:text-2xl text-yellow-200">
              Featuring automated workflows, real-time inventory management, and a user-friendly dashboard, we are revolutionizing library operations for the modern era.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-lg w-[480px] h-[320px] flex items-center justify-center bg-gray-800">
              <Image
                src="/img/books.jpg"
                alt="Library system preview"
                width={480}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
        <p className="text-lg md:text-2xl text-gray-200 mb-14 max-w-2xl mx-auto">
          Discover what our library system offers to simplify borrowing, tracking, and managing books efficiently.
        </p>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-3">Book Borrowing</h3>
          <p className="text-white text-base">Borrow books seamlessly with our smart borrowing system.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-3">Online Catalog</h3>
          <p className="text-white text-base">Browse our digital catalog from any device, anytime.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Admin Tools</h3>
          <p className="text-white text-base">Manage users, books, and activity from an intuitive dashboard.</p>
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
              <Image src="/img/lloyd.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
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
