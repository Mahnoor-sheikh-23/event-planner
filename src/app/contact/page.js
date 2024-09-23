import React from 'react'
import Link from 'next/link';
import Footer from '../components/Footer';

function page() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <nav className="mt-4">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/our-servise">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="bg-gray-100 py-8">
          <div className="container mx-auto">
            {/* Contact Info Section */}
            <section className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-8">
                Have any questions or need more information about our services? Feel free to reach out!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Our Address</h3>
                  <p>123 Event Lane, CityName, Country</p>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <p>+123 456 7890</p>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p>info@creatorzevents.com {/* eslint-disable-line react/no-unescaped-entities */}</p>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-center text-2xl font-bold mb-8">Send Us A Message</h2>
              <form className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md font-bold hover:bg-indigo-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>

            {/* Map Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Visit Us</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509768!2d144.95373631531795!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c98a6ee2e33!2s123%20Event%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1617265156356!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-64 rounded-lg"
              ></iframe>
            </div>

          </div>
        </main>

      </div>
      <Footer/>.
    </div>
  )
}

export default page



