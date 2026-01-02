import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import OTPVerificationPage from './pages/auth/OTPVerificationPage';
import RoleSelectionPage from './pages/auth/RoleSelectionPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import PersonnelLayout from './layouts/PersonnelLayout';

// Protected Route Component
function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={isAuthenticated ? <Navigate to={`/${user?.role}`} /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-otp" element={<OTPVerificationPage />} />
      <Route path="/role-selection" element={<RoleSelectionPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      />

      {/* Client Routes */}
      <Route
        path="/client/*"
        element={
          <ProtectedRoute allowedRoles={['client']}>
            <ClientLayout />
          </ProtectedRoute>
        }
      />

      {/* Personnel Routes */}
      <Route
        path="/personnel/*"
        element={
          <ProtectedRoute allowedRoles={['personnel']}>
            <PersonnelLayout />
          </ProtectedRoute>
        }
      />

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}
