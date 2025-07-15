import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiHeart, FiMusic, FiSun, FiWind, FiBook } = FiIcons;

const MoodToolkit = () => {
  const tools = [
    {
      title: "Quick Mood Fixes",
      description: "Simple exercises to lift your mood instantly",
      icon: FiHeart,
      items: [
        "Take 3 deep breaths",
        "Stretch for 1 minute",
        "Drink a glass of water",
        "Step outside briefly",
        "Listen to a favorite song"
      ]
    },
    {
      title: "Guided Meditations",
      description: "Short meditation sessions for peace and clarity",
      icon: FiWind,
      items: [
        "5-minute breathing exercise",
        "Body scan meditation",
        "Loving-kindness practice",
        "Mindful walking guide",
        "Stress release visualization"
      ]
    },
    {
      title: "Daily Affirmations",
      description: "Positive statements to boost your mindset",
      icon: FiSun,
      items: [
        "I am worthy of love and respect",
        "I choose peace over worry",
        "I am growing stronger each day",
        "My potential is limitless",
        "I trust in my journey"
      ]
    },
    {
      title: "Mood Music",
      description: "Curated playlists for different moods",
      icon: FiMusic,
      items: [
        "Calming Classical",
        "Upbeat Energy",
        "Peaceful Nature Sounds",
        "Meditation Melodies",
        "Positive Pop"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mood Toolkit - EncouraMind</title>
        <meta name="description" content="Access tools and resources to improve your mood and mental wellbeing." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mood Toolkit
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of practical tools and exercises to help you manage your mood and enhance your mental wellbeing.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={tool.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {tool.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {tool.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodToolkit;