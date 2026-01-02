import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Mail, ArrowLeft, Building2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-[var(--color-neutral-900)] mb-2">Reset Password</h2>
          <p className="text-[var(--color-neutral-600)]">
            {sent ? 'Check your email' : 'Enter your email to reset your password'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-neutral-200)] p-8">
          {!sent ? (
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

              <Button type="submit" variant="primary" fullWidth disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </Button>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-900)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sign In
              </Link>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-[var(--color-neutral-600)]">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <Link to="/login">
                <Button variant="primary" fullWidth>
                  Return to Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
