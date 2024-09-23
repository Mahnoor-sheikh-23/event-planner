"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from './Footer';

function Main() {
    const router = useRouter()
    const handleContact = ()=>{
        router.push("/contact")
    }
    return (
        <div className="overflow-x-hidden">
        <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Creatorz Events</h1>
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
  
        {/* Hero Section */}
        <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://thecreatorzevents.com/wp-content/uploads/2022/10/FRA02667ghh-scaled.jpg')" }}>
          <div className="text-center text-black">
            <h2 className="text-4xl font-bold">Welcome to Creatorz Events</h2>
            <p className="text-xl mt-4">We create unforgettable event experiences.</p>
            <button className="mt-6 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <img src="https://thecreatorzevents.com/wp-content/uploads/2022/10/5-1-scaled.jpg" alt="Wedding Planning" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Wedding Planning</h3>
                <p>We design and coordinate the perfect wedding experience.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <img src="https://thecreatorzevents.com/wp-content/uploads/2022/10/87030741_2525839960963870_3005001128803827712_o-Copy.jpg" alt="Corporate Events" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                <p>Delivering seamless corporate events and conferences.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <img src="https://thestationers.pk/cdn/shop/collections/71TlRjhBE-L._AC_SL1001_ec1516f3-d7bf-406f-b3dd-7883242cb35c.jpg?v=1692365338" alt="Birthday Parties" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Birthday Parties</h3>
                <p>Memorable birthday celebrations tailored to your wishes.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Gallery Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src="https://thecreatorzevents.com/wp-content/uploads/2022/10/275046418_3118847874996406_7100909238520807198_n.jpg" alt="Event 1" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://thecreatorzevents.com/wp-content/uploads/2022/10/274996239_3118846284996565_3983678870154464812_n-1.jpg" alt="Event 2" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://thecreatorzevents.com/wp-content/uploads/2022/10/IMG_4141-scaled.jpg" alt="Event 3" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="italic">"The wedding was magical, thanks to Creatorz Events!" {/* eslint-disable-line react/no-unescaped-entities */}</p>
                <p className="font-bold mt-4">- Sarah J.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="italic">"Our corporate retreat was a great success. Highly recommended!" {/* eslint-disable-line react/no-unescaped-entities */}</p>
                <p className="font-bold mt-4">- Michael B.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="italic">"They organized the best birthday party I've ever had." {/* eslint-disable-line react/no-unescaped-entities */}</p>
                <p className="font-bold mt-4">- Emily K.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="h-64 bg-blue-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Plan Your Event? {/* eslint-disable-line react/no-unescaped-entities */}</h2>
            <p className="mt-4">Let’s make it unforgettable together! {/* eslint-disable-line react/no-unescaped-entities */}</p>
            <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition" onClick={handleContact}>
            <Link href="/contact">
            Contact Us
            </Link>
            </button>
          </div>
        </section>
  
       {/* <Footer/> */}
      </div>
    )
}

export default Main








