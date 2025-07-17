import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AdminLayout from './components/Admin/AdminLayout';
import InstallPrompt from './components/PWA/InstallPrompt';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import DailyDose from './pages/DailyDose';
import Stories from './pages/Stories';
import MoodToolkit from './pages/MoodToolkit';
import Quizzes from './pages/Quizzes';
import Articles from './pages/Articles';
import Community from './pages/Community';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Admin Pages
import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import Content from './pages/Admin/Content';
import Analytics from './pages/Admin/Analytics';
import Settings from './pages/Admin/Settings';

// Theme handling
import { useThemeStore } from './store/themeStore';
import { useAuthStore } from './store/authStore';

function App() {
  const { isDarkMode } = useThemeStore();
  const { checkSession } = useAuthStore();
  const location = useLocation();
  
  // Check authentication session on mount
  useEffect(() => {
    checkSession();
  }, [checkSession]);
  
  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <InstallPrompt />
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="daily-dose" element={<DailyDose />} />
          <Route path="stories" element={<Stories />} />
          <Route path="mood-toolkit" element={<MoodToolkit />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="articles" element={<Articles />} />
          <Route path="community" element={<Community />} />
          
          {/* Protected Routes */}
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Route>
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute adminOnly={true}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="content" element={<Content />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;