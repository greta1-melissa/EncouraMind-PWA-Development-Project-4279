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
    { icon: FiSmile, label: 'Great', color: 'text-primary-600', value: 'great' },
    { icon: FiMeh, label: 'Okay', color: 'text-secondary-600', value: 'okay' },
    { icon: FiFrown, label: 'Struggling', color: 'text-accent-600', value: 'struggling' }
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
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        {/* Hero Section with Background */}
        <div 
          className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-16 mb-8"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <div className="flex items-center justify-center mb-4">
                <SafeIcon icon={FiSun} className="w-8 h-8 mr-2" />
                <h1 className="text-3xl font-bold font-heading">
                  Daily Dose
                </h1>
              </div>
              <p className="text-lg mb-6">
                Your daily source of encouragement and inspiration
              </p>
              <button
                onClick={handleRefresh}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors mx-auto"
              >
                <SafeIcon icon={FiRefreshCw} className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh Content</span>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote of the Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-soft relative overflow-hidden"
          >
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading">
                  Quote of the Day
                </h2>
                <button
                  onClick={() => handleShare('Quote', `"${dailyContent.quote.text}" - ${dailyContent.quote.author}`)}
                  className="p-2 text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
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
            </div>
          </motion.div>

          {/* Affirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-r from-primary to-secondary text-gray-800 rounded-2xl p-8 mb-8 shadow-soft overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold font-heading">
                  Affirmation of the Day
                </h2>
                <button
                  onClick={() => handleShare('Affirmation', dailyContent.affirmation)}
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <SafeIcon icon={FiShare2} className="w-5 h-5" />
                </button>
              </div>
              <p className="text-lg">
                {dailyContent.affirmation}
              </p>
            </div>
          </motion.div>

          {/* Mood Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-soft"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">
              How are you feeling today?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    currentMood === mood.value
                      ? 'bg-primary-50 dark:bg-primary-900/20 scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <SafeIcon icon={mood.icon} className={`w-8 h-8 mb-2 ${mood.color}`} />
                  <span className="text-gray-900 dark:text-white">{mood.label}</span>
                </button>
              ))}
            </div>
            {currentMood && (
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for sharing. We've noted how you're feeling today.
                </p>
              </div>
            )}
          </motion.div>

          {/* Story Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
              }}
            ></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-heading">
                  Story of Strength
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <SafeIcon icon={FiHeart} className="w-4 h-4 mr-1 text-accent" />
                  {dailyContent.story.readTime}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                {dailyContent.story.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {dailyContent.story.excerpt}
              </p>
              <button className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent-600 transition-colors">
                Read Full Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DailyDose;