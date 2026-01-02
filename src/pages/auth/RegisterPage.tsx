import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Input';
import { User, Mail, Lock, Phone, Building2 } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration
    setTimeout(() => {
      navigate('/verify-otp');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Create Account</h1>
          <p className="text-[var(--color-neutral-600)]">Join the Life Sphere community</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-neutral-200)] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                type="text"
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                icon={<User className="w-5 h-5" />}
                required
              />

              <Input
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                icon={<Mail className="w-5 h-5" />}
                required
              />

              <Input
                type="tel"
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                icon={<Phone className="w-5 h-5" />}
                required
              />

              <Select
                label="Account Type"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                options={[
                  { value: 'client', label: 'Citizen / Client' },
                  { value: 'personnel', label: 'Service Personnel' },
                  { value: 'business', label: 'Business' },
                ]}
              />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                icon={<Lock className="w-5 h-5" />}
                required
              />

              <Input
                type="password"
                label="Confirm Password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                icon={<Lock className="w-5 h-5" />}
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded border-[var(--color-neutral-300)]" required />
              <label className="text-sm text-[var(--color-neutral-600)]">
                I agree to the{' '}
                <a href="#" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[var(--color-neutral-600)]">
            Already have an account?{' '}
            <Link to="/login" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
