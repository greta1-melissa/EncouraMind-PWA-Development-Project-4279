import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiHeart, FiMessageSquare, FiBookmark, FiShare2, FiArrowRight, FiSearch } = FiIcons;

const Stories = () => {
  const featuredStory = {
    id: 1,
    title: "From Darkness to Light: My Journey Through Depression",
    excerpt: "Two years ago, I wouldn't have believed I could feel joy again. Here's how small daily steps led to my recovery and transformation...",
    author: "Michael J.",
    readTime: "8 min read",
    category: "Mental Health Recovery",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    likes: 348,
    comments: 56
  };

  const stories = [
    {
      id: 2,
      title: "Finding Strength in Vulnerability",
      excerpt: "Learning to embrace my imperfections changed everything about how I view myself and connect with others...",
      author: "Sarah L.",
      readTime: "5 min read",
      category: "Self-Acceptance",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 215,
      comments: 32
    },
    {
      id: 3,
      title: "The Power of 'Yet': Embracing a Growth Mindset",
      excerpt: "How changing one word in my vocabulary transformed my approach to challenges and learning...",
      author: "David R.",
      readTime: "6 min read",
      category: "Personal Growth",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 189,
      comments: 24
    },
    {
      id: 4,
      title: "Reclaiming My Time: Setting Boundaries That Work",
      excerpt: "My journey to understanding that saying 'no' to others sometimes means saying 'yes' to myself...",
      author: "Emma T.",
      readTime: "7 min read",
      category: "Self-Care",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 276,
      comments: 41
    }
  ];

  const categories = [
    "All Stories", "Mental Health", "Anxiety", "Depression", "Self-Care", 
    "Personal Growth", "Mindfulness", "Resilience", "Relationships"
  ];

  return (
    <>
      <Helmet>
        <title>Community Stories - EncouraMind</title>
        <meta name="description" content="Read inspiring stories of mental health journeys, resilience, and personal growth from our community members." />
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
              Community Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real stories of struggle, resilience, and triumph from people just like you. Find hope and connection through shared experiences.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search for stories or topics..."
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-gradient-to-r from-primary to-accent text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Featured Story
            </h2>
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-96 object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium self-start mb-4">
                  {featuredStory.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{featuredStory.title}</h3>
                <p className="text-white/90 mb-6 max-w-3xl">{featuredStory.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{featuredStory.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{featuredStory.author}</p>
                      <p className="text-white/70 text-sm">{featuredStory.readTime}</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-white/80 hover:text-white">
                      <SafeIcon icon={FiHeart} className="w-5 h-5 mr-1" />
                      <span>{featuredStory.likes}</span>
                    </button>
                    <button className="flex items-center text-white/80 hover:text-white">
                      <SafeIcon icon={FiMessageSquare} className="w-5 h-5 mr-1" />
                      <span>{featuredStory.comments}</span>
                    </button>
                  </div>
                </div>
                <Link
                  to={`/stories/${featuredStory.id}`}
                  className="mt-6 inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <span>Read Full Story</span>
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* More Stories */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                More Community Stories
              </h2>
              <Link
                to="/stories/all"
                className="text-primary dark:text-primary-400 hover:underline flex items-center"
              >
                <span>View All</span>
                <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${story.image})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium text-primary dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 rounded-full">
                        {story.category}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {story.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        By {story.author}
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                          <SafeIcon icon={FiBookmark} className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                          <SafeIcon icon={FiShare2} className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
              Share Your Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Your journey matters. By sharing your experiences, you can inspire others and find connection in our supportive community.
            </p>
            <Link
              to="/stories/submit"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <span>Submit Your Story</span>
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Stories;