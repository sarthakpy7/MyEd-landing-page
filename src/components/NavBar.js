// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-extrabold text-blue-700 tracking-tight">MyEd</div>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-blue-700 transition duration-300">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-700 transition duration-300">Pricing</a></li>
          <li><a href="#about" className="hover:text-blue-700 transition duration-300">About Us</a></li>
          <li>
            <button className="bg-blue-700 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-800 transition duration-300 shadow-md">
              Get Demo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-28 pb-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          A Bridge to <span className="text-blue-700">Holistic Learning</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          AI-powered SaaS to automate school admin tasks, enabling teachers to focus on education and parents to stay engaged.
        </p>
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">For Teachers &amp; Parents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-lg bg-blue-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Teachers</h3>
            <p className="text-gray-600">
              AI-driven SaaS streamlines teachers' daily tasks, empowering them to prioritize education.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-blue-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Parents</h3>
            <p className="text-gray-600">
              Stay connected with your child’s progress and get regular updates seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Get Ready to Board the Rocket!
        </h2>
        <form className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="1234567890"
              pattern="\d{10}"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export { NavBar, HeroSection, FeatureSection, ContactForm };
