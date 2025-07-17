import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiHeart, FiUsers, FiBookOpen, FiStar, FiArrowRight, FiPlay, FiCheck } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiHeart,
      title: "Daily Encouragement",
      description: "Start each day with personalized affirmations and motivational content tailored to lift your spirits."
    },
    {
      icon: FiUsers,
      title: "Supportive Community",
      description: "Connect with others on similar journeys in a safe, private space designed for growth and healing."
    },
    {
      icon: FiBookOpen,
      title: "Expert Resources",
      description: "Access curated articles, exercises, and tools created by mental health professionals."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "EncouraMind has become my daily sanctuary. The encouragement I receive here helps me face each day with renewed hope.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "The community here is incredible. I've found genuine support and friendship that's helped me through my toughest moments.",
      rating: 5
    },
    {
      name: "Emily K.",
      text: "I love how private and safe this platform feels. It's exactly what I needed for my mental wellness journey.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>EncouraMind — Encouraging Minds, Enriching Lives</title>
        <meta name="description" content="Private mental wellness platform for daily encouragement and support" />
      </Helmet>

      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
              >
                Encouraging Minds,<br />
                <span className="text-yellow-300">Enriching Lives</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Your private sanctuary for daily encouragement, mental wellness support, and personal growth. Join a community that believes in your potential.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/register"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Journey
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/daily-dose"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiPlay} className="mr-2 w-5 h-5" />
                  Explore Content
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                Why Choose EncouraMind?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We've created a unique platform that combines professional expertise with genuine community support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                    <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote of the Day */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
              <div className="relative p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                  Daily Dose of Encouragement
                </h2>
                <blockquote className="text-lg md:text-xl mb-6 italic">
                  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
                </blockquote>
                <p className="text-white/80">— Steve Jobs</p>
                <Link
                  to="/daily-dose"
                  className="inline-flex items-center mt-6 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Today's Dose
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                What Our Community Says
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Real stories from real people who've found hope and healing through EncouraMind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-soft"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Ready to Transform Your Mental Wellness?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of others who've discovered the power of daily encouragement and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiCheck} className="mr-2 w-5 h-5" />
                  Start Free Today
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;