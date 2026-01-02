import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { FileText, Eye, Download } from 'lucide-react';

const requests = [
  {
    id: 1,
    title: 'Water Bill Payment - June 2024',
    category: 'Utilities',
    status: 'completed',
    date: '2024-06-15',
    amount: '$45.00',
    requestedOn: '2024-06-10',
  },
  {
    id: 2,
    title: 'Business License Renewal',
    category: 'Business',
    status: 'pending',
    date: '2024-06-14',
    amount: '$150.00',
    requestedOn: '2024-06-14',
  },
  {
    id: 3,
    title: 'Healthcare Appointment Booking',
    category: 'Healthcare',
    status: 'scheduled',
    date: '2024-06-18',
    amount: '$0.00',
    requestedOn: '2024-06-12',
  },
  {
    id: 4,
    title: 'Property Tax Payment',
    category: 'Housing',
    status: 'processing',
    date: '2024-06-13',
    amount: '$1,200.00',
    requestedOn: '2024-06-13',
  },
  {
    id: 5,
    title: 'Transit Pass Renewal',
    category: 'Transport',
    status: 'completed',
    date: '2024-06-01',
    amount: '$50.00',
    requestedOn: '2024-05-28',
  },
];

export default function MyRequests() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warning';
      case 'processing': return 'info';
      case 'scheduled': return 'secondary';
      default: return 'neutral';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[var(--color-neutral-900)] mb-2">My Requests</h1>
          <p className="text-[var(--color-neutral-600)]">Track and manage all your service requests</p>
        </div>
        <Button variant="primary">
          <FileText className="w-5 h-5" />
          New Request
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Total Requests</p>
            <h3 className="text-[var(--color-neutral-900)]">27</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Pending</p>
            <h3 className="text-yellow-600">3</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Completed</p>
            <h3 className="text-green-600">24</h3>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">This Month</p>
            <h3 className="text-[var(--color-neutral-900)]">5</h3>
          </div>
        </Card>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[var(--color-primary-600)]" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-[var(--color-neutral-900)] mb-1">{request.title}</h4>
                <div className="flex flex-wrap gap-2 text-sm text-[var(--color-neutral-600)]">
                  <span>{request.category}</span>
                  <span>•</span>
                  <span>Requested: {request.requestedOn}</span>
                  {request.date && (
                    <>
                      <span>•</span>
                      <span>Date: {request.date}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <Badge variant={getStatusVariant(request.status)} className="mb-2">
                    {request.status}
                  </Badge>
                  <p className="text-sm text-[var(--color-neutral-900)]">{request.amount}</p>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                    <Eye className="w-5 h-5 text-[var(--color-neutral-600)]" />
                  </button>
                  {request.status === 'completed' && (
                    <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                      <Download className="w-5 h-5 text-[var(--color-neutral-600)]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
