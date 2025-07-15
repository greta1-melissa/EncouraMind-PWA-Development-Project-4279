import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiShield, FiLock, FiEye, FiUserCheck } = FiIcons;

const Privacy = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      icon: FiShield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email address)",
        "Usage data and interactions with our platform",
        "Mood tracking and reflection entries (stored locally and encrypted)",
        "Device information and browser type for technical support",
        "Cookies and similar technologies for enhanced user experience"
      ]
    },
    {
      icon: FiLock,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our mental wellness services",
        "To personalize your daily dose of encouragement",
        "To send you relevant content and updates (with your consent)",
        "To ensure platform security and prevent abuse",
        "To analyze usage patterns and improve our services"
      ]
    },
    {
      icon: FiEye,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or share your personal information with third parties",
        "Anonymous, aggregated data may be used for research purposes",
        "Information may be shared only when required by law",
        "Service providers who help us operate the platform (under strict confidentiality)",
        "Your stories and reflections remain private unless you choose to share them"
      ]
    },
    {
      icon: FiUserCheck,
      title: "Your Rights",
      content: [
        "Access and download your personal data",
        "Correct or update your information",
        "Delete your account and associated data",
        "Opt out of promotional communications",
        "Request data portability to another service"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - EncouraMind</title>
        <meta name="description" content="EncouraMind Privacy Policy - Learn how we protect your personal information and respect your privacy." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Your privacy is fundamental to our mission
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At EncouraMind, we understand that your mental wellness journey is deeply personal. 
              This Privacy Policy explains how we collect, use, and protect your information when 
              you use our platform.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We are committed to maintaining the highest standards of privacy and security. 
              Your trust is essential to our mission of providing a safe space for encouragement 
              and personal growth.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={section.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mt-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>End-to-end encryption for sensitive data</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Secure data storage with regular backups</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Regular security audits and updates</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Limited access to personal data by authorized personnel only</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mt-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us About Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> privacy@encouramind.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> EncouraMind Privacy Team</p>
            </div>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mt-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Policy Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any 
              significant changes by email or through our platform. Your continued use of 
              EncouraMind after any changes constitutes acceptance of the updated policy.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;