import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { StatCard } from '../../components/ui/StatCard';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  FileText,
  CheckCircle,
  Clock,
  BookOpen,
  TrendingUp,
  Calendar,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { month: 'Jan', requests: 4 },
  { month: 'Feb', requests: 6 },
  { month: 'Mar', requests: 8 },
  { month: 'Apr', requests: 5 },
  { month: 'May', requests: 9 },
  { month: 'Jun', requests: 7 },
];

const recentRequests = [
  { id: 1, service: 'Water Bill Payment', status: 'completed', date: '2024-06-15', amount: '$45.00' },
  { id: 2, service: 'Business License Renewal', status: 'pending', date: '2024-06-14', amount: '$150.00' },
  { id: 3, service: 'Healthcare Appointment', status: 'scheduled', date: '2024-06-18', amount: '$0.00' },
];

const recommendedServices = [
  { id: 1, title: 'Online Education Courses', description: 'Explore 100+ courses', icon: '📚' },
  { id: 2, title: 'Smart Home Integration', description: 'Connect your devices', icon: '🏠' },
  { id: 3, title: 'Community Events', description: 'Join local activities', icon: '🎉' },
];

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Welcome Back!</h1>
        <p className="text-[var(--color-neutral-600)]">Here's your Life Sphere overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Requests"
          value="3"
          icon={<FileText className="w-6 h-6" />}
          color="primary"
        />
        <StatCard
          title="Completed"
          value="24"
          change={12.5}
          changeLabel="this month"
          icon={<CheckCircle className="w-6 h-6" />}
          color="success"
        />
        <StatCard
          title="Courses Enrolled"
          value="5"
          icon={<BookOpen className="w-6 h-6" />}
          color="secondary"
        />
        <StatCard
          title="Wallet Balance"
          value="$248.50"
          icon={<TrendingUp className="w-6 h-6" />}
          color="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                  <XAxis dataKey="month" stroke="var(--color-neutral-600)" />
                  <YAxis stroke="var(--color-neutral-600)" />
                  <Tooltip />
                  <Bar dataKey="requests" fill="var(--color-primary-600)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="primary" fullWidth>
              <Zap className="w-4 h-4" />
              Pay Utility Bill
            </Button>
            <Button variant="secondary" fullWidth>
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
            <Button variant="ghost" fullWidth>
              <FileText className="w-4 h-4" />
              Request Service
            </Button>
            <Button variant="ghost" fullWidth>
              <BookOpen className="w-4 h-4" />
              Browse Courses
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Requests */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Requests</CardTitle>
          <Button variant="ghost" size="sm">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 bg-[var(--color-neutral-50)] rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-neutral-900)]">{request.service}</h4>
                    <p className="text-sm text-[var(--color-neutral-500)]">{request.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      request.status === 'completed' ? 'success' :
                      request.status === 'pending' ? 'warning' : 'info'
                    }
                    size="sm"
                  >
                    {request.status}
                  </Badge>
                  <p className="text-sm text-[var(--color-neutral-900)] mt-1">{request.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Services */}
      <div>
        <h3 className="text-[var(--color-neutral-900)] mb-4">Recommended for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedServices.map((service) => (
            <Card key={service.id} hover className="cursor-pointer">
              <div className="text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">{service.title}</h4>
                <p className="text-sm text-[var(--color-neutral-600)] mb-4">{service.description}</p>
                <Button variant="ghost" size="sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
