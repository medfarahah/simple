'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
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
              <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</Link>
            </div>
            <Link
              href="/booking"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About GoTransit</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connecting communities across East Africa for over 20 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2003, GoTransit started with just 5 buses connecting Djibouti City and Addis Ababa. Our vision was simple: provide safe, comfortable, and affordable transportation for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Today, we operate over 500 modern buses across East Africa, serving millions of passengers annually. We&apos;ve expanded our routes to cover major cities in Djibouti and Ethiopia, always maintaining our commitment to quality service.
              </p>
              <p className="text-lg text-gray-600">
                Our success is built on trust, reliability, and the satisfaction of our passengers. Every journey with us is more than just transportation – it&apos;s an experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 rounded-3xl p-8 text-white shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Years in Service</span>
                  <span className="text-3xl font-bold">20+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Fleet Size</span>
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Routes</span>
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Daily Trips</span>
                  <span className="text-3xl font-bold">200+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Happy Passengers</span>
                  <span className="text-3xl font-bold">1M+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, reliable, and comfortable bus transportation services that connect communities and enhance mobility across East Africa, while maintaining the highest standards of customer service and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading bus transportation company in East Africa, recognized for innovation, sustainability, and exceptional customer experience. We aim to set new standards in the industry and contribute to the economic development of the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Safety First', desc: 'Your safety is our top priority' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent in all dealings' },
              { icon: '⭐', title: 'Excellence', desc: 'Striving for the highest quality' },
              { icon: '🌱', title: 'Sustainability', desc: 'Committed to environmental care' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Travel With Us?</h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the difference of quality bus transportation
            </p>
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:from-accent-500 hover:to-accent-600 transition-all"
              >
                Book Your Journey Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

