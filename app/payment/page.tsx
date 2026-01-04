'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import BookingProgress from '../components/BookingProgress';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const bookingDetails = {
    busName: 'Express Premium',
    busType: 'Premium',
    route: 'Djibouti City → Addis Ababa',
    date: new Date(Date.now() + 86400000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    departure: '08:00 AM',
    arrival: '02:30 PM',
    duration: '6h 30m',
    selectedSeats: [3, 4, 7],
    pricePerSeat: 45,
    passengerName: 'Ahmed Hassan Mohamed',
    passengerEmail: 'ahmed.hassan@example.com',
    passengerPhone: '+253 77 123 456'
  };

  const subtotal = bookingDetails.selectedSeats.length * bookingDetails.pricePerSeat;
  const serviceFee = 5;
  const tax = subtotal * 0.05;
  const total = subtotal + serviceFee + tax;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setBookingComplete(true);
    }, 3000);
  };

  if (bookingComplete) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-success-50 via-green-50 to-emerald-50 p-4 pt-20">
        <div className="max-w-4xl mx-auto mb-12">
          <BookingProgress currentStep={4} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your tickets have been booked successfully
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 text-left">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <span className="text-gray-600">Booking Reference</span>
              <span className="font-bold text-2xl text-primary-600">EB-{Math.floor(Math.random() * 1000000)}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Passenger</span>
                <span className="font-semibold text-gray-900">{bookingDetails.passengerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Route</span>
                <span className="font-semibold text-gray-900">{bookingDetails.route}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">{bookingDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Seats</span>
                <span className="font-semibold text-gray-900">{bookingDetails.selectedSeats.join(', ')}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-600">Total Paid</span>
                <span className="font-bold text-xl text-success-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-left">
            <p className="text-sm text-blue-900">
              📧 A confirmation email with your e-ticket has been sent to <span className="font-semibold">{bookingDetails.passengerEmail}</span>
            </p>
          </div>

          {/* Journey Animation */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Your Journey Path</h3>
            
            {/* Journey Map */}
            <div className="relative">
              {/* Route Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-primary-600 to-success-600"
                />
              </div>

              {/* Animated Bus */}
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className="absolute top-0 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="text-4xl"
                >
                  🚌
                </motion.div>
              </motion.div>

              {/* Stops */}
              <div className="relative flex justify-between pt-16 pb-4">
                {/* Start Point */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-4 h-4 bg-primary-600 rounded-full mb-2"></div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-sm">Djibouti City</div>
                    <div className="text-xs text-gray-600">08:00 AM</div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-2 bg-success-100 text-success-700 text-xs px-2 py-1 rounded-full"
                    >
                      ✓ Checked In
                    </motion.div>
                  </div>
                </motion.div>

                {/* Stop 1 */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 bg-warning-500 rounded-full mb-2"></div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-xs">Ali Sabieh</div>
                    <div className="text-xs text-gray-600">10:30 AM</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="mt-2 text-xs text-gray-600"
                    >
                      🍽️ Rest Stop
                    </motion.div>
                  </div>
                </motion.div>

                {/* Border Crossing */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 bg-accent-500 rounded-full mb-2"></div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-xs">Border</div>
                    <div className="text-xs text-gray-600">11:45 AM</div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 }}
                      className="mt-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      🛂 Visa OK
                    </motion.div>
                  </div>
                </motion.div>

                {/* Stop 2 */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 bg-warning-500 rounded-full mb-2"></div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-xs">Dire Dawa</div>
                    <div className="text-xs text-gray-600">01:00 PM</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                      className="mt-2 text-xs text-gray-600"
                    >
                      ⛽ Fuel Stop
                    </motion.div>
                  </div>
                </motion.div>

                {/* End Point */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-4 h-4 bg-success-600 rounded-full mb-2"></div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-sm">Addis Ababa</div>
                    <div className="text-xs text-gray-600">02:30 PM</div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3.0 }}
                      className="mt-2 bg-success-100 text-success-700 text-xs px-2 py-1 rounded-full"
                    >
                      🏁 Arrival
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Journey Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-300"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="text-xs text-gray-600">Duration</div>
                <div className="font-bold text-gray-900">6h 30m</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📍</div>
                <div className="text-xs text-gray-600">Stops</div>
                <div className="font-bold text-gray-900">3 Stops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🛃</div>
                <div className="text-xs text-gray-600">Documents</div>
                <div className="font-bold text-success-600">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🎫</div>
                <div className="text-xs text-gray-600">Seats</div>
                <div className="font-bold text-gray-900">{bookingDetails.selectedSeats.join(', ')}</div>
              </div>
            </motion.div>
          </div>

          {/* Important Travel Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">ℹ️</div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-2">Important Travel Information</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Passport/ID Required:</strong> Please carry valid identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Border Crossing:</strong> Ethiopian visa processed at border (included)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Luggage:</strong> 2 bags (20kg each) + 1 carry-on (7kg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Arrival Time:</strong> Please arrive 30 minutes before departure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Download E-Ticket
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

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
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <span className="text-success-600">✓</span> Search
                <span className="text-gray-300">→</span>
                <span className="text-success-600">✓</span> Select Seats
                <span className="text-gray-300">→</span>
                <span className="text-primary-600 font-semibold">💳 Payment</span>
              </div>
            </div>
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">Complete Your Payment</h1>
            <p className="text-base sm:text-xl text-gray-600 px-4">Secure payment gateway - Your transaction is protected</p>
          </motion.div>

          {/* Booking Progress Animation */}
          <BookingProgress currentStep={3} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { id: 'card', icon: '💳', label: 'Credit/Debit Card' },
                      { id: 'mobile', icon: '📱', label: 'Mobile Money' },
                      { id: 'bank', icon: '🏦', label: 'Bank Transfer' }
                    ].map((method) => (
                      <motion.button
                        key={method.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === method.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-3xl mb-2">{method.icon}</div>
                        <div className="text-sm font-semibold text-gray-900">{method.label}</div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="Ahmed Hassan"
                        required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile Money */}
                  {paymentMethod === 'mobile' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Provider</label>
                        <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none">
                          <option>Select Provider</option>
                          <option>Telesom (Zaad)</option>
                          <option>Somtel (Sahal)</option>
                          <option>Safaricom (M-Pesa)</option>
                          <option>MTN Mobile Money</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+253 77 123 456"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Bank Transfer */}
                  {paymentMethod === 'bank' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                    >
                      <p className="text-sm text-blue-900 mb-4">
                        Please transfer the amount to the following bank account:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-semibold">Bank:</span> International Bank of Djibouti</div>
                        <div><span className="font-semibold">Account:</span> 1234567890</div>
                        <div><span className="font-semibold">SWIFT:</span> IBDJDJXX</div>
                        <div><span className="font-semibold">Reference:</span> EB-{Math.floor(Math.random() * 100000)}</div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Passenger Details */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Passenger Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={bookingDetails.passengerName}
                        placeholder="Ahmed Hassan"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={bookingDetails.passengerEmail}
                        placeholder="ahmed.hassan@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue={bookingDetails.passengerPhone}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ID Number</label>
                      <input
                        type="text"
                        placeholder="Passport or ID"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isProcessing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-xl hover:shadow-2xl hover:from-accent-600 hover:to-accent-700'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay $${total.toFixed(2)} Now`
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>

                {/* Journey Info */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Journey Details</div>
                  <div className="font-bold text-lg text-gray-900 mb-1">{bookingDetails.busName}</div>
                  <div className="text-sm text-gray-600">{bookingDetails.route}</div>
                  <div className="text-sm text-gray-600 mt-2">📅 {bookingDetails.date}</div>
                  <div className="text-sm text-gray-600">🕐 {bookingDetails.departure} - {bookingDetails.arrival}</div>
                </div>

                {/* Seats */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Selected Seats</div>
                  <div className="flex flex-wrap gap-2">
                    {bookingDetails.selectedSeats.map((seat) => (
                      <span key={seat} className="bg-gradient-to-br from-accent-500 to-accent-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                        #{seat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tickets ({bookingDetails.selectedSeats.length}x ${bookingDetails.pricePerSeat})</span>
                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-semibold text-gray-900">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (5%)</span>
                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-3xl font-bold text-primary-700">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-success-600">🔒</span>
                    <span>SSL Secured Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-success-600">✓</span>
                    <span>100% Money-back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-success-600">✓</span>
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

