import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EncouraMind</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Encouraging Minds, Enriching Lives. Your private space for daily encouragement, 
              mental wellness support, and personal growth.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
              <span className="text-sm">Made with care for your well-being</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/daily-dose" className="text-gray-400 hover:text-white transition-colors">
                  Daily Dose
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-400 hover:text-white transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/mood-toolkit" className="text-gray-400 hover:text-white transition-colors">
                  Mood Toolkit
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-400 hover:text-white transition-colors">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span className="text-sm">support@encouramind.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} EncouraMind. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;