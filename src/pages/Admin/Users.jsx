import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';

const { FiSearch, FiFilter, FiEdit, FiTrash2, FiEye, FiUserPlus, FiChevronLeft, FiChevronRight } = FiIcons;

const AdminUsers = () => {
  const users = [
    {
      id: 1,
      name: 'Sarah Miller',
      email: 'sarah.m@example.com',
      role: 'user',
      status: 'active',
      joined: '2023-05-12'
    },
    {
      id: 2,
      name: 'John Davis',
      email: 'john.d@example.com',
      role: 'user',
      status: 'active',
      joined: '2023-06-24'
    },
    {
      id: 3,
      name: 'Amanda Johnson',
      email: 'amanda.j@example.com',
      role: 'admin',
      status: 'active',
      joined: '2023-02-15'
    },
    {
      id: 4,
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      role: 'user',
      status: 'inactive',
      joined: '2023-07-08'
    },
    {
      id: 5,
      name: 'Lisa Wong',
      email: 'lisa.w@example.com',
      role: 'user',
      status: 'active',
      joined: '2023-08-19'
    },
    {
      id: 6,
      name: 'Robert Smith',
      email: 'robert.s@example.com',
      role: 'editor',
      status: 'active',
      joined: '2023-04-30'
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'editor':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <SafeIcon icon={FiUserPlus} className="w-5 h-5" />
          <span>Add User</span>
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
              placeholder="Search users..."
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <SafeIcon icon={FiFilter} className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <select className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>User</option>
          </select>
          <select className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </motion.div>

      {/* Users Table */}
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
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Name</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Email</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Role</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Joined</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">{user.name.charAt(0)}</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {new Date(user.joined).toLocaleDateString()}
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                <span className="font-medium">12</span> results
              </p>
            </div>
            <div>
              <nav className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">2</button>
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

export default AdminUsers;