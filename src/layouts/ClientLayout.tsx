import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import {
  LayoutDashboard,
  Briefcase,
  BookOpen,
  Wallet,
  MessageSquare,
  FileText,
  Settings,
  User,
} from 'lucide-react';
import ClientDashboard from '../pages/client/ClientDashboard';
import ServiceAccess from '../pages/client/ServiceAccess';
import MyRequests from '../pages/client/MyRequests';
import Learning from '../pages/client/Learning';
import MessagesPage from '../pages/client/MessagesPage';
import ProfilePage from '../pages/client/ProfilePage';

const sidebarItems = [
  { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
  { label: 'Services', icon: <Briefcase className="w-5 h-5" />, path: '/services' },
  { label: 'My Requests', icon: <FileText className="w-5 h-5" />, path: '/requests', badge: '3' },
  { label: 'Learning', icon: <BookOpen className="w-5 h-5" />, path: '/learning' },
  { label: 'Wallet', icon: <Wallet className="w-5 h-5" />, path: '/wallet' },
  { label: 'Messages', icon: <MessageSquare className="w-5 h-5" />, path: '/messages', badge: '2' },
  { label: 'Profile', icon: <User className="w-5 h-5" />, path: '/profile' },
  { label: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
];

export default function ClientLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar items={sidebarItems} basePath="/client" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-[var(--color-neutral-50)] p-6">
          <Routes>
            <Route path="/" element={<ClientDashboard />} />
            <Route path="/services" element={<ServiceAccess />} />
            <Route path="/requests" element={<MyRequests />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
