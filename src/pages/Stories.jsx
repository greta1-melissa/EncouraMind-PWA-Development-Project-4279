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
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      title: "Conquering Anxiety One Step at a Time",
      author: "James Wilson",
      category: "Anxiety", 
      excerpt: "For years, anxiety controlled my life. Here's how I learned to take back control...",
      likes: 256,
      comments: 72,
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      title: "The Power of Self-Acceptance",
      author: "Emily Chen",
      category: "Self-Discovery",
      excerpt: "Learning to accept myself was the first step towards true happiness...",
      likes: 189,
      comments: 34,
      image: "https://images.unsplash.com/photo-1516589091380-5d8259568543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      title: "Building Resilience Through Adversity",
      author: "Marcus Rodriguez",
      category: "Recovery",
      excerpt: "Life knocked me down repeatedly, but each time I got back up stronger...",
      likes: 312,
      comments: 89,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      title: "From Burnout to Balance",
      author: "Lisa Thompson",
      category: "Work-Life Balance",
      excerpt: "How I learned to prioritize my mental health while building a successful career...",
      likes: 203,
      comments: 56,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      title: "Healing Relationships, Healing Myself",
      author: "David Park",
      category: "Relationships",
      excerpt: "The journey to healthier relationships started with healing my relationship with myself...",
      likes: 167,
      comments: 41,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
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

          {/* Search and Add Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-8"
          >
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search stories..."
                />
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <SafeIcon icon={FiPlusCircle} className="w-5 h-5" />
              <span>Share Your Story</span>
            </button>
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                  
                  {/* Author Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={story.authorAvatar}
                      alt={story.author}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      by {story.author}
                    </span>
                  </div>

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

          {/* Featured Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Share Your Story
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Your story could be the light someone else needs. Share your journey of strength and inspire others in our community.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Submit Your Story
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Stories;