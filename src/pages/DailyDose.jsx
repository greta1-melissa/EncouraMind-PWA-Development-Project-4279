import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiArrowRight, FiHeart, FiSun, FiBookmark, FiShare2, FiCalendar, FiThumbsUp } = FiIcons;

const DailyDose = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dailyQuote = {
    text: "Every day may not be good, but there's something good in every day.",
    author: "Alice Morse Earle",
    category: "Perspective"
  };

  const dailyAffirmation = "I am resilient, capable, and worthy of all good things.";

  const journalPrompts = [
    "What made you smile today?",
    "What's one small thing you're grateful for right now?",
    "What's a challenge you overcame recently?",
    "What's something kind you can do for yourself today?",
    "What's a positive change you've noticed in yourself lately?"
  ];

  return (
    <>
      <Helmet>
        <title>Daily Dose of Encouragement - EncouraMind</title>
        <meta name="description" content="Get your daily dose of encouragement, affirmations, and positivity to boost your mental wellness." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" 
                 style={{backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
            <div className="relative pt-16 pb-20 px-6 sm:px-12 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white"
              >
                <h1 className="text-4xl font-bold mb-4 font-heading">
                  Your Daily Dose of Encouragement
                </h1>
                <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
                  Start your day with positivity, gratitude, and self-compassion
                </p>
                <p className="text-lg mb-8">{currentDate}</p>
                <div className="inline-flex bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">
                  <SafeIcon icon={FiSun} className="w-5 h-5 mr-2" />
                  <span>Refresh your mind daily</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote of the Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                Quote of the Day
              </h2>
              <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium">
                {dailyQuote.category}
              </span>
            </div>
            <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-4">
              "{dailyQuote.text}"
            </blockquote>
            <p className="text-right text-gray-600 dark:text-gray-400">— {dailyQuote.author}</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-full transition-colors">
                <SafeIcon icon={FiBookmark} className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-full transition-colors">
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-full transition-colors">
                <SafeIcon icon={FiThumbsUp} className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Daily Affirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 font-heading">
                Today's Affirmation
              </h2>
              <p className="text-2xl font-medium mb-6">
                {dailyAffirmation}
              </p>
              <button className="flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
                <span>Embrace This</span>
              </button>
            </div>
          </motion.div>

          {/* Journal Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Reflection Prompts
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Take a moment to reflect on one of these prompts today:
            </p>
            <div className="space-y-4">
              {journalPrompts.map((prompt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">{prompt}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calendar/Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                Your Encouragement Streak
              </h2>
              <div className="flex items-center text-primary dark:text-primary">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                <span className="font-medium">7 Days</span>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index < 5
                      ? 'bg-gradient-to-br from-primary to-accent text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/profile" className="inline-flex items-center text-primary dark:text-primary hover:underline">
                <span>View your full history</span>
                <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Want a personalized daily dose of encouragement delivered to your inbox?
            </p>
            <Link to="/register" className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              <span>Get Started for Free</span>
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DailyDose;