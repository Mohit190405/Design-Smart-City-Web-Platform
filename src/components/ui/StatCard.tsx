import { Card } from './Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}

export function StatCard({ title, value, change, changeLabel, icon, color = 'primary' }: StatCardProps) {
  const colorStyles = {
    primary: 'from-[var(--color-primary-500)] to-[var(--color-primary-600)]',
    secondary: 'from-[var(--color-secondary-500)] to-[var(--color-secondary-600)]',
    accent: 'from-[var(--color-accent-500)] to-[var(--color-accent-600)]',
    success: 'from-green-500 to-green-600',
    warning: 'from-yellow-500 to-yellow-600',
    error: 'from-red-500 to-red-600',
  };

  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-[var(--color-neutral-600)] mb-1">{title}</p>
          <h3 className="text-[var(--color-neutral-900)] mb-2">{value}</h3>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              {isPositive && <TrendingUp className="w-4 h-4 text-green-600" />}
              {isNegative && <TrendingDown className="w-4 h-4 text-red-600" />}
              <span className={`text-sm ${isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-[var(--color-neutral-600)]'}`}>
                {isPositive && '+'}{change}%
              </span>
              {changeLabel && (
                <span className="text-sm text-[var(--color-neutral-500)]">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${colorStyles[color]} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
      </div>
    </Card>
  );
}
