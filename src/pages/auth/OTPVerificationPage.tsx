import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Building2, ShieldCheck } from 'lucide-react';

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      navigate('/role-selection');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl mb-4 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-[var(--color-neutral-900)] mb-2">Verify Your Identity</h2>
          <p className="text-[var(--color-neutral-600)]">
            We've sent a 6-digit code to your email<br />
            <span>user@example.com</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-neutral-200)] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center border-2 border-[var(--color-neutral-300)] rounded-lg focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)] outline-none transition-all"
                />
              ))}
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={loading || otp.some(d => !d)}>
              {loading ? 'Verifying...' : 'Verify Code'}
            </Button>

            <div className="text-center text-sm">
              <p className="text-[var(--color-neutral-600)]">
                Didn't receive the code?{' '}
                <button type="button" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                  Resend
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
