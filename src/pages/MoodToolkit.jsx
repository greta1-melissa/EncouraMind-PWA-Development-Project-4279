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
      iconColor: "text-accent",
      bgColor: "bg-accent-50",
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
      iconColor: "text-primary",
      bgColor: "bg-primary-50",
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
      iconColor: "text-secondary",
      bgColor: "bg-secondary-50",
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
      iconColor: "text-accent",
      bgColor: "bg-accent-50",
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

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
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
                className={`${tool.bgColor} dark:bg-gray-800 rounded-2xl shadow-soft p-6`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-soft">
                    <SafeIcon icon={tool.icon} className={`w-6 h-6 ${tool.iconColor}`} />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading">
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
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer shadow-soft"
                    >
                      <div className={`w-2 h-2 ${tool.iconColor} rounded-full`}></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
              Need More Personalized Support?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Discover more tools and personalized recommendations by creating an account.
            </p>
            <button className="btn btn-accent">
              Create Free Account
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MoodToolkit;