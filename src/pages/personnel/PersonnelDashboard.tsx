import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { StatCard } from '../../components/ui/StatCard';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  CheckSquare,
  Clock,
  DollarSign,
  TrendingUp,
  AlertCircle,
  MapPin,
  Calendar,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { week: 'Week 1', tasks: 12 },
  { week: 'Week 2', tasks: 15 },
  { week: 'Week 3', tasks: 18 },
  { week: 'Week 4', tasks: 14 },
];

const upcomingTasks = [
  { id: 1, title: 'Property Maintenance - Building A', location: '123 Main St', time: '09:00 AM', priority: 'high' },
  { id: 2, title: 'Utility Meter Reading', location: '456 Oak Ave', time: '11:00 AM', priority: 'medium' },
  { id: 3, title: 'Healthcare Assistance', location: 'City Hospital', time: '02:00 PM', priority: 'high' },
];

const recentActivity = [
  { id: 1, action: 'Completed task: Water line repair', time: '2 hours ago' },
  { id: 2, action: 'Accepted new assignment', time: '4 hours ago' },
  { id: 3, action: 'Updated availability schedule', time: '1 day ago' },
];

export default function PersonnelDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Welcome Back, Personnel!</h1>
        <p className="text-[var(--color-neutral-600)]">Here's your performance overview</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Tasks"
          value="5"
          icon={<CheckSquare className="w-6 h-6" />}
          color="primary"
        />
        <StatCard
          title="Completed This Week"
          value="18"
          change={12.5}
          changeLabel="vs last week"
          icon={<Clock className="w-6 h-6" />}
          color="success"
        />
        <StatCard
          title="Earnings This Month"
          value="$3,240"
          change={8.3}
          changeLabel="vs last month"
          icon={<DollarSign className="w-6 h-6" />}
          color="accent"
        />
        <StatCard
          title="Performance Rating"
          value="4.8/5"
          icon={<TrendingUp className="w-6 h-6" />}
          color="secondary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                  <XAxis dataKey="week" stroke="var(--color-neutral-600)" />
                  <YAxis stroke="var(--color-neutral-600)" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="tasks"
                    stroke="var(--color-primary-600)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-primary-600)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="w-2 h-2 bg-[var(--color-primary-600)] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-[var(--color-neutral-900)]">{activity.action}</p>
                    <p className="text-xs text-[var(--color-neutral-500)]">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-4 bg-[var(--color-neutral-50)] rounded-lg">
                <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-[var(--color-neutral-900)]">{task.title}</h4>
                    <Badge variant={task.priority === 'high' ? 'error' : 'warning'} size="sm">
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-neutral-600)]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {task.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {task.time}
                    </span>
                  </div>
                </div>
                <Button variant="primary" size="sm">
                  Start Task
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-white/80 mx-auto mb-3" />
            <h4 className="text-white mb-1">Update Availability</h4>
            <p className="text-sm text-white/80">Manage your schedule</p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-secondary-600)] text-white cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-center">
            <CheckSquare className="w-12 h-12 text-white/80 mx-auto mb-3" />
            <h4 className="text-white mb-1">View All Tasks</h4>
            <p className="text-sm text-white/80">Manage assignments</p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-600)] text-white cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-center">
            <DollarSign className="w-12 h-12 text-white/80 mx-auto mb-3" />
            <h4 className="text-white mb-1">Earnings Report</h4>
            <p className="text-sm text-white/80">View your income</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
