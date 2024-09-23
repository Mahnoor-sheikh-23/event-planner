import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function page() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">About Creatorz Events</h1>
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
              <Link href="/contact">
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2">
              <img src="https://media.istockphoto.com/id/1340256496/photo/shot-of-a-young-woman-decorating-a-table-with-place-card-holders-in-preparation-for-a-wedding.jpg?s=612x612&w=0&k=20&c=gBQHa3_HywGsZv4MYRfvMpWAsgLLUkQvyMbG-lHBOSo=" alt="Company History" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <p className="text-lg">
                Creatorz Events was founded in 2010 with the mission to create extraordinary events for our clients. From weddings to corporate events, we have a long history of delivering beautiful and well-organized experiences. With over a decade of experience, we continue to innovate and elevate the event planning industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                Our mission is to craft experiences that leave a lasting impression on everyone involved. We believe in creating events that are not only visually stunning but also seamless and stress-free for our clients.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-lg">
                We value creativity, attention to detail, and client satisfaction above all else. Our team is committed to working closely with clients to ensure that their vision comes to life in the most beautiful and thoughtful way possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuUwExMndJ0IioFnec42P_uyo-kr6LJ3LAA&s" alt="Team Member 1" className="rounded-lg w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Emily Johnson</h3>
              <p className="mt-2">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zDmSQAph-VgTq_WNzSRFqdQ8dTAV-n6EoA&s" alt="Team Member 2" className="rounded-lg w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Michael Brown</h3>
              <p className="mt-2">Head Event Planner</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhKK-HDv9LUy5TauacpkJ7SVt9QpSITupBA&s" alt="Team Member 3" className="rounded-lg w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Sarah Lee</h3>
              <p className="mt-2">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="h-64 bg-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Plan Your Event?</h2>
          <p className="mt-4">Let’s make it unforgettable together!</p>
          <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contact Us</button>
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default page


