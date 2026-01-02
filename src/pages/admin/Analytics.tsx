import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Download, Calendar } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
  { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000 },
  { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
  { month: 'May', revenue: 58000, expenses: 36000, profit: 22000 },
  { month: 'Jun', revenue: 67000, expenses: 40000, profit: 27000 },
];

const serviceUsageData = [
  { service: 'Education', usage: 4200 },
  { service: 'Healthcare', usage: 3800 },
  { service: 'Transport', usage: 5200 },
  { service: 'Utilities', usage: 3200 },
  { service: 'Business', usage: 1800 },
];

const userActivityData = [
  { day: 'Mon', clients: 420, personnel: 89, admin: 12 },
  { day: 'Tue', clients: 380, personnel: 92, admin: 15 },
  { day: 'Wed', clients: 450, personnel: 85, admin: 13 },
  { day: 'Thu', clients: 490, personnel: 98, admin: 14 },
  { day: 'Fri', clients: 520, personnel: 102, admin: 16 },
  { day: 'Sat', clients: 350, personnel: 67, admin: 8 },
  { day: 'Sun', clients: 280, personnel: 54, admin: 6 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Analytics & Reports</h1>
          <p className="text-[var(--color-neutral-600)]">Comprehensive platform insights and metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">
            <Calendar className="w-5 h-5" />
            Last 30 Days
          </Button>
          <Button variant="primary">
            <Download className="w-5 h-5" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Revenue Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue & Profit Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-secondary-500)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-secondary-500)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
              <XAxis dataKey="month" stroke="var(--color-neutral-600)" />
              <YAxis stroke="var(--color-neutral-600)" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-primary-600)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="var(--color-secondary-600)"
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Service Usage by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={serviceUsageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                <XAxis type="number" stroke="var(--color-neutral-600)" />
                <YAxis dataKey="service" type="category" stroke="var(--color-neutral-600)" />
                <Tooltip />
                <Bar dataKey="usage" fill="var(--color-primary-600)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Activity */}
        <Card>
          <CardHeader>
            <CardTitle>User Activity by Role</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                <XAxis dataKey="day" stroke="var(--color-neutral-600)" />
                <YAxis stroke="var(--color-neutral-600)" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="clients" stroke="var(--color-primary-600)" strokeWidth={2} />
                <Line type="monotone" dataKey="personnel" stroke="var(--color-secondary-600)" strokeWidth={2} />
                <Line type="monotone" dataKey="admin" stroke="var(--color-accent-600)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
