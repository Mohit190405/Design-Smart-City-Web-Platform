import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Award, TrendingUp, Target, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const earningsData = [
  { month: 'Jan', earnings: 2400 },
  { month: 'Feb', earnings: 2800 },
  { month: 'Mar', earnings: 2600 },
  { month: 'Apr', earnings: 3200 },
  { month: 'May', earnings: 2900 },
  { month: 'Jun', earnings: 3400 },
];

const skillsData = [
  { skill: 'Quality', value: 95 },
  { skill: 'Speed', value: 88 },
  { skill: 'Communication', value: 92 },
  { skill: 'Reliability', value: 98 },
  { skill: 'Technical', value: 85 },
];

const achievements = [
  { id: 1, title: 'Top Performer', description: 'Achieved highest rating this month', icon: '🏆', date: '2024-06-01' },
  { id: 2, title: '100 Tasks Milestone', description: 'Completed 100 successful tasks', icon: '🎯', date: '2024-05-15' },
  { id: 3, title: 'Perfect Rating', description: 'Maintained 5-star rating for 3 months', icon: '⭐', date: '2024-04-20' },
];

export default function Performance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Performance & Earnings</h1>
        <p className="text-[var(--color-neutral-600)]">Track your progress and achievements</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[var(--color-primary-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Overall Rating</p>
              <h3 className="text-[var(--color-neutral-900)]">4.8/5.0</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Success Rate</p>
              <h3 className="text-green-600">98%</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--color-secondary-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Avg Completion</p>
              <h3 className="text-[var(--color-neutral-900)]">2.3h</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-accent-100)] rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[var(--color-accent-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Achievements</p>
              <h3 className="text-[var(--color-neutral-900)]">12</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-neutral-200)" />
                <XAxis dataKey="month" stroke="var(--color-neutral-600)" />
                <YAxis stroke="var(--color-neutral-600)" />
                <Tooltip />
                <Bar dataKey="earnings" fill="var(--color-primary-600)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skills Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="var(--color-neutral-300)" />
                <PolarAngleAxis dataKey="skill" stroke="var(--color-neutral-600)" />
                <PolarRadiusAxis stroke="var(--color-neutral-600)" />
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="var(--color-primary-600)"
                  fill="var(--color-primary-600)"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-[var(--color-neutral-900)] mb-1">{achievement.title}</h4>
                <p className="text-sm text-[var(--color-neutral-600)] mb-2">{achievement.description}</p>
                <Badge variant="neutral" size="sm">{achievement.date}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
