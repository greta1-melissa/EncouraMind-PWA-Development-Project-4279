import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiSearch, FiFilter, FiHeart, FiMessageSquare, FiShare2, FiBookmark, FiPlusCircle } = FiIcons;

const Stories = () => {
  const categories = [
    'All Stories',
    'Anxiety',
    'Depression',
    'Recovery',
    'Self-Discovery',
    'Relationships',
    'Work-Life Balance'
  ];

  const stories = [
    {
      id: 1,
      title: "Finding Light in the Darkness",
      author: "Sarah Mitchell",
      category: "Depression",
      excerpt: "My journey through depression taught me that even in the darkest times, there's always hope...",
      likes: 128,
      comments: 45,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Conquering Anxiety One Step at a Time",
      author: "James Wilson",
      category: "Anxiety",
      excerpt: "For years, anxiety controlled my life. Here's how I learned to take back control...",
      likes: 256,
      comments: 72,
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "The Power of Self-Acceptance",
      author: "Emily Chen",
      category: "Self-Discovery",
      excerpt: "Learning to accept myself was the first step towards true happiness...",
      likes: 189,
      comments: 34,
      image: "https://images.unsplash.com/photo-1516589091380-5d8259568543?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stories of Strength - EncouraMind</title>
        <meta name="description" content="Read inspiring stories of people who have overcome mental health challenges and found strength." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stories of Strength
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real stories from real people who have found hope, healing, and strength in their mental health journey.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.image})` }}
                ></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
                    {story.category}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {story.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                        <SafeIcon icon={FiHeart} className="w-5 h-5" />
                        <span>{story.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                        <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
                        <span>{story.comments}</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full">
                        <SafeIcon icon={FiShare2} className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full">
                        <SafeIcon icon={FiBookmark} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;