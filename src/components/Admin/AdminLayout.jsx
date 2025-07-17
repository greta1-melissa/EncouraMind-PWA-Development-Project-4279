import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuthStore } from '../../store/authStore';

const { FiHome, FiUsers, FiFileText, FiBarChart2, FiSettings, FiLogOut, FiMenu, FiX } = FiIcons;

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: FiHome },
    { name: 'Users', href: '/admin/users', icon: FiUsers },
    { name: 'Content', href: '/admin/content', icon: FiFileText },
    { name: 'Analytics', href: '/admin/analytics', icon: FiBarChart2 },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - EncouraMind</title>
        <meta name="description" content="EncouraMind Admin Dashboard - Manage your mental wellness platform." />
        <meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
      </Helmet>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar for desktop */}
        <aside
          className={`fixed inset-y-0 z-50 flex-shrink-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            isSidebarOpen ? 'lg:w-64' : 'lg:w-20'
          } ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200 dark:border-gray-700">
              <div className={`flex items-center ${!isSidebarOpen && 'lg:justify-center'}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                {isSidebarOpen && (
                  <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
                    Admin
                  </span>
                )}
              </div>
              <button
                onClick={toggleMobileSidebar}
                className="p-2 rounded-md lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar content */}
            <div className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary dark:text-primary'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } ${!isSidebarOpen && 'lg:justify-center'}`}
                  >
                    <SafeIcon
                      icon={item.icon}
                      className={`w-6 h-6 ${!isSidebarOpen && 'lg:mr-0'}`}
                    />
                    {isSidebarOpen && (
                      <span className="ml-3 text-sm font-medium">{item.name}</span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Sidebar footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.charAt(0) || 'A'}
                  </span>
                </div>
                {isSidebarOpen && (
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                      {user?.name || 'Admin User'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.role || 'admin'}
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className={`mt-4 flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 ${
                  !isSidebarOpen && 'lg:justify-center'
                }`}
              >
                <SafeIcon icon={FiLogOut} className="w-5 h-5" />
                {isSidebarOpen && <span className="ml-2">Sign Out</span>}
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar backdrop */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
            onClick={toggleMobileSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Topbar */}
          <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <button
                    onClick={toggleMobileSidebar}
                    className="p-2 rounded-md lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <SafeIcon icon={FiMenu} className="w-6 h-6" />
                  </button>
                  <button
                    onClick={toggleSidebar}
                    className="hidden lg:block p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <SafeIcon icon={FiMenu} className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="px-3 py-1 text-sm text-primary hover:text-accent transition-colors"
                  >
                    View Site
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
            <div className="py-6">
              <div className="px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Outlet />
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;