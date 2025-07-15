import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';

const { 
  FiSearch, 
  FiFilter, 
  FiEdit, 
  FiTrash2, 
  FiEye, 
  FiPlusCircle, 
  FiChevronLeft, 
  FiChevronRight,
  FiFileText,
  FiMessageSquare,
  FiClipboard,
  FiHeart
} = FiIcons;

const AdminContent = () => {
  const content = [
    { 
      id: 1, 
      title: "Finding Peace in Uncertainty", 
      type: "article",
      category: "Anxiety",
      author: "Sarah Miller",
      status: "published",
      date: "2023-08-15"
    },
    { 
      id: 2, 
      title: "Daily Affirmation: I Am Enough", 
      type: "affirmation",
      category: "Self-Esteem",
      author: "System",
      status: "published",
      date: "2023-08-20"
    },
    { 
      id: 3, 
      title: "From Burnout to Balance", 
      type: "story",
      category: "Stress",
      author: "John Davis",
      status: "published",
      date: "2023-08-12"
    },
    { 
      id: 4, 
      title: "5-Minute Breathing Exercise", 
      type: "exercise",
      category: "Mindfulness",
      author: "Amanda Johnson",
      status: "published",
      date: "2023-08-18"
    },
    { 
      id: 5, 
      title: "Understanding Your Emotional Triggers", 
      type: "quiz",
      category: "Self-Discovery",
      author: "Michael Brown",
      status: "draft",
      date: "2023-08-22"
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return <SafeIcon icon={FiFileText} className="w-4 h-4" />;
      case 'story':
        return <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />;
      case 'affirmation':
        return <SafeIcon icon={FiHeart} className="w-4 h-4" />;
      case 'quiz':
      case 'exercise':
        return <SafeIcon icon={FiClipboard} className="w-4 h-4" />;
      default:
        return <SafeIcon icon={FiFileText} className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'story':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'affirmation':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'quiz':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'exercise':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <SafeIcon icon={FiPlusCircle} className="w-5 h-5" />
          <span>Add Content</span>
        </button>
      </div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-4 items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
      >
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search content..."
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <SafeIcon icon={FiFilter} className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <select className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>All Types</option>
            <option>Article</option>
            <option>Story</option>
            <option>Affirmation</option>
            <option>Quiz</option>
            <option>Exercise</option>
          </select>
          
          <select className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>All Categories</option>
            <option>Anxiety</option>
            <option>Depression</option>
            <option>Self-Esteem</option>
            <option>Mindfulness</option>
            <option>Stress</option>
            <option>Self-Discovery</option>
          </select>
          
          <select className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </motion.div>

      {/* Content Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Title</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Type</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Category</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Author</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {content.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 max-w-xs truncate">
                    <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1.5">{item.type}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {item.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
                        <SafeIcon icon={FiEye} className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-full transition-colors">
                        <SafeIcon icon={FiEdit} className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors">
                        <SafeIcon icon={FiTrash2} className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">20</span> results
              </p>
            </div>
            <div>
              <nav className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">2</button>
                <button className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">3</button>
                <button className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">4</button>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminContent;