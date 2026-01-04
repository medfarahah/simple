'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import BookingProgress from '../components/BookingProgress';

export default function BookingPage() {
  const [showResults, setShowResults] = useState(false);
  const [selectedBusDetails, setSelectedBusDetails] = useState<any>(null);
  const [searchData, setSearchData] = useState({
    from: 'djibouti-city',
    to: 'addis-ababa',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    time: 'morning',
    passengers: 2
  });
  const [passengerData, setPassengerData] = useState({
    fullName: 'Ahmed Hassan Mohamed',
    email: 'ahmed.hassan@example.com',
    phone: '+253 77 123 456',
    idNumber: 'DJ123456789'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search results page with params
    const params = new URLSearchParams({
      from: searchData.from,
      to: searchData.to,
      date: searchData.date,
      time: searchData.time,
      passengers: searchData.passengers.toString()
    });
    window.location.href = `/search-results?${params.toString()}`;
  };

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-accent-50 to-accent-100">
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
              <Link href="/#services" className="text-gray-700 hover:text-primary-600 transition">Services</Link>
              <Link href="/#about" className="text-gray-700 hover:text-primary-600 transition">About</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</Link>
            </div>
            <Link
              href="/"
              className="bg-accent-200 text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-accent-300 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Booking Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 px-4">Book Your Ticket</h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Quick and easy booking in just a few clicks
            </p>
          </motion.div>

          {/* Booking Progress Animation */}
          <BookingProgress currentStep={1} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12"
          >
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From */}
                <div>
                  <label className="block text-white font-semibold mb-2">From</label>
                  <select 
                    required
                    value={searchData.from}
                    onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm">
                    <option value="">Select Origin</option>
                    <optgroup label="Local Routes">
                      <option value="downtown">Downtown</option>
                      <option value="airport">Airport</option>
                      <option value="central">Central Station</option>
                      <option value="business">Business District</option>
                      <option value="north">North Side</option>
                      <option value="south">South Side</option>
                      <option value="university">University</option>
                      <option value="shopping">Shopping Center</option>
                    </optgroup>
                    <optgroup label="Djibouti">
                      <option value="djibouti-city">Djibouti City</option>
                      <option value="ali-sabieh">Ali Sabieh</option>
                      <option value="tadjourah">Tadjourah</option>
                      <option value="obock">Obock</option>
                      <option value="dikhil">Dikhil</option>
                    </optgroup>
                    <optgroup label="Ethiopia">
                      <option value="addis-ababa">Addis Ababa</option>
                      <option value="dire-dawa">Dire Dawa</option>
                      <option value="mekele">Mekele</option>
                      <option value="gondar">Gondar</option>
                      <option value="bahir-dar">Bahir Dar</option>
                      <option value="hawassa">Hawassa</option>
                      <option value="awasa">Awasa</option>
                      <option value="jigjiga">Jigjiga</option>
                    </optgroup>
                  </select>
                </div>

                {/* To */}
                <div>
                  <label className="block text-white font-semibold mb-2">To</label>
                  <select 
                    required
                    value={searchData.to}
                    onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm">
                    <option value="">Select Destination</option>
                    <optgroup label="Local Routes">
                      <option value="downtown">Downtown</option>
                      <option value="airport">Airport</option>
                      <option value="central">Central Station</option>
                      <option value="business">Business District</option>
                      <option value="north">North Side</option>
                      <option value="south">South Side</option>
                      <option value="university">University</option>
                      <option value="shopping">Shopping Center</option>
                    </optgroup>
                    <optgroup label="Djibouti">
                      <option value="djibouti-city">Djibouti City</option>
                      <option value="ali-sabieh">Ali Sabieh</option>
                      <option value="tadjourah">Tadjourah</option>
                      <option value="obock">Obock</option>
                      <option value="dikhil">Dikhil</option>
                    </optgroup>
                    <optgroup label="Ethiopia">
                      <option value="addis-ababa">Addis Ababa</option>
                      <option value="dire-dawa">Dire Dawa</option>
                      <option value="mekele">Mekele</option>
                      <option value="gondar">Gondar</option>
                      <option value="bahir-dar">Bahir Dar</option>
                      <option value="hawassa">Hawassa</option>
                      <option value="awasa">Awasa</option>
                      <option value="jigjiga">Jigjiga</option>
                    </optgroup>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-white font-semibold mb-2">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time</label>
                  <select 
                    value={searchData.time}
                    onChange={(e) => setSearchData({...searchData, time: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm">
                    <option value="">Select Time</option>
                    <option value="morning">Morning (6:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 6:00 PM)</option>
                    <option value="evening">Evening (6:00 PM - 12:00 AM)</option>
                  </select>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-white font-semibold mb-2">Number of Passengers</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Ticket Type */}
                <div>
                  <label className="block text-white font-semibold mb-2">Ticket Type</label>
                  <select className="w-full px-4 py-3 text-base rounded-lg bg-white/10 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm">
                    <option value="standard">Standard - $25</option>
                    <option value="premium">Premium - $45</option>
                    <option value="executive">Executive - $75</option>
                  </select>
                </div>
              </div>

              {/* Passenger Details */}
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Passenger Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        value={passengerData.fullName}
                        onChange={(e) => setPassengerData({...passengerData, fullName: e.target.value})}
                        placeholder="Ahmed Hassan"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        value={passengerData.email}
                        onChange={(e) => setPassengerData({...passengerData, email: e.target.value})}
                        placeholder="ahmed.hassan@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={passengerData.phone}
                      onChange={(e) => setPassengerData({...passengerData, phone: e.target.value})}
                      placeholder="+253 77 123 456"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">ID Number</label>
                    <input
                      type="text"
                      value={passengerData.idNumber}
                      onChange={(e) => setPassengerData({...passengerData, idNumber: e.target.value})}
                      placeholder="ID or Passport Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent-400 to-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:from-accent-500 hover:to-accent-600 transition-all mt-6"
              >
                Search Available Buses
              </motion.button>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl mb-2">💳</div>
                  <div className="text-sm text-white/90 font-semibold">Secure Payment</div>
                  <div className="text-xs text-white/70">SSL Encrypted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎫</div>
                  <div className="text-sm text-white/90 font-semibold">Instant Confirmation</div>
                  <div className="text-xs text-white/70">Email & SMS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="text-sm text-white/90 font-semibold">Easy Cancellation</div>
                  <div className="text-xs text-white/70">24/7 Support</div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Why Book With Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Book With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: '✓', title: 'Best Prices', desc: 'Guaranteed lowest fares' },
                { icon: '✓', title: 'Safe Travel', desc: 'Sanitized & GPS tracked' },
                { icon: '✓', title: '24/7 Support', desc: 'Always here to help' },
                { icon: '✓', title: 'Easy Refunds', desc: 'Hassle-free process' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Available Buses Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mt-12"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Available Buses ({availableBuses.length} buses found)
                  </h3>
                  <button
                    onClick={() => setShowResults(false)}
                    className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
                  >
                    ← New Search
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {searchData.from && searchData.to && (
                    <p>Route: <span className="font-semibold capitalize">{searchData.from.replace(/-/g, ' ')}</span> → <span className="font-semibold capitalize">{searchData.to.replace(/-/g, ' ')}</span></p>
                  )}
                  {searchData.date && (
                    <p>Date: <span className="font-semibold">{new Date(searchData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> | Passengers: <span className="font-semibold">{searchData.passengers}</span></p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {availableBuses.map((bus, index) => (
                  <motion.div
                    key={bus.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* Bus Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{bus.name}</h4>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                              bus.type === 'Executive' ? 'bg-purple-100 text-purple-700' :
                              bus.type === 'Premium' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {bus.type}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-700">${bus.price}</div>
                            <div className="text-xs text-gray-500">per person</div>
                          </div>
                        </div>

                        {/* Time Info */}
                        <div className="flex items-center space-x-4 mb-3">
                          <div>
                            <div className="text-lg font-bold text-gray-900">{bus.departure}</div>
                            <div className="text-xs text-gray-500">Departure</div>
                          </div>
                          <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                              {bus.duration}
                            </span>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">{bus.arrival}</div>
                            <div className="text-xs text-gray-500">Arrival</div>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2">
                          {bus.amenities.map((amenity, idx) => (
                            <span key={idx} className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="flex flex-col justify-center items-center border-l border-gray-200 pl-6">
                        <div className="text-center mb-2">
                          <div className={`text-3xl font-bold ${
                            bus.seatsAvailable > 10 ? 'text-green-600' :
                            bus.seatsAvailable > 5 ? 'text-orange-600' :
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
                      <div className="flex flex-col justify-center">
                        <Link href="/seats">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all w-full mb-2"
                          >
                            Select Seats
                          </motion.button>
                        </Link>
                        <button 
                          onClick={() => setSelectedBusDetails(bus)}
                          className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No buses message (optional) */}
              {availableBuses.length === 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">😔</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No Buses Available</h3>
                  <p className="text-gray-600 mb-6">
                    Sorry, no buses are available for your selected route and date.
                  </p>
                  <button
                    onClick={() => setShowResults(false)}
                    className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition"
                  >
                    Try Another Search
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Bus Details Modal */}
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
                      <h2 className="text-3xl font-bold mb-2">{selectedBusDetails.name}</h2>
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
                <div className="p-6 space-y-6">
                  {/* Journey Info */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Journey Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Departure</div>
                        <div className="text-lg font-bold text-gray-900">{selectedBusDetails.departure}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Arrival</div>
                        <div className="text-lg font-bold text-gray-900">{selectedBusDetails.arrival}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="text-lg font-bold text-gray-900">{selectedBusDetails.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Price</div>
                        <div className="text-lg font-bold text-primary-600">${selectedBusDetails.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Available Seats</div>
                        <div className={`text-lg font-bold ${
                          selectedBusDetails.seatsAvailable > 10 ? 'text-success-600' :
                          selectedBusDetails.seatsAvailable > 5 ? 'text-warning-600' :
                          'text-red-600'
                        }`}>
                          {selectedBusDetails.seatsAvailable}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Bus Type</div>
                        <div className="text-lg font-bold text-gray-900">{selectedBusDetails.type}</div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Onboard Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedBusDetails.amenities.map((amenity: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 bg-primary-50 rounded-lg p-3">
                          <span className="text-primary-600">✓</span>
                          <span className="text-sm font-semibold text-gray-900">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Policies */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Policies & Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-success-600 text-xs">✓</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Luggage Allowance</div>
                          <div className="text-sm text-gray-600">1 cabin bag (7kg) + 2 check-in bags (20kg each)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-success-600 text-xs">✓</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Cancellation</div>
                          <div className="text-sm text-gray-600">Free cancellation up to 24 hours before departure</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-success-600 text-xs">✓</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Check-in Time</div>
                          <div className="text-sm text-gray-600">Please arrive 30 minutes before departure</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-success-600 text-xs">✓</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Safety Standards</div>
                          <div className="text-sm text-gray-600">GPS tracking, CCTV cameras, sanitized regularly</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Passenger Reviews</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                            {'★★★★★'.split('').map((star, i) => (
                              <span key={i}>{star}</span>
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">5.0</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">"Excellent service! Very comfortable journey and punctual."</p>
                        <div className="text-xs text-gray-500">- Ahmed M. • 2 days ago</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                            {'★★★★☆'.split('').map((star, i) => (
                              <span key={i}>{star}</span>
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">4.0</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">"Good bus with nice amenities. Would recommend!"</p>
                        <div className="text-xs text-gray-500">- Sara K. • 1 week ago</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
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

