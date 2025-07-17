import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight } = FiIcons;

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to EncouraMind
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Your private sanctuary for daily encouragement, mental wellness support, and personal growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center">
              Get Started
              <FiArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Daily Encouragement</h3>
            <p className="text-gray-600 dark:text-gray-300">Start each day with positive affirmations and encouraging content tailored to your needs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Mental Wellness Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">Access practical tools and exercises to support your mental health journey.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Supportive Community</h3>
            <p className="text-gray-600 dark:text-gray-300">Connect with others on similar journeys in a safe, private environment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;