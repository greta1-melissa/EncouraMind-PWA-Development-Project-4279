import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiBook, FiHeart, FiStar, FiClock, FiBarChart2, FiUsers, FiAward, FiCheckCircle } = FiIcons;

const Quizzes = () => {
  const quizzes = [
    {
      id: 1,
      title: "What's Your Encouragement Style?",
      description: "Discover how you naturally uplift and support others",
      icon: FiHeart,
      duration: "5 mins",
      questions: 10,
      completions: 1248,
      category: "Self-Discovery"
    },
    {
      id: 2,
      title: "Emotional Intelligence Check",
      description: "Assess your ability to understand and manage emotions",
      icon: FiBarChart2,
      duration: "8 mins",
      questions: 15,
      completions: 956,
      category: "Personal Growth"
    },
    {
      id: 3,
      title: "Stress Management Profile",
      description: "Learn about your stress response and coping mechanisms",
      icon: FiStar,
      duration: "6 mins",
      questions: 12,
      completions: 1567,
      category: "Wellness"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Self-Discovery Quizzes - EncouraMind</title>
        <meta name="description" content="Take our engaging quizzes to learn more about yourself and your emotional well-being." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Self-Discovery Quizzes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore yourself through our thoughtfully designed quizzes. Gain insights into your personality, emotional patterns, and areas for growth.
            </p>
          </motion.div>

          {/* Quiz Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={quiz.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {quiz.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {quiz.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {quiz.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiBook} className="w-4 h-4 mr-1" />
                      <span>{quiz.questions} questions</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                    <span>{quiz.completions}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Take Quiz
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;