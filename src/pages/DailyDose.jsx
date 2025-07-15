import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiSun, FiHeart, FiShare2, FiRefreshCw, FiSmile, FiMeh, FiFrown } = FiIcons;

const DailyDose = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dailyContent = {
    quote: {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    affirmation: "I am capable of amazing things. I choose to focus on what I can control and release what I cannot.",
    story: {
      title: "From Anxiety to Acceptance",
      excerpt: "Maria's journey from overwhelming anxiety to finding peace through mindfulness and self-compassion...",
      readTime: "3 min read"
    }
  };

  const moods = [
    { icon: FiSmile, label: 'Great', color: 'text-green-500', value: 'great' },
    { icon: FiMeh, label: 'Okay', color: 'text-yellow-500', value: 'okay' },
    { icon: FiFrown, label: 'Struggling', color: 'text-red-500', value: 'struggling' }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
  };

  const handleShare = (type, content) => {
    if (navigator.share) {
      navigator.share({
        title: `Daily ${type} from EncouraMind`,
        text: content,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <>
      <Helmet>
        <title>Daily Dose - EncouraMind</title>
        <meta name="description" content="Your daily dose of encouragement, inspiration, and positive affirmations." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiSun} className="w-8 h-8 text-yellow-500 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Daily Dose
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your daily source of encouragement and inspiration
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleRefresh}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiRefreshCw} className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh Content</span>
              </button>
            </div>
          </motion.div>

          {/* Quote of the Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Quote of the Day
              </h2>
              <button
                onClick={() => handleShare('Quote', `"${dailyContent.quote.text}" - ${dailyContent.quote.author}`)}
                className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
              </button>
            </div>
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              "{dailyContent.quote.text}"
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400 text-right">
              — {dailyContent.quote.author}
            </p>
          </motion.div>

          {/* Affirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 mb-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Affirmation of the Day
              </h2>
              <button
                onClick={() => handleShare('Affirmation', dailyContent.affirmation)}
                className="p-2 text-purple-100 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
              </button>
            </div>
            <p className="text-lg">
              {dailyContent.affirmation}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DailyDose;