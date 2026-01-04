'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BookingProgress from '../components/BookingProgress';

export default function SearchResultsPage() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  });

  useEffect(() => {
    // Get search params from URL or localStorage
    const params = new URLSearchParams(window.location.search);
    setSearchParams({
      from: params.get('from') || 'Djibouti City',
      to: params.get('to') || 'Addis Ababa',
      date: params.get('date') || new Date(Date.now() + 86400000).toLocaleDateString(),
      passengers: parseInt(params.get('passengers') || '2')
    });
  }, []);

  const availableBuses = [
    {
      id: 1,
      name: 'Express Premium',
      type: 'Premium',
      departure: '06:00 AM',
      arrival: '12:30 PM',
      duration: '6h 30m',
      price: 45,
      seatsAvailable: 18,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom']
    },
    {
      id: 2,
      name: 'City Runner',
      type: 'Standard',
      departure: '07:30 AM',
      arrival: '02:00 PM',
      duration: '6h 30m',
      price: 25,
      seatsAvailable: 8,
      amenities: ['AC', 'Restroom']
    },
    {
      id: 3,
      name: 'Horn of Africa Express',
      type: 'Premium',
      departure: '08:30 AM',
      arrival: '03:00 PM',
      duration: '6h 30m',
      price: 48,
      seatsAvailable: 14,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Entertainment']
    },
    {
      id: 4,
      name: 'Comfort Plus',
      type: 'Standard',
      departure: '09:00 AM',
      arrival: '03:30 PM',
      duration: '6h 30m',
      price: 28,
      seatsAvailable: 22,
      amenities: ['AC', 'Restroom', 'Snacks']
    },
    {
      id: 5,
      name: 'Executive Elite',
      type: 'Executive',
      departure: '10:00 AM',
      arrival: '04:30 PM',
      duration: '6h 30m',
      price: 75,
      seatsAvailable: 4,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Meals', 'Reclining Seats', 'Priority Boarding']
    },
    {
      id: 6,
      name: 'Afternoon Cruiser',
      type: 'Premium',
      departure: '01:00 PM',
      arrival: '07:30 PM',
      duration: '6h 30m',
      price: 42,
      seatsAvailable: 16,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom']
    },
    {
      id: 7,
      name: 'Sunset Express',
      type: 'Standard',
      departure: '03:30 PM',
      arrival: '10:00 PM',
      duration: '6h 30m',
      price: 27,
      seatsAvailable: 11,
      amenities: ['AC', 'Restroom', 'Reading Lights']
    },
    {
      id: 8,
      name: 'VIP Luxury Liner',
      type: 'Executive',
      departure: '05:00 PM',
      arrival: '11:30 PM',
      duration: '6h 30m',
      price: 85,
      seatsAvailable: 6,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Meals', 'Reclining Seats', 'Personal TV', 'Priority Boarding']
    },
    {
      id: 9,
      name: 'Evening Express',
      type: 'Premium',
      departure: '06:30 PM',
      arrival: '01:00 AM',
      duration: '6h 30m',
      price: 46,
      seatsAvailable: 9,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Blankets']
    },
    {
      id: 10,
      name: 'Night Owl Sleeper',
      type: 'Premium',
      departure: '09:00 PM',
      arrival: '03:30 AM',
      duration: '6h 30m',
      price: 55,
      seatsAvailable: 20,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Sleeper Beds', 'Pillow & Blanket']
    },
    {
      id: 11,
      name: 'Midnight Express',
      type: 'Standard',
      departure: '11:00 PM',
      arrival: '05:30 AM',
      duration: '6h 30m',
      price: 22,
      seatsAvailable: 25,
      amenities: ['AC', 'Restroom', 'Quiet Zone']
    },
    {
      id: 12,
      name: 'Royal Business Class',
      type: 'Executive',
      departure: '11:30 AM',
      arrival: '06:00 PM',
      duration: '6h 30m',
      price: 90,
      seatsAvailable: 3,
      amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'Restroom', 'Gourmet Meals', 'Reclining Seats', 'Personal TV', 'Priority Boarding', 'Luggage Service']
    }
  ];

  const [selectedBusDetails, setSelectedBusDetails] = useState<any>(null);

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
            <Link href="/" className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition">
              GoTransit
            </Link>
            <Link
              href="/booking"
              className="bg-accent-200 text-primary-700 px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-accent-300 transition text-sm md:text-base"
            >
              ← New Search
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">Available Buses</h1>
            <p className="text-base sm:text-xl text-gray-600 px-4">
              Found {availableBuses.length} buses for your journey
            </p>
          </motion.div>

          {/* Booking Progress */}
          <BookingProgress currentStep={1} />

          {/* Search Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Your Journey</h3>
                <div className="text-sm md:text-base text-gray-600">
                  <span className="font-semibold">{searchParams.from}</span> → <span className="font-semibold">{searchParams.to}</span>
                  <span className="ml-4">📅 {searchParams.date}</span>
                  <span className="ml-4">👥 {searchParams.passengers} passenger(s)</span>
                </div>
              </div>
              <Link href="/booking">
                <button className="w-full md:w-auto text-primary-600 hover:text-primary-700 font-semibold border-2 border-primary-600 rounded-lg px-6 py-2 hover:bg-primary-50 transition">
                  Modify Search
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Bus Results */}
          <div className="space-y-4 md:space-y-6">
            {availableBuses.map((bus, index) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Bus Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">{bus.name}</h4>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                          bus.type === 'Executive' ? 'bg-purple-100 text-purple-700' :
                          bus.type === 'Premium' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {bus.type}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl md:text-2xl font-bold text-primary-700">${bus.price}</div>
                        <div className="text-xs text-gray-500">per person</div>
                      </div>
                    </div>

                    {/* Time Info */}
                    <div className="flex items-center space-x-2 md:space-x-4 mb-3">
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{bus.departure}</div>
                        <div className="text-xs text-gray-500">Departure</div>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                          {bus.duration}
                        </span>
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{bus.arrival}</div>
                        <div className="text-xs text-gray-500">Arrival</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {bus.amenities.slice(0, 4).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {bus.amenities.length > 4 && (
                        <span className="text-xs text-gray-500">+{bus.amenities.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex lg:flex-col justify-between lg:justify-center items-center lg:border-l border-gray-200 lg:pl-6">
                    <div className="text-center">
                      <div className={`text-2xl md:text-3xl font-bold ${
                        bus.seatsAvailable > 10 ? 'text-success-600' :
                        bus.seatsAvailable > 5 ? 'text-warning-600' :
                        'text-red-600'
                      }`}>
                        {bus.seatsAvailable}
                      </div>
                      <div className="text-xs text-gray-500">Seats Available</div>
                    </div>
                    {bus.seatsAvailable < 10 && (
                      <div className="text-xs text-red-600 font-semibold animate-pulse">
                        ⚠️ Filling Fast!
                      </div>
                    )}
                  </div>

                  {/* Book Button */}
                  <div className="flex flex-col gap-2 justify-center">
                    <Link href="/seats" className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 md:px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-sm md:text-base"
                      >
                        Select Seats
                      </motion.button>
                    </Link>
                    <button 
                      onClick={() => setSelectedBusDetails(bus)}
                      className="w-full text-primary-600 hover:text-primary-700 text-sm font-semibold py-2"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bus Details Modal (reuse from booking page) */}
          {selectedBusDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedBusDetails(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6 rounded-t-3xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedBusDetails.name}</h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedBusDetails.type === 'Executive' ? 'bg-purple-500' :
                        selectedBusDetails.type === 'Premium' ? 'bg-blue-500' :
                        'bg-gray-500'
                      }`}>
                        {selectedBusDetails.type}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedBusDetails(null)}
                      className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 space-y-6">
                  {/* Journey Info */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Journey Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Departure</div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{selectedBusDetails.departure}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Arrival</div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{selectedBusDetails.arrival}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{selectedBusDetails.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Price</div>
                        <div className="text-base md:text-lg font-bold text-primary-600">${selectedBusDetails.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Available Seats</div>
                        <div className={`text-base md:text-lg font-bold ${
                          selectedBusDetails.seatsAvailable > 10 ? 'text-success-600' :
                          selectedBusDetails.seatsAvailable > 5 ? 'text-warning-600' :
                          'text-red-600'
                        }`}>
                          {selectedBusDetails.seatsAvailable}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Bus Type</div>
                        <div className="text-base md:text-lg font-bold text-gray-900">{selectedBusDetails.type}</div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Onboard Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedBusDetails.amenities.map((amenity: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 bg-primary-50 rounded-lg p-3">
                          <span className="text-primary-600">✓</span>
                          <span className="text-sm font-semibold text-gray-900">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/seats" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                      >
                        Select Seats
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBusDetails(null)}
                      className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

