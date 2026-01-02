import { Button } from './Button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {icon && (
        <div className="w-16 h-16 bg-[var(--color-neutral-100)] rounded-full flex items-center justify-center mb-4 text-[var(--color-neutral-400)]">
          {icon}
        </div>
      )}
      <h3 className="text-[var(--color-neutral-900)] mb-2 text-center">{title}</h3>
      {description && (
        <p className="text-[var(--color-neutral-600)] text-center mb-6 max-w-md">
          {description}
        </p>
      )}
      {action && (
        <Button variant="primary" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
