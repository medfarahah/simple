'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import BookingProgress from '../components/BookingProgress';

export default function SeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const bookedSeats = [2, 5, 8, 12, 15, 18, 23, 27, 31, 35]; // Already booked seats
  const totalSeats = 40;

  const busInfo = {
    name: 'Express Premium',
    type: 'Premium',
    route: 'Djibouti City → Addis Ababa',
    date: new Date(Date.now() + 86400000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    departure: '08:00 AM',
    arrival: '02:30 PM',
    price: 45
  };

  const toggleSeat = (seatNumber: number) => {
    if (bookedSeats.includes(seatNumber)) return; // Can't select booked seats
    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const getSeatStatus = (seatNumber: number) => {
    if (bookedSeats.includes(seatNumber)) return 'booked';
    if (selectedSeats.includes(seatNumber)) return 'selected';
    return 'available';
  };

  const getSeatColor = (seatNumber: number) => {
    const status = getSeatStatus(seatNumber);
    switch (status) {
      case 'booked':
        return 'bg-gray-400 cursor-not-allowed';
      case 'selected':
        return 'bg-gradient-to-br from-accent-500 to-accent-600 text-white cursor-pointer shadow-lg';
      default:
        return 'bg-white border-2 border-gray-300 hover:border-primary-500 hover:bg-primary-50 cursor-pointer';
    }
  };

  const totalPrice = selectedSeats.length * busInfo.price;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition">
              GoTransit
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition">Home</Link>
              <Link href="/booking" className="text-gray-700 hover:text-primary-600 transition">Book Now</Link>
              <Link href="/#services" className="text-gray-700 hover:text-primary-600 transition">Services</Link>
            </div>
            <Link
              href="/booking"
              className="bg-accent-200 text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-accent-300 transition"
            >
              ← Back to Search
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">Select Your Seats</h1>
            <p className="text-base sm:text-xl text-gray-600 px-4">Choose your preferred seats on the bus</p>
          </motion.div>

          {/* Booking Progress Animation */}
          <BookingProgress currentStep={2} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seat Layout */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8">
                {/* Bus Info Header */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{busInfo.name}</h3>
                  <p className="text-gray-600">{busInfo.route}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>📅 {busInfo.date}</span>
                    <span>🕐 {busInfo.departure}</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded"></div>
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded"></div>
                    <span className="text-sm text-gray-600">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded"></div>
                    <span className="text-sm text-gray-600">Booked</span>
                  </div>
                </div>

                {/* Bus Layout */}
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-6">
                  {/* Driver */}
                  <div className="flex justify-end mb-6">
                    <div className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                      🚗 Driver
                    </div>
                  </div>

                  {/* Seats Grid */}
                  <div className="space-y-4">
                    {[...Array(10)].map((_, rowIndex) => (
                      <div key={rowIndex} className="flex justify-center gap-4">
                        {/* Left side - 2 seats */}
                        <div className="flex gap-2">
                          {[1, 2].map((col) => {
                            const seatNumber = rowIndex * 4 + col;
                            return (
                              <motion.button
                                key={seatNumber}
                                whileHover={{ scale: getSeatStatus(seatNumber) !== 'booked' ? 1.1 : 1 }}
                                whileTap={{ scale: getSeatStatus(seatNumber) !== 'booked' ? 0.95 : 1 }}
                                onClick={() => toggleSeat(seatNumber)}
                                className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all ${getSeatColor(seatNumber)}`}
                                disabled={bookedSeats.includes(seatNumber)}
                              >
                                {seatNumber}
                              </motion.button>
                            );
                          })}
                        </div>

                        {/* Aisle */}
                        <div className="w-8"></div>

                        {/* Right side - 2 seats */}
                        <div className="flex gap-2">
                          {[3, 4].map((col) => {
                            const seatNumber = rowIndex * 4 + col;
                            return (
                              <motion.button
                                key={seatNumber}
                                whileHover={{ scale: getSeatStatus(seatNumber) !== 'booked' ? 1.1 : 1 }}
                                whileTap={{ scale: getSeatStatus(seatNumber) !== 'booked' ? 0.95 : 1 }}
                                onClick={() => toggleSeat(seatNumber)}
                                className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all ${getSeatColor(seatNumber)}`}
                                disabled={bookedSeats.includes(seatNumber)}
                              >
                                {seatNumber}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Back Row Label */}
                  <div className="text-center mt-6 text-sm text-gray-600 font-semibold">
                    ← Front | Back →
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h3>

                {/* Selected Seats */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Selected Seats</div>
                  {selectedSeats.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedSeats.sort((a, b) => a - b).map((seat) => (
                        <span
                          key={seat}
                          className="bg-gradient-to-br from-accent-500 to-accent-600 text-white px-3 py-1 rounded-lg font-semibold text-sm"
                        >
                          #{seat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">No seats selected</p>
                  )}
                </div>

                {/* Journey Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bus Type</span>
                    <span className="font-semibold text-gray-900">{busInfo.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Number of Seats</span>
                    <span className="font-semibold text-gray-900">{selectedSeats.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price per Seat</span>
                    <span className="font-semibold text-gray-900">${busInfo.price}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-6">
                  <div className="flex justify-between items-center bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-4">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-3xl font-bold text-primary-700">${totalPrice}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href={selectedSeats.length > 0 ? '/payment' : '#'}>
                    <motion.button
                      whileHover={{ scale: selectedSeats.length > 0 ? 1.02 : 1 }}
                      whileTap={{ scale: selectedSeats.length > 0 ? 0.98 : 1 }}
                      disabled={selectedSeats.length === 0}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedSeats.length > 0
                          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-xl hover:shadow-2xl hover:from-accent-600 hover:to-accent-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Proceed to Payment
                    </motion.button>
                  </Link>
                  <Link href="/booking">
                    <button className="w-full py-3 rounded-xl font-semibold text-primary-600 border-2 border-primary-600 hover:bg-primary-50 transition-all">
                      Change Bus
                    </button>
                  </Link>
                </div>

                {/* Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-xs text-blue-900">
                    💡 <span className="font-semibold">Tip:</span> Front seats offer better views, while back seats provide more legroom.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: '✓', title: 'Instant Confirmation', desc: 'Get your ticket immediately' },
              { icon: '✓', title: 'Flexible Booking', desc: 'Change seats before payment' },
              { icon: '✓', title: 'Secure Payment', desc: 'SSL encrypted transactions' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center text-success-600 font-bold text-xl mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

