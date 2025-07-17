import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';

const { FiUsers, FiFileText, FiActivity, FiBarChart2, FiAlertTriangle, FiCheckCircle } = FiIcons;

const AdminDashboard = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '1,248',
      icon: FiUsers,
      change: '+12%',
      color: 'bg-primary'
    },
    {
      name: 'Daily Engagements',
      value: '586',
      icon: FiActivity,
      change: '+18%',
      color: 'bg-primary'
    },
    {
      name: 'Content Items',
      value: '142',
      icon: FiFileText,
      change: '+5%',
      color: 'bg-accent'
    },
    {
      name: 'Active Sessions',
      value: '24',
      icon: FiBarChart2,
      change: '-2%',
      color: 'bg-secondary'
    }
  ];

  const recentActivity = [
    {
      user: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      action: 'Created a new account',
      time: '12 minutes ago',
      status: 'success'
    },
    {
      user: 'Mark Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      action: 'Submitted a new story',
      time: '45 minutes ago',
      status: 'success'
    },
    {
      user: 'Lisa Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      action: 'Reported a content issue',
      time: '2 hours ago',
      status: 'warning'
    },
    {
      user: 'James Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      action: 'Updated profile information',
      time: '3 hours ago',
      status: 'success'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleString()}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <span
                    className={`ml-2 text-xs font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center">
                <img 
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.user}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{activity.action}</p>
                    <div className="ml-2">{getStatusIcon(activity.status)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-primary dark:text-primary hover:underline">
            View all activity
          </button>
        </motion.div>

        {/* Quick Stats Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Usage Analytics</h2>
          {/* Chart with image */}
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Analytics chart"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Analytics visualization</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Daily Users</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">128</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Session</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">6.4m</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Retention</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">78%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
      >
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary p-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
            Add New User
          </button>
          <button className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary p-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
            Create Content
          </button>
          <button className="bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent p-4 rounded-lg hover:bg-accent/20 dark:hover:bg-accent/30 transition-colors">
            View Reports
          </button>
          <button className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary p-4 rounded-lg hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors">
            System Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;