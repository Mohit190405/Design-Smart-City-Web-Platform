import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Mail, Lock, Building2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      // Redirect based on role
      if (email.includes('admin')) {
        navigate('/admin');
      } else if (email.includes('personnel') || email.includes('staff')) {
        navigate('/personnel');
      } else {
        navigate('/client');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Life Sphere</h1>
          <p className="text-[var(--color-neutral-600)]">Urban Super App – Sign in to continue</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-neutral-200)] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-5 h-5" />}
              required
            />

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[var(--color-neutral-300)]" />
                <span className="text-[var(--color-neutral-600)]">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-neutral-200)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[var(--color-neutral-500)]">Quick Access Demo</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => { setEmail('admin@lifesphere.com'); setPassword('demo'); }}
              >
                Admin
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => { setEmail('client@lifesphere.com'); setPassword('demo'); }}
              >
                Client
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => { setEmail('personnel@lifesphere.com'); setPassword('demo'); }}
              >
                Personnel
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-[var(--color-neutral-600)]">
            Don't have an account?{' '}
            <Link to="/register" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
              Create Account
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-[var(--color-neutral-500)] mt-6">
          Powered by Smart City Infrastructure
        </p>
      </div>
    </div>
  );
}
