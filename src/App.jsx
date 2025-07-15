import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Auth Store
import { useAuthStore } from './store/authStore';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Default redirect to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;