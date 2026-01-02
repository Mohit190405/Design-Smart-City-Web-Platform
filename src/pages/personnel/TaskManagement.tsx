import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MapPin, Clock, DollarSign, CheckCircle, XCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Property Maintenance - Building A',
    description: 'Repair water leakage in apartment 3B',
    location: '123 Main St, Apt 3B',
    scheduledTime: '09:00 AM - 11:00 AM',
    date: '2024-06-20',
    priority: 'high',
    payment: '$120',
    status: 'pending',
  },
  {
    id: 2,
    title: 'Utility Meter Reading',
    description: 'Monthly meter reading for residential area',
    location: '456 Oak Ave',
    scheduledTime: '11:00 AM - 01:00 PM',
    date: '2024-06-20',
    priority: 'medium',
    payment: '$45',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Healthcare Assistance',
    description: 'Patient transport to City Hospital',
    location: 'City Hospital',
    scheduledTime: '02:00 PM - 04:00 PM',
    date: '2024-06-20',
    priority: 'high',
    payment: '$80',
    status: 'in-progress',
  },
  {
    id: 4,
    title: 'Educational Support',
    description: 'IT setup for online learning center',
    location: '789 Education Center',
    scheduledTime: '10:00 AM - 12:00 PM',
    date: '2024-06-21',
    priority: 'low',
    payment: '$95',
    status: 'pending',
  },
];

export default function TaskManagement() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Task Management</h1>
          <p className="text-[var(--color-neutral-600)]">Manage your assigned tasks and jobs</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Tasks</p>
            <h3 className="text-[var(--color-neutral-900)]">{tasks.length}</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Pending</p>
            <h3 className="text-yellow-600">{tasks.filter(t => t.status === 'pending').length}</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">In Progress</p>
            <h3 className="text-blue-600">{tasks.filter(t => t.status === 'in-progress').length}</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Value</p>
            <h3 className="text-green-600">$340</h3>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex gap-2">
          {['all', 'pending', 'in-progress', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                filter === status
                  ? 'bg-[var(--color-primary-600)] text-white'
                  : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-200)]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </Card>

      {/* Tasks List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredTasks.map((task) => (
          <Card key={task.id}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[var(--color-primary-600)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-[var(--color-neutral-900)]">{task.title}</h4>
                      <Badge variant={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'neutral'} size="sm">
                        {task.priority}
                      </Badge>
                      <Badge variant={task.status === 'pending' ? 'warning' : task.status === 'in-progress' ? 'info' : 'success'} size="sm">
                        {task.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-[var(--color-neutral-600)] mb-2">{task.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--color-neutral-600)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {task.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {task.scheduledTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {task.payment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {task.status === 'pending' && (
                  <>
                    <Button variant="primary" size="sm">
                      <CheckCircle className="w-4 h-4" />
                      Accept
                    </Button>
                    <Button variant="ghost" size="sm">
                      <XCircle className="w-4 h-4" />
                      Decline
                    </Button>
                  </>
                )}
                {task.status === 'in-progress' && (
                  <Button variant="primary" size="sm">
                    <CheckCircle className="w-4 h-4" />
                    Complete Task
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
