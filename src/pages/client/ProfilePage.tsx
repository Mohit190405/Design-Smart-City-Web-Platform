import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { Camera, Save } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-[var(--color-neutral-900)]">Profile & Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <Card>
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary-700)] transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-[var(--color-neutral-900)] mb-1">{user?.name}</h3>
            <p className="text-sm text-[var(--color-neutral-600)] capitalize">{user?.role}</p>
          </div>
        </Card>

        {/* Profile Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full Name" defaultValue={user?.name} />
              <Input label="Email" type="email" defaultValue={user?.email} />
              <Input label="Phone" type="tel" defaultValue="+1 (555) 000-0000" />
              <Input label="Date of Birth" type="date" defaultValue="1990-01-01" />
            </div>
            <Input label="Address" defaultValue="123 Main St, City, State 12345" />
            <Button variant="primary">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Input label="Confirm New Password" type="password" placeholder="••••••••" />
            <Button variant="primary">Update Password</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Email Notifications</p>
                <p className="text-xs text-[var(--color-neutral-500)]">Receive updates via email</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">SMS Notifications</p>
                <p className="text-xs text-[var(--color-neutral-500)]">Receive updates via SMS</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Newsletter</p>
                <p className="text-xs text-[var(--color-neutral-500)]">Monthly platform updates</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
