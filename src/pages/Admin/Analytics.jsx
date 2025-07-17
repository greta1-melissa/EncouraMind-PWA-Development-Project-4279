import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';

const { FiUsers, FiActivity, FiBarChart2, FiCalendar, FiDownload, FiRefreshCw } = FiIcons;

const AdminAnalytics = () => {
  const metrics = [
    {
      name: 'Total Users',
      value: '1,248',
      change: '+12%',
      trend: 'up',
      icon: FiUsers,
      color: 'bg-primary'
    },
    {
      name: 'Active Sessions',
      value: '586',
      change: '+18%',
      trend: 'up',
      icon: FiActivity,
      color: 'bg-primary'
    },
    {
      name: 'Engagement Rate',
      value: '68%',
      change: '+5%',
      trend: 'up',
      icon: FiBarChart2,
      color: 'bg-accent'
    },
    {
      name: 'Avg. Session Time',
      value: '8m 24s',
      change: '+2%',
      trend: 'up',
      icon: FiCalendar,
      color: 'bg-secondary'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <SafeIcon icon={FiRefreshCw} className="w-5 h-5" />
            <span>Refresh</span>
          </button>
          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors">
            <SafeIcon icon={FiDownload} className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Date Range Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex flex-wrap justify-between items-center gap-4"
      >
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300">Date Range:</span>
          <select className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300">Compare to:</span>
          <select className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>Previous Period</option>
            <option>Previous Year</option>
            <option>None</option>
          </select>
        </div>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg ${metric.color} flex items-center justify-center`}>
                <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.name}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{metric.value}</p>
                  <span
                    className={`ml-2 text-xs font-medium ${
                      metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 overflow-hidden"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">User Growth</h2>
          {/* Chart with image */}
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="User growth chart"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">User Growth Chart</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Users</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">128</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Returning</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">458</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth Rate</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">+24%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 overflow-hidden"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Engagement by Content</h2>
          {/* Chart with image */}
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Engagement chart"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">Content Engagement Chart</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Articles</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">42%</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Daily Dose</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">28%</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Quizzes</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">18%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* More Charts */}
      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 overflow-hidden"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">User Activity Over Time</h2>
          {/* Chart with image */}
          <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
              alt="Activity timeline"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">User Activity Timeline</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Daily Visits</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Content Interactions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Mood Tracking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAnalytics;