import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Save } from 'lucide-react';

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">System Settings</h1>
        <p className="text-[var(--color-neutral-600)]">Configure platform settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Platform Name" defaultValue="Life Sphere" />
            <Input label="Support Email" defaultValue="support@lifesphere.com" type="email" />
            <Input label="Contact Phone" defaultValue="+1 (555) 000-0000" type="tel" />
            <Button variant="primary">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Two-Factor Authentication</p>
                <p className="text-xs text-[var(--color-neutral-500)]">Require 2FA for all admin users</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Session Timeout</p>
                <p className="text-xs text-[var(--color-neutral-500)]">Auto logout after inactivity</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            </div>
            <Button variant="primary">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
