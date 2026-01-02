import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Search, Send } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Support Team', lastMessage: 'Your request has been processed', time: '10 min ago', unread: 2 },
  { id: 2, name: 'John Doe (Personnel)', lastMessage: 'Task completed successfully', time: '1 hour ago', unread: 0 },
  { id: 3, name: 'System Notifications', lastMessage: 'New course available', time: '2 hours ago', unread: 1 },
];

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[var(--color-neutral-900)]">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="overflow-hidden">
          <div className="p-4 border-b border-[var(--color-neutral-200)]">
            <Input
              placeholder="Search messages..."
              icon={<Search className="w-5 h-5" />}
            />
          </div>
          <div className="overflow-y-auto h-full">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 border-b border-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-50)] cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${conv.name}`}
                    alt={conv.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm text-[var(--color-neutral-900)] truncate">{conv.name}</h4>
                      <span className="text-xs text-[var(--color-neutral-500)]">{conv.time}</span>
                    </div>
                    <p className="text-sm text-[var(--color-neutral-600)] truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white">{conv.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Message Thread */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="p-4 border-b border-[var(--color-neutral-200)]">
            <h4 className="text-[var(--color-neutral-900)]">Support Team</h4>
            <p className="text-sm text-[var(--color-neutral-500)]">Active now</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=support"
                  alt="Support"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-[var(--color-neutral-100)] rounded-lg p-3 max-w-md">
                    <p className="text-sm text-[var(--color-neutral-900)]">
                      Hello! How can we help you today?
                    </p>
                  </div>
                  <span className="text-xs text-[var(--color-neutral-500)] mt-1 block">10:30 AM</span>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex-1 flex justify-end">
                  <div className="bg-[var(--color-primary-600)] rounded-lg p-3 max-w-md">
                    <p className="text-sm text-white">
                      I have a question about my recent service request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-[var(--color-neutral-200)]">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button variant="primary">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
