import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiUsers, FiMessageSquare, FiHeart, FiShare2, FiClock, FiPlusCircle, FiSearch } = FiIcons;

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Managing Anxiety During Work Meetings",
      author: "Sarah M.",
      category: "Anxiety Support",
      content: "I've been struggling with anxiety during work meetings. What strategies do you use to stay calm and focused?",
      likes: 24,
      replies: 12,
      timeAgo: "2 hours ago",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      title: "Celebrating Small Wins",
      author: "James T.",
      category: "Positive Mindset",
      content: "Let's share our small victories of the week! I finally established a morning meditation routine.",
      likes: 45,
      replies: 28,
      timeAgo: "4 hours ago",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      title: "Building Healthy Boundaries",
      author: "Emma L.",
      category: "Self-Care",
      content: "How do you maintain healthy boundaries with family members who don't understand mental health?",
      likes: 36,
      replies: 15,
      timeAgo: "6 hours ago",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      title: "Finding Hope After Loss",
      author: "Michael R.",
      category: "Grief Support",
      content: "It's been 6 months since I lost my partner. Some days are harder than others, but I'm learning to find moments of peace.",
      likes: 67,
      replies: 23,
      timeAgo: "8 hours ago",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const categories = [
    "All Topics",
    "Anxiety Support", 
    "Depression Support",
    "Self-Care",
    "Positive Mindset",
    "Recovery",
    "Relationships",
    "Grief Support"
  ];

  return (
    <>
      <Helmet>
        <title>Community - EncouraMind</title>
        <meta name="description" content="Join our supportive community to share experiences and find encouragement." />
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
              EncouraMind Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A safe space to share, support, and grow together
            </p>
          </motion.div>

          {/* Community Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-8 rounded-2xl overflow-hidden"
          >
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Welcome to Our Community</h2>
                <p className="text-lg">Where every voice matters and every story inspires</p>
              </div>
            </div>
          </motion.div>

          {/* Search and New Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                  placeholder="Search discussions..."
                />
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <SafeIcon icon={FiPlusCircle} className="w-5 h-5" />
              <span>New Discussion</span>
            </button>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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

          {/* Discussions */}
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.authorAvatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {discussion.author}
                        </span>
                        <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                          {discussion.category}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                        <span>{discussion.timeAgo}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {discussion.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {discussion.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                          <SafeIcon icon={FiHeart} className="w-5 h-5" />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                          <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
                          <span>{discussion.replies}</span>
                        </button>
                      </div>
                      <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                        <SafeIcon icon={FiShare2} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Community Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Be Kind and Respectful
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Treat all members with compassion and understanding. We're all on a journey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Share Responsibly
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Share your experiences while being mindful of others' triggers and boundaries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  No Medical Advice
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Share personal experiences, but avoid giving medical or professional advice.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Support Each Other
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Offer encouragement and support. Every small act of kindness matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Community;