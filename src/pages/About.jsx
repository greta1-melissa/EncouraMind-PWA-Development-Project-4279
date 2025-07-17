import React from 'react';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const {FiHeart, FiUsers, FiTarget, FiShield} = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: "Compassion First",
      description: "We believe in treating every person with kindness and understanding, recognizing that everyone's journey is unique.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiUsers,
      title: "Community Support",
      description: "Together we're stronger. Our community provides a safe space for sharing experiences and finding encouragement.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiTarget,
      title: "Purposeful Growth",
      description: "We focus on practical tools and resources that make a real difference in people's mental wellness journey.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiShield,
      title: "Privacy & Safety",
      description: "Your privacy is paramount. We maintain the highest standards of security and confidentiality.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - EncouraMind</title>
        <meta name="description" content="Learn about EncouraMind's mission to provide encouraging minds and enriching lives through mental wellness support." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About EncouraMind
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Encouraging Minds, Enriching Lives. We're dedicated to creating a supportive environment where mental wellness thrives.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16 overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                EncouraMind exists to provide a private, supportive space where individuals can find daily encouragement, 
                practical tools, and community support for their mental wellness journey. We believe that everyone deserves 
                access to resources that help them thrive emotionally and mentally.
              </p>
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  EncouraMind was born from a simple yet powerful belief: that everyone deserves access to mental wellness 
                  support in a private, judgment-free environment.
                </p>
                <p>
                  We recognized that traditional mental health resources, while valuable, often come with barriers like cost, 
                  accessibility, or stigma. Our platform bridges this gap by providing immediate, accessible support through 
                  daily encouragement, practical tools, and community connection.
                </p>
                <p>
                  What started as a vision to help individuals find hope and strength has grown into a comprehensive platform 
                  that serves thousands of people on their mental wellness journey.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful mountain landscape representing wellness journey"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${value.image})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                        <SafeIcon icon={value.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Privacy Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Privacy & Safety First
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We understand that mental health is deeply personal. That's why EncouraMind is designed with privacy and safety as our top priorities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Private by Design
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No search engine indexing, no public profiles, no data selling
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Secure Platform
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    End-to-end encryption and industry-standard security measures
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiUsers} className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Your Control
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You decide what to share and can delete your data anytime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to start your journey toward better mental wellness? Join thousands of others who are 
              finding hope, strength, and encouragement every day.
            </p>
            <button className="bg-primary text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;