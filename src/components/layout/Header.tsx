import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Search, Bell, Settings, LogOut, User } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: 'New service request assigned', time: '5 min ago', unread: true },
    { id: 2, title: 'System update scheduled', time: '1 hour ago', unread: true },
    { id: 3, title: 'Monthly report available', time: '2 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="h-16 bg-white border-b border-[var(--color-neutral-200)] flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-neutral-400)]" />
          <input
            type="text"
            placeholder="Search services, users, or documents..."
            className="w-full pl-10 pr-4 py-2 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5 text-[var(--color-neutral-600)]" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-error)] rounded-full"></span>
            )}
          </button>

          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowNotifications(false)}
              ></div>
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-[var(--color-neutral-200)] z-20">
                <div className="p-4 border-b border-[var(--color-neutral-200)]">
                  <div className="flex items-center justify-between">
                    <h3>Notifications</h3>
                    <span className="text-sm text-[var(--color-neutral-500)]">{unreadCount} new</span>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-50)] cursor-pointer ${
                        notification.unread ? 'bg-[var(--color-primary-50)]' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-sm text-[var(--color-neutral-900)]">{notification.title}</p>
                          <p className="text-xs text-[var(--color-neutral-500)] mt-1">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-[var(--color-primary-600)] rounded-full mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-[var(--color-neutral-200)] text-center">
                  <button className="text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                    View All Notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
          >
            <img
              src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
              alt={user?.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left hidden md:block">
              <div className="text-sm text-[var(--color-neutral-900)]">{user?.name}</div>
              <div className="text-xs text-[var(--color-neutral-500)] capitalize">{user?.role}</div>
            </div>
          </button>

          {showProfileMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowProfileMenu(false)}
              ></div>
              <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl border border-[var(--color-neutral-200)] z-20">
                <div className="p-4 border-b border-[var(--color-neutral-200)]">
                  <div className="text-sm text-[var(--color-neutral-900)]">{user?.name}</div>
                  <div className="text-xs text-[var(--color-neutral-500)]">{user?.email}</div>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                </div>
                <div className="p-2 border-t border-[var(--color-neutral-200)]">
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-error)] hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
