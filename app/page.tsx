'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('access_key', '903fcab1-818d-44e7-ade0-d83b24eacabd');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Ahmed Hassan"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={isSubmitting || isSuccess}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="ahmed@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={isSubmitting || isSuccess}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
      <div>
        <textarea
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          disabled={isSubmitting || isSuccess}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: isSuccess ? 1 : 1.05 }}
        whileTap={{ scale: isSuccess ? 1 : 0.95 }}
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={`w-full px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all relative overflow-hidden ${
          isSuccess
            ? 'bg-success-500'
            : 'bg-gradient-to-r from-accent-400 to-accent-500 hover:shadow-2xl hover:from-accent-500 hover:to-accent-600'
        }`}
      >
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            <span>Sending...</span>
          </motion.div>
        )}

        {isSuccess && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="flex items-center justify-center gap-2"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <span>Message Sent!</span>
          </motion.div>
        )}

        {!isSubmitting && !isSuccess && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Send Message
          </motion.span>
        )}

        {/* Success Confetti Effect */}
        {isSuccess && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  scale: 0,
                  x: 0,
                  y: 0
                }}
                animate={{
                  opacity: 0,
                  scale: 1,
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.02
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#ffffff', '#fbbf24', '#f59e0b', '#10b981'][i % 4]
                }}
              />
            ))}
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-bold text-primary-600"
            >
              GoTransit
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
              <a href="/booking" className="text-gray-700 hover:text-primary-600 transition">Book Now</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
              <a href="/about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>

            {/* Desktop Book Button */}
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Book Now
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 transition py-2 text-lg">Home</a>
                <a href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 transition py-2 text-lg">Book Now</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 transition py-2 text-lg">Services</a>
                <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 transition py-2 text-lg">About</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary-600 transition py-2 text-lg">Contact</a>
                <a href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition text-center">
                  Book Your Trip
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Journey,
            <br />
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">Our Priority</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto px-4"
          >
            Experience comfort, safety, and reliability with GoTransit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:from-accent-600 hover:to-accent-700 transition-all text-center min-h-[56px] flex items-center justify-center"
            >
              Book Your Trip
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all text-center min-h-[56px] flex items-center justify-center"
            >
              View Routes
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium transportation solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚌',
                title: 'City Routes',
                description: 'Comfortable daily commutes across major city routes with frequent schedules.',
                color: 'from-primary-500 to-primary-600',
                routes: [
                  'Djibouti City Center ↔ Airport',
                  'Addis Ababa Bole ↔ Meskel Square',
                  'Dire Dawa Station ↔ Market District',
                  'Bahir Dar Center ↔ Lake Tana'
                ]
              },
              {
                icon: '🌆',
                title: 'Intercity Travel',
                description: 'Long-distance travel between cities with premium comfort and amenities.',
                color: 'from-accent-500 to-accent-600',
                routes: [
                  'Djibouti City ↔ Addis Ababa',
                  'Addis Ababa ↔ Dire Dawa',
                  'Djibouti City ↔ Ali Sabieh',
                  'Dire Dawa ↔ Jigjiga'
                ]
              },
              {
                icon: '⭐',
                title: 'Premium Service',
                description: 'Luxury buses with Wi-Fi, charging ports, and extra legroom for your comfort.',
                color: 'from-purple-500 to-purple-600',
                routes: [
                  'Executive Class',
                  'Sleeper Coaches',
                  'Private Charters',
                  'Corporate Shuttles'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2 mt-4">
                  <div className="text-sm font-semibold text-primary-700 mb-2">Popular Routes:</div>
                  {service.routes.map((route, routeIndex) => (
                    <div key={routeIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {route}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Express Bus?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: '✓', title: 'Safety First', desc: 'All buses equipped with modern safety features' },
                  { icon: '✓', title: 'Comfort Guaranteed', desc: 'Spacious seats and climate control' },
                  { icon: '✓', title: 'On-Time Service', desc: 'Punctual departures and arrivals' },
                  { icon: '✓', title: 'Affordable Prices', desc: 'Best value for your money' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-6xl mb-4">🚌</div>
                <h3 className="text-3xl font-bold mb-4">Modern Fleet</h3>
                <p className="text-lg text-white/90 mb-6">
                  Our buses are regularly maintained and equipped with the latest technology for your comfort and safety.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-white/80">Buses</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-white/80">Routes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-sm text-white/80">Passengers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Express Bus Company has been serving communities for over 20 years, providing reliable and comfortable transportation services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '20+', label: 'Years of Experience' },
              { number: '500+', label: 'Fleet Size' },
              { number: '1M+', label: 'Happy Customers' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"
              >
                <div className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          >
            {[
              { icon: '📞', title: 'Phone', info: '+25377485495' },
              { icon: '✉️', title: 'Email', info: 'info@expressbus.com' },
              { icon: '📍', title: 'Address', info: '123 Bus Street, City' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-4xl mb-3">{contact.icon}</div>
                <div className="font-semibold mb-2">{contact.title}</div>
                <div className="text-white/80">{contact.info}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">GoTransit</div>
              <p className="text-gray-400">
                Your trusted partner for comfortable and reliable transportation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>City Routes</li>
                <li>Intercity Travel</li>
                <li>Premium Service</li>
                <li>Group Bookings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-600 transition"
                  >
                    {social[0]}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MFA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
