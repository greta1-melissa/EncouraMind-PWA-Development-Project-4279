import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiFileText, FiUsers, FiShield, FiAlertTriangle } = FiIcons;

const Terms = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      icon: FiFileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using EncouraMind, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our platform",
        "These terms may be updated periodically, and continued use constitutes acceptance",
        "You must be at least 13 years old to use this service",
        "If you are under 18, you must have parental or guardian consent"
      ]
    },
    {
      icon: FiUsers,
      title: "User Responsibilities",
      content: [
        "Provide accurate and truthful information when creating your account",
        "Maintain the security of your account credentials",
        "Use the platform in a respectful and constructive manner",
        "Do not share content that is harmful, offensive, or inappropriate",
        "Respect other users' privacy and personal experiences",
        "Report any misuse or concerning behavior to our support team"
      ]
    },
    {
      icon: FiShield,
      title: "Platform Usage",
      content: [
        "EncouraMind is intended for personal mental wellness and encouragement",
        "Our content is not a substitute for professional medical or psychological care",
        "You are responsible for your own mental health decisions",
        "We encourage seeking professional help when needed",
        "Use of our platform should complement, not replace, professional treatment"
      ]
    },
    {
      icon: FiAlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "EncouraMind provides content for informational and motivational purposes only",
        "We do not guarantee specific outcomes or results from using our platform",
        "Our platform is provided 'as is' without warranties of any kind",
        "We are not liable for any damages arising from use of our service",
        "Users assume responsibility for their own actions and decisions"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - EncouraMind</title>
        <meta name="description" content="EncouraMind Terms of Service - Learn about the terms and conditions for using our mental wellness platform." />
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Understanding our platform guidelines and your responsibilities
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
              Welcome to EncouraMind
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms of Service govern your use of the EncouraMind platform. 
              By using our service, you agree to these terms and our commitment to 
              providing a safe, supportive environment for mental wellness.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our platform is designed to encourage and support your personal growth journey. 
              Please read these terms carefully to understand your rights and responsibilities.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 mt-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                Important Mental Health Notice
              </h2>
            </div>
            <p className="text-yellow-800 dark:text-yellow-200 mb-4">
              EncouraMind is designed to provide encouragement and support, but it is not a replacement 
              for professional mental health care. If you are experiencing:
            </p>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 mb-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span>Thoughts of self-harm or suicide</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span>Severe depression or anxiety</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span>Crisis situations requiring immediate help</span>
              </li>
            </ul>
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
              Please contact a mental health professional, call a crisis hotline, or seek emergency medical care immediately.
            </p>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mt-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                All content on EncouraMind, including text, graphics, logos, and software, 
                is the property of EncouraMind or its licensors and is protected by copyright laws.
              </p>
              <p>
                You may not reproduce, distribute, or create derivative works from our content 
                without express written permission.
              </p>
              <p>
                User-generated content remains the property of the user, but by submitting content, 
                you grant us a license to use it for platform operations and improvements.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mt-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About These Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> legal@encouramind.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> EncouraMind Legal Team</p>
            </div>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mt-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Terms Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We reserve the right to modify these Terms of Service at any time. 
              Significant changes will be communicated through our platform or via email. 
              Your continued use after changes constitutes acceptance of the updated terms.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;