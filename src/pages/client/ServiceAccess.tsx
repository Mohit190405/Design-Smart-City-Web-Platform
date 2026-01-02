import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Search, Filter, Zap, Home, Heart, GraduationCap, Briefcase, Bus, Droplet } from 'lucide-react';

const serviceCategories = [
  { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" /> },
  { id: 'utilities', name: 'Utilities', icon: <Droplet className="w-5 h-5" /> },
  { id: 'transport', name: 'Transport', icon: <Bus className="w-5 h-5" /> },
  { id: 'healthcare', name: 'Healthcare', icon: <Heart className="w-5 h-5" /> },
  { id: 'education', name: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'business', name: 'Business', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'housing', name: 'Housing', icon: <Home className="w-5 h-5" /> },
];

const services = [
  { id: 1, name: 'Electricity Bill Payment', category: 'utilities', description: 'Pay your monthly electricity bill online', price: 'Free', popular: true },
  { id: 2, name: 'Water Services', category: 'utilities', description: 'Manage water supply and billing', price: 'Free', popular: false },
  { id: 3, name: 'Public Transit Pass', category: 'transport', description: 'Purchase and manage transit passes', price: '$50/month', popular: true },
  { id: 4, name: 'Healthcare Appointments', category: 'healthcare', description: 'Book and manage medical appointments', price: 'Free', popular: true },
  { id: 5, name: 'Online Courses', category: 'education', description: 'Access educational content and certifications', price: '$29/month', popular: false },
  { id: 6, name: 'Business Licensing', category: 'business', description: 'Apply for and renew business licenses', price: '$150', popular: false },
  { id: 7, name: 'Property Services', category: 'housing', description: 'Property tax and management services', price: 'Variable', popular: false },
  { id: 8, name: 'Emergency Services', category: 'healthcare', description: '24/7 emergency contact and support', price: 'Free', popular: true },
];

export default function ServiceAccess() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Service Access</h1>
        <p className="text-[var(--color-neutral-600)]">Browse and access all available services</p>
      </div>

      {/* Search */}
      <Card>
        <Input
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={<Search className="w-5 h-5" />}
        />
      </Card>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-[var(--color-primary-600)] text-white'
                : 'bg-white text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]'
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} hover className="relative">
            {service.popular && (
              <Badge variant="accent" size="sm" className="absolute top-4 right-4">
                Popular
              </Badge>
            )}
            <div className="mb-4">
              <h4 className="text-[var(--color-neutral-900)] mb-2">{service.name}</h4>
              <p className="text-sm text-[var(--color-neutral-600)] mb-3">{service.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="neutral">{service.price}</Badge>
                <Badge variant="primary" size="sm">{service.category}</Badge>
              </div>
            </div>
            <Button variant="primary" fullWidth>
              Access Service
            </Button>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--color-neutral-500)]">No services found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
