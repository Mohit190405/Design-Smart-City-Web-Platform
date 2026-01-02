import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { StatCard } from '../../components/ui/StatCard';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  Users,
  Briefcase,
  TrendingUp,
  Activity,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const userGrowthData = [
  { month: 'Jan', users: 1200 },
  { month: 'Feb', users: 1800 },
  { month: 'Mar', users: 2400 },
  { month: 'Apr', users: 3200 },
  { month: 'May', users: 4100 },
  { month: 'Jun', users: 5200 },
];

const serviceData = [
  { name: 'Education', value: 2400, color: 'var(--color-primary-500)' },
  { name: 'Healthcare', value: 1800, color: 'var(--color-secondary-500)' },
  { name: 'Transport', value: 1200, color: 'var(--color-accent-500)' },
  { name: 'Utilities', value: 800, color: '#10b981' },
];

const recentActivities = [
  { id: 1, user: 'John Smith', action: 'registered as new client', time: '2 min ago', type: 'user' },
  { id: 2, user: 'Service #1234', action: 'marked as completed', time: '15 min ago', type: 'service' },
  { id: 3, user: 'Admin Sarah', action: 'updated system settings', time: '1 hour ago', type: 'admin' },
  { id: 4, user: 'Personnel Mike', action: 'completed 5 tasks', time: '2 hours ago', type: 'personnel' },
  { id: 5, user: 'New Business', action: 'registered business account', time: '3 hours ago', type: 'business' },
];

const pendingRequests = [
  { id: 1, title: 'Business License Verification', user: 'Acme Corp', priority: 'high', time: '30 min ago' },
  { id: 2, title: 'Service Provider Application', user: 'John Doe', priority: 'medium', time: '1 hour ago' },
  { id: 3, title: 'System Access Request', user: 'Jane Smith', priority: 'low', time: '2 hours ago' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Admin Dashboard</h1>
        <p className="text-[var(--color-neutral-600)]">
          Welcome back! Here's what's happening with Life Sphere today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="5,234"
          change={12.5}
          changeLabel="vs last month"
          icon={<Users className="w-6 h-6" />}
          color="primary"
        />
        <StatCard
          title="Active Services"
          value="142"
          change={8.3}
          changeLabel="vs last week"
          icon={<Briefcase className="w-6 h-6" />}
          color="secondary"
        />
        <StatCard
          title="System Uptime"
          value="99.8%"
          change={0.2}
          changeLabel="this month"
          icon={<Activity className="w-6 h-6" />}
          color="success"
        />
        <StatCard
          title="Revenue"
          value="$48.2K"
          change={15.3}
          changeLabel="vs last month"
          icon={<TrendingUp className="w-6 h-6" />}
          color="accent"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                <XAxis dataKey="month" stroke="var(--color-neutral-600)" />
                <YAxis stroke="var(--color-neutral-600)" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="var(--color-primary-600)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-primary-600)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Activity & Requests Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activities</CardTitle>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-[var(--color-neutral-100)] last:border-0 last:pb-0">
                  <div className="w-8 h-8 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-[var(--color-primary-600)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--color-neutral-900)]">
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <p className="text-xs text-[var(--color-neutral-500)] mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Requests</CardTitle>
            <Badge variant="warning">{pendingRequests.length} Pending</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
                  <div className="flex-shrink-0">
                    {request.priority === 'high' ? (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-[var(--color-neutral-400)]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--color-neutral-900)]">{request.title}</p>
                    <p className="text-xs text-[var(--color-neutral-500)]">
                      {request.user} • {request.time}
                    </p>
                  </div>
                  <Badge variant={request.priority === 'high' ? 'error' : request.priority === 'medium' ? 'warning' : 'neutral'} size="sm">
                    {request.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 mb-1">Tasks Completed Today</p>
              <h3 className="text-white">247</h3>
            </div>
            <CheckCircle className="w-12 h-12 text-white/30" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-secondary-600)] text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 mb-1">Active Personnel</p>
              <h3 className="text-white">89</h3>
            </div>
            <Users className="w-12 h-12 text-white/30" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-600)] text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 mb-1">Pending Approvals</p>
              <h3 className="text-white">12</h3>
            </div>
            <Clock className="w-12 h-12 text-white/30" />
          </div>
        </Card>
      </div>
    </div>
  );
}
