import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiUsers, FiMessageSquare, FiCalendar, FiArrowRight, FiHeart, FiStar, FiTrendingUp, FiSearch } = FiIcons;

const Community = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Mindfulness Monday",
      date: "Mon, Oct 3",
      time: "7:00 PM EST",
      attendees: 24,
      category: "Meditation"
    },
    {
      id: 2,
      title: "Anxiety Support Circle",
      date: "Wed, Oct 5",
      time: "6:30 PM EST",
      attendees: 18,
      category: "Support Group"
    },
    {
      id: 3,
      title: "Self-Care Workshop",
      date: "Sat, Oct 8",
      time: "11:00 AM EST",
      attendees: 32,
      category: "Workshop"
    }
  ];

  const discussionGroups = [
    {
      id: 1,
      name: "Anxiety Support",
      description: "A safe space to share experiences and coping strategies for anxiety",
      members: 328,
      activity: "Very Active",
      posts: 56
    },
    {
      id: 2,
      name: "Mindfulness Practice",
      description: "Daily mindfulness exercises and discussions about present-moment awareness",
      members: 245,
      activity: "Active",
      posts: 38
    },
    {
      id: 3,
      name: "Self-Care Sundays",
      description: "Weekly check-ins and self-care tip sharing for better mental wellness",
      members: 187,
      activity: "Moderately Active",
      posts: 24
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - EncouraMind</title>
        <meta name="description" content="Join our supportive community for connection, shared experiences, and growth in your mental wellness journey." />
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
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Connect with others on similar journeys, share experiences, and grow together in a safe, supportive environment.
            </p>
          </motion.div>

          {/* Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
              <div className="relative py-16 px-8 sm:px-12 text-white">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">
                    You're Not Alone Here
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Our community is built on kindness, understanding, and shared experiences. 
                    Find support, make connections, and share your journey with others who understand.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/register"
                      className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      <span>Join Community</span>
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                      to="/community/guidelines"
                      className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                      <span>Community Guidelines</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5,200+</h3>
              <p className="text-gray-600 dark:text-gray-400">Community Members</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMessageSquare} className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</h3>
              <p className="text-gray-600 dark:text-gray-400">Support Groups</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCalendar} className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">20+</h3>
              <p className="text-gray-600 dark:text-gray-400">Events Monthly</p>
            </div>
          </motion.div>

          {/* Discussion Groups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                Discussion Groups
              </h2>
              <Link
                to="/community/groups"
                className="text-primary dark:text-primary-400 hover:underline flex items-center"
              >
                <span>View All Groups</span>
                <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {discussionGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-3 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {group.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {group.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                        <span>{group.members} members</span>
                      </div>
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <SafeIcon icon={FiTrendingUp} className="w-4 h-4 mr-1" />
                        <span>{group.activity}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        to={`/community/groups/${group.id}`}
                        className="w-full inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded-lg font-medium transition-colors"
                      >
                        <span>Join Group</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                Upcoming Events
              </h2>
              <Link
                to="/community/events"
                className="text-primary dark:text-primary-400 hover:underline flex items-center"
              >
                <span>View All Events</span>
                <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-primary dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 rounded-full">
                      {event.category}
                    </span>
                    <button className="text-gray-400 hover:text-primary dark:hover:text-primary-400">
                      <SafeIcon icon={FiStar} className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <Link
                    to={`/community/events/${event.id}`}
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <span>RSVP</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiSearch} className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
              Find Your People
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Looking for specific support or discussions? Search our community to find the perfect group for you.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Search for topics, groups, or events..."
                />
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center relative overflow-hidden"
          >
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 font-heading">
                Start Your Journey Today
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Join our supportive community and take the first step toward better mental wellness. 
                Together, we can navigate life's challenges and celebrate our growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <SafeIcon icon={FiHeart} className="mr-2 w-5 h-5" />
                  <span>Join Our Community</span>
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Community;