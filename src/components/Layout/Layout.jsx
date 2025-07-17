import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold ml-2 text-gray-900 dark:text-white">EncouraMind</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
                <li><Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</Link></li>
                <li><Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-800 p-4 text-center">
        <p className="text-gray-700 dark:text-gray-300">© 2024 EncouraMind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;