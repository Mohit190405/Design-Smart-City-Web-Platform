import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Plus, Edit, Eye, MoreVertical } from 'lucide-react';

const mockServices = [
  { id: 1, name: 'Water & Electricity', category: 'Utilities', status: 'active', users: 2340, revenue: '$12,400' },
  { id: 2, name: 'Public Transportation', category: 'Transport', status: 'active', users: 5210, revenue: '$34,200' },
  { id: 3, name: 'Healthcare Services', category: 'Healthcare', status: 'active', users: 1890, revenue: '$45,600' },
  { id: 4, name: 'Online Education', category: 'Education', status: 'active', users: 3120, revenue: '$28,900' },
  { id: 5, name: 'Business Licensing', category: 'Business', status: 'maintenance', users: 450, revenue: '$8,200' },
  { id: 6, name: 'Waste Management', category: 'Utilities', status: 'active', users: 1650, revenue: '$6,700' },
];

export default function ServiceManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Service Management</h1>
          <p className="text-[var(--color-neutral-600)]">Manage all services and integrations</p>
        </div>
        <Button variant="primary">
          <Plus className="w-5 h-5" />
          Add New Service
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Services</p>
            <h3 className="text-[var(--color-neutral-900)]">142</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Active</p>
            <h3 className="text-green-600">128</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Under Maintenance</p>
            <h3 className="text-yellow-600">8</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Inactive</p>
            <h3 className="text-[var(--color-neutral-400)]">6</h3>
          </div>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <Card key={service.id} hover>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-[var(--color-neutral-900)] mb-1">{service.name}</h4>
                <p className="text-sm text-[var(--color-neutral-500)]">{service.category}</p>
              </div>
              <Badge variant={service.status === 'active' ? 'success' : 'warning'} size="sm">
                {service.status}
              </Badge>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-neutral-600)]">Active Users</span>
                <span className="text-[var(--color-neutral-900)]">{service.users.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-neutral-600)]">Revenue</span>
                <span className="text-[var(--color-neutral-900)]">{service.revenue}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" size="sm" fullWidth>
                <Eye className="w-4 h-4" />
                View
              </Button>
              <Button variant="ghost" size="sm" fullWidth>
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
