import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const securityAlerts = [
  { id: 1, type: 'warning', title: 'Multiple failed login attempts', description: 'User account: john@example.com', time: '5 min ago' },
  { id: 2, type: 'info', title: 'Security patch available', description: 'System update recommended', time: '2 hours ago' },
  { id: 3, type: 'success', title: 'Backup completed successfully', description: 'All data backed up', time: '3 hours ago' },
];

export default function SecurityCenter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Security Center</h1>
        <p className="text-[var(--color-neutral-600)]">Monitor and manage platform security</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Security Score</p>
              <h3 className="text-green-600">98/100</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Active Alerts</p>
              <h3 className="text-yellow-600">3</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">System Health</p>
              <h3 className="text-blue-600">Excellent</h3>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Security Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-4 p-4 bg-[var(--color-neutral-50)] rounded-lg">
                <div className="flex-shrink-0">
                  {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                  {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {alert.type === 'info' && <Activity className="w-5 h-5 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--color-neutral-900)] mb-1">{alert.title}</h4>
                  <p className="text-sm text-[var(--color-neutral-600)]">{alert.description}</p>
                  <p className="text-xs text-[var(--color-neutral-500)] mt-2">{alert.time}</p>
                </div>
                <Badge variant={alert.type === 'warning' ? 'warning' : alert.type === 'success' ? 'success' : 'info'}>
                  {alert.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
