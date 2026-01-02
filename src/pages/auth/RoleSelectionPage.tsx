import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Building2, UserCircle, Users, Briefcase } from 'lucide-react';

export default function RoleSelectionPage() {
  const navigate = useNavigate();
  const { selectRole } = useAuth();

  const roles = [
    {
      id: 'admin',
      title: 'Administrator',
      description: 'Full system access and management capabilities',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'client',
      title: 'Citizen / Client',
      description: 'Access services, education, and community features',
      icon: <UserCircle className="w-8 h-8" />,
      color: 'from-[var(--color-primary-500)] to-[var(--color-primary-600)]',
    },
    {
      id: 'personnel',
      title: 'Service Personnel',
      description: 'Manage tasks, jobs, and service delivery',
      icon: <Users className="w-8 h-8" />,
      color: 'from-[var(--color-secondary-500)] to-[var(--color-secondary-600)]',
    },
  ];

  const handleSelectRole = (roleId: string) => {
    selectRole(roleId as 'admin' | 'client' | 'personnel');
    navigate(`/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">Select Your Role</h1>
          <p className="text-[var(--color-neutral-600)]">Choose how you'd like to access Life Sphere</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleSelectRole(role.id)}
              className="bg-white rounded-2xl shadow-lg border-2 border-[var(--color-neutral-200)] p-8 hover:border-[var(--color-primary-500)] hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-200`}>
                {role.icon}
              </div>
              <h3 className="text-[var(--color-neutral-900)] mb-2">{role.title}</h3>
              <p className="text-[var(--color-neutral-600)] text-sm">{role.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
