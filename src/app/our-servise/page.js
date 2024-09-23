import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function page() {
    return (
        <div className='overflow-auto scrollbar-hide'>
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Our Services</h1>
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

            <main className="bg-gray-100">
                {/* Services Overview Section */}
                <section className="py-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">We Make Your Events Unforgettable</h2>
                        <p className="mb-8">
                            At Creatorz Events, we offer a full range of event services, from planning and catering to venue selection and decoration. Let us take care of every detail so you can focus on enjoying your special day.
                        </p>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-8 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8">Our Service Offerings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Event Planning Service */}
                            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
                                <img
                                    src="https://thecreatorzevents.com/wp-content/uploads/elementor/thumbs/20210728_193850-scaled-pvb1qcb8fxtubibrd6jo9pd2kcrrbg4793rp7es8qe.jpg"
                                    alt="Event Planning"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Event Planning</h3>
                                <p>
                                    Comprehensive planning for corporate events, weddings, and special celebrations. We handle everything from concept to execution, ensuring your event is flawless.
                                </p>
                            </div>

                            {/* Catering Service */}
                            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
                                <img
                                    src="https://thecreatorzevents.com/wp-content/uploads/elementor/thumbs/cvr_3718_52861-pxag6al9j7bo8e9uv96jd88y0hha7e7x1dp420t722.jpg"
                                    alt="Catering Services"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Catering Services</h3>
                                <p>
                                    Delicious, customizable catering services that match the theme and atmosphere of your event. We offer a variety of cuisines to suit your needs.
                                </p>
                            </div>

                            {/* Venue Selection Service */}
                            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
                                <img
                                    src="https://thecreatorzevents.com/wp-content/uploads/elementor/thumbs/6-1-scaled-pvqz5sqffzsn09firfqkuceu21icre5mijcydvzem8.jpg"
                                    alt="Venue Selection"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Venue Selection</h3>
                                <p>
                                    Our team will help you find the perfect venue for your event, ensuring it aligns with your vision and budget. From intimate gatherings to large-scale events, we’ve got you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-8 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="mb-8">We take pride in creating memorable events. Here’s what our clients have to say:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <p className="italic">
                                    "Creatorz Events made our wedding day perfect. They were professional, organized, and made the entire process stress-free. I highly recommend their services!" {/* eslint-disable-line react/no-unescaped-entities */}
                                </p>
                                <p className="mt-4 font-bold">– Sarah & John</p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <p className="italic">
                                    "We used Creatorz Events for our corporate gala, and they exceeded our expectations. From the décor to the catering, everything was top-notch."{/* eslint-disable-line react/no-unescaped-entities */}
                                </p>
                                <p className="mt-4 font-bold">– Corporate Client</p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <p className="italic">
                                    "Their attention to detail was incredible. The venue they chose for our anniversary celebration was perfect, and the food was amazing!"{/* eslint-disable-line react/no-unescaped-entities */}
                                </p>
                                <p className="mt-4 font-bold">– Emily & Mark</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        <Footer/>
        </div>
    )
}

export default page



