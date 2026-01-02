import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import {
  LayoutDashboard,
  CheckSquare,
  History,
  TrendingUp,
  GraduationCap,
  MessageSquare,
  Calendar,
  User,
  Settings,
} from 'lucide-react';
import PersonnelDashboard from '../pages/personnel/PersonnelDashboard';
import TaskManagement from '../pages/personnel/TaskManagement';
import JobHistory from '../pages/personnel/JobHistory';
import Performance from '../pages/personnel/Performance';
import Training from '../pages/personnel/Training';
import ProfilePage from '../pages/client/ProfilePage';

const sidebarItems = [
  { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
  { label: 'Tasks', icon: <CheckSquare className="w-5 h-5" />, path: '/tasks', badge: '5' },
  { label: 'Job History', icon: <History className="w-5 h-5" />, path: '/history' },
  { label: 'Performance', icon: <TrendingUp className="w-5 h-5" />, path: '/performance' },
  { label: 'Training', icon: <GraduationCap className="w-5 h-5" />, path: '/training' },
  { label: 'Availability', icon: <Calendar className="w-5 h-5" />, path: '/availability' },
  { label: 'Messages', icon: <MessageSquare className="w-5 h-5" />, path: '/messages', badge: '3' },
  { label: 'Profile', icon: <User className="w-5 h-5" />, path: '/profile' },
  { label: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
];

export default function PersonnelLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar items={sidebarItems} basePath="/personnel" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-[var(--color-neutral-50)] p-6">
          <Routes>
            <Route path="/" element={<PersonnelDashboard />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/history" element={<JobHistory />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/training" element={<Training />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
