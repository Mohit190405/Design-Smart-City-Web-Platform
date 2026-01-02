import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Shield,
  FileText,
  Briefcase,
  Activity,
} from 'lucide-react';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';
import ServiceManagement from '../pages/admin/ServiceManagement';
import Analytics from '../pages/admin/Analytics';
import SecurityCenter from '../pages/admin/SecurityCenter';
import SystemSettings from '../pages/admin/SystemSettings';

const sidebarItems = [
  { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
  { label: 'User Management', icon: <Users className="w-5 h-5" />, path: '/users' },
  { label: 'Service Management', icon: <Briefcase className="w-5 h-5" />, path: '/services' },
  { label: 'Analytics & Reports', icon: <BarChart3 className="w-5 h-5" />, path: '/analytics' },
  { label: 'Security Center', icon: <Shield className="w-5 h-5" />, path: '/security', badge: '3' },
  { label: 'System Logs', icon: <Activity className="w-5 h-5" />, path: '/logs' },
  { label: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
];

export default function AdminLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar items={sidebarItems} basePath="/admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-[var(--color-neutral-50)] p-6">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/services" element={<ServiceManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/security" element={<SecurityCenter />} />
            <Route path="/settings" element={<SystemSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
