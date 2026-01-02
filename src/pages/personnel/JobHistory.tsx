import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Download, Eye } from 'lucide-react';

const jobHistory = [
  { id: 1, title: 'Water Line Repair', date: '2024-06-15', payment: '$120', rating: 5, status: 'completed' },
  { id: 2, title: 'Meter Reading Service', date: '2024-06-14', payment: '$45', rating: 5, status: 'completed' },
  { id: 3, title: 'Patient Transport', date: '2024-06-13', payment: '$80', rating: 4, status: 'completed' },
  { id: 4, title: 'IT Setup Support', date: '2024-06-10', payment: '$95', rating: 5, status: 'completed' },
  { id: 5, title: 'Building Maintenance', date: '2024-06-08', payment: '$150', rating: 5, status: 'completed' },
  { id: 6, title: 'Equipment Installation', date: '2024-06-05', payment: '$200', rating: 4, status: 'completed' },
];

export default function JobHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Job History</h1>
        <p className="text-[var(--color-neutral-600)]">View your completed tasks and earnings</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Jobs</p>
            <h3 className="text-[var(--color-neutral-900)]">128</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">This Month</p>
            <h3 className="text-[var(--color-neutral-900)]">24</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Earnings</p>
            <h3 className="text-green-600">$12,840</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Avg Rating</p>
            <h3 className="text-[var(--color-accent-600)]">4.8 ⭐</h3>
          </div>
        </Card>
      </div>

      {/* History Table */}
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs text-[var(--color-neutral-600)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[var(--color-neutral-100)]">
              {jobHistory.map((job) => (
                <tr key={job.id} className="hover:bg-[var(--color-neutral-50)] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[var(--color-neutral-900)]">{job.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-neutral-600)]">
                    {job.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {job.payment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {'⭐'.repeat(job.rating)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="success" size="sm">{job.status}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-[var(--color-neutral-600)]" />
                      </button>
                      <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-[var(--color-neutral-600)]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
