import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold">EncouraMind</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-800 p-4 text-center">
        <p>© 2024 EncouraMind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;