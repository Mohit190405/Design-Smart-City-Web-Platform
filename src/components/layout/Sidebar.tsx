import { NavLink } from 'react-router-dom';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  items: {
    label: string;
    icon: React.ReactNode;
    path: string;
    badge?: string;
  }[];
  basePath: string;
}

export function Sidebar({ items, basePath }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white border-r border-[var(--color-neutral-200)] transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--color-neutral-200)]">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[var(--color-neutral-900)]">Life Sphere</div>
              <div className="text-xs text-[var(--color-neutral-500)]">Urban Super App</div>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`${basePath}${item.path}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]'
                      : 'text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-neutral-900)]'
                  }`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-[var(--color-accent-500)] text-white text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
