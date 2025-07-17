import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const {FiSun,FiHeart,FiUsers,FiBookOpen,FiTrendingUp,FiArrowRight,FiSmile,FiActivity} = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiSun,
      title: 'Daily Dose',
      description: 'Start each day with inspiring quotes, affirmations, and stories of triumph.',
      link: '/daily-dose',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiHeart,
      title: 'Mood Toolkit',
      description: 'Discover practical tools for lifting your spirits and finding inner peace.',
      link: '/mood-toolkit',
      image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiUsers,
      title: 'Stories of Strength',
      description: 'Read real stories from people who overcame challenges and found hope.',
      link: '/stories',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiBookOpen,
      title: 'Self-Discovery',
      description: 'Take quizzes and explore articles to better understand yourself.',
      link: '/quizzes',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'EncouraMind helped me find hope during my darkest moments. The daily affirmations changed my perspective.',
      role: 'Community Member',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael R.',
      quote: 'The stories of strength remind me that I\'m not alone in my struggles. This platform is a lifeline.',
      role: 'Community Member',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Lisa K.',
      quote: 'The mood toolkit has practical exercises that actually work. I use them every day.',
      role: 'Community Member',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>EncouraMind — Encouraging Minds, Enriching Lives</title>
        <meta name="description" content="Your private space for daily encouragement, mental wellness support, and personal growth." />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-gray-900 dark:text-white">
                EncouraMind
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-600 dark:text-gray-300 font-heading">
                Encouraging Minds, Enriching Lives
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Your private space for daily encouragement, mental wellness support, and personal growth. 
                Join a community that believes in the power of positive transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/daily-dose"
                  className="btn btn-accent inline-flex items-center justify-center"
                >
                  Start Your Daily Lift
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote of the Day */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-soft text-white overflow-hidden"
            >
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 font-heading">
                  Daily Affirmation
                </h2>
                <blockquote className="text-lg italic mb-4">
                  "I am capable of amazing things. Today, I choose to focus on progress, not perfection."
                </blockquote>
                <div className="flex justify-center">
                  <Link to="/daily-dose" className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center">
                    <SafeIcon icon={FiActivity} className="mr-2 w-4 h-4" />
                    Get Your Daily Dose
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                Your Toolkit for Mental Wellness
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover tools, stories, and resources designed to lift your spirits and support your mental wellness journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={feature.link}
                    className="block bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Feature Image */}
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    ></div>
                    
                    <div className="p-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                        <SafeIcon icon={feature.icon} className="w-6 h-6 text-gray-800" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                Stories from Our Community
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Real experiences from people who found hope and strength through EncouraMind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-soft"
                >
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of people who are finding hope, strength, and encouragement every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/daily-dose"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Daily Dose
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