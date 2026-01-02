import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Search, Filter, Plus, Edit, Trash2, MoreVertical, UserPlus } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', role: 'client', status: 'active', joinDate: '2024-01-15', tasks: 45 },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'personnel', status: 'active', joinDate: '2024-02-20', tasks: 128 },
  { id: 3, name: 'Mike Davis', email: 'mike@example.com', role: 'client', status: 'inactive', joinDate: '2024-03-10', tasks: 12 },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', role: 'admin', status: 'active', joinDate: '2023-12-05', tasks: 234 },
  { id: 5, name: 'David Wilson', email: 'david@example.com', role: 'personnel', status: 'active', joinDate: '2024-04-01', tasks: 87 },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', role: 'client', status: 'pending', joinDate: '2024-06-15', tasks: 3 },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'error';
      case 'personnel': return 'secondary';
      default: return 'primary';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'neutral';
      case 'pending': return 'warning';
      default: return 'neutral';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">User Management</h1>
          <p className="text-[var(--color-neutral-600)]">Manage all users across the platform</p>
        </div>
        <Button variant="primary">
          <UserPlus className="w-5 h-5" />
          Add New User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Users</p>
            <h3 className="text-[var(--color-neutral-900)]">5,234</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Active</p>
            <h3 className="text-green-600">4,892</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Pending</p>
            <h3 className="text-yellow-600">124</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Inactive</p>
            <h3 className="text-[var(--color-neutral-400)]">218</h3>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5" />}
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 bg-white border border-[var(--color-neutral-300)] rounded-lg focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)] outline-none"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="personnel">Personnel</option>
            </select>
            <Button variant="ghost">
              <Filter className="w-5 h-5" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* User Table */}
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Tasks
                </th>
                <th className="px-6 py-3 text-right text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[var(--color-neutral-100)]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--color-neutral-50)] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="text-sm text-[var(--color-neutral-900)]">{user.name}</div>
                        <div className="text-sm text-[var(--color-neutral-500)]">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getRoleBadgeVariant(user.role)} size="sm">
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getStatusBadgeVariant(user.status)} size="sm">
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-neutral-600)]">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-neutral-900)]">
                    {user.tasks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-[var(--color-neutral-600)]" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-[var(--color-neutral-600)]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
