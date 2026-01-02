# Life Sphere Implementation Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser

### Installation
```bash
npm install
npm run dev
```

The application will start on `http://localhost:5173`

---

## 🔐 Authentication Flow

### Login Process
1. User visits `/login`
2. Enters credentials (or uses quick access buttons)
3. System validates and determines role
4. Redirects to role-specific dashboard:
   - Admin → `/admin`
   - Client → `/client`
   - Personnel → `/personnel`

### Demo Accounts
Quick access buttons populate these credentials:
- **Admin:** admin@lifesphere.com / demo
- **Client:** client@lifesphere.com / demo
- **Personnel:** personnel@lifesphere.com / demo

### Registration Flow
1. User fills registration form at `/register`
2. Redirected to `/verify-otp` for OTP verification (simulated)
3. Proceeds to `/role-selection` to choose account type
4. Redirected to appropriate dashboard

---

## 🏗️ Architecture Overview

### Application Structure

```
App.tsx
├── AuthProvider (Context)
│   └── AppRoutes
│       ├── Public Routes (Login, Register, etc.)
│       └── Protected Routes
│           ├── /admin/* → AdminLayout
│           ├── /client/* → ClientLayout
│           └── /personnel/* → PersonnelLayout
```

### Role-Based Routing

**Protected Route Logic:**
```typescript
function ProtectedRoute({ children, allowedRoles }) {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  
  return children;
}
```

---

## 👥 Role Implementations

### Admin Role

**Dashboard Features:**
- KPI cards (Total Users, Active Services, System Uptime, Revenue)
- User growth line chart
- Service distribution pie chart
- Recent activities feed
- Pending requests list
- Quick stats cards

**User Management:**
- Full user table with search and filters
- Role-based filtering (Admin, Client, Personnel)
- User actions (Edit, Delete, View)
- Status badges (Active, Inactive, Pending)

**Service Management:**
- Service cards grid
- Service metrics (Users, Revenue)
- Status indicators
- CRUD operations

**Analytics:**
- Revenue & Profit area chart
- Service usage bar chart
- User activity multi-line chart
- Export functionality

**Security Center:**
- Security score monitoring
- Active alerts feed
- System health indicators
- Alert categorization

---

### Client Role

**Dashboard Features:**
- Personal KPIs (Active Requests, Completed, Courses, Wallet)
- Activity bar chart
- Recent requests with status
- Recommended services
- Quick actions panel

**Service Access:**
- Categorized service catalog
- Search functionality
- Service cards with descriptions and pricing
- Popular service indicators
- Category filtering

**My Requests:**
- Request tracking table
- Status filtering
- Download receipts
- Request details view

**Learning Hub:**
- Enrolled courses with progress bars
- Available courses catalog
- Certification tracking
- Course statistics

---

### Personnel Role

**Dashboard Features:**
- Performance KPIs (Active Tasks, Completed, Earnings, Rating)
- Weekly performance line chart
- Today's schedule with task cards
- Recent activity timeline
- Quick action cards

**Task Management:**
- Task list with filters
- Accept/Decline workflow
- Task completion tracking
- Priority indicators
- Location and time details

**Job History:**
- Completed jobs table
- Earnings tracking
- Rating system
- Job receipts download

**Performance:**
- Earnings trend chart
- Performance metrics radar chart
- Achievement badges
- Success rate tracking

**Training:**
- Required training courses
- Optional skill development
- Progress tracking
- Certification management

---

## 🎨 Theming & Customization

### Updating Brand Colors

Edit `/styles/globals.css`:

```css
:root {
  /* Change primary color */
  --color-primary-600: #your-color;
  
  /* Change secondary color */
  --color-secondary-600: #your-color;
  
  /* Change accent color */
  --color-accent-600: #your-color;
}
```

### Creating New Components

Follow the established pattern:

```tsx
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function MyComponent() {
  return (
    <Card>
      <div>Your content</div>
      <Button variant="primary">Action</Button>
      <Badge variant="success">Status</Badge>
    </Card>
  );
}
```

---

## 📊 Data Management

### Mock Data

Currently uses static mock data in each component. Located in:
- `/pages/admin/*` - Admin mock data
- `/pages/client/*` - Client mock data
- `/pages/personnel/*` - Personnel mock data

### Adding Supabase/Backend

To connect to a real backend:

1. **Install Supabase Client:**
```bash
npm install @supabase/supabase-js
```

2. **Create Supabase Client:**
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
```

3. **Update AuthContext:**
```typescript
const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) throw error;
  setUser(data.user);
};
```

4. **Fetch Real Data:**
```typescript
useEffect(() => {
  const fetchUsers = async () => {
    const { data } = await supabase
      .from('users')
      .select('*');
    setUsers(data);
  };
  fetchUsers();
}, []);
```

---

## 🔌 Adding New Pages

### 1. Create Page Component

```tsx
// pages/admin/NewPage.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

### 2. Add Route

```tsx
// layouts/AdminLayout.tsx
import NewPage from '../pages/admin/NewPage';

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

### 3. Add Navigation Item

```tsx
// layouts/AdminLayout.tsx
const sidebarItems = [
  // ... existing items
  { 
    label: 'New Page', 
    icon: <Icon className="w-5 h-5" />, 
    path: '/new-page' 
  },
];
```

---

## 📈 Analytics Integration

### Adding Google Analytics

```tsx
// App.tsx
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.initialize('G-XXXXXXXXXX');
}, []);

// Track page views
useEffect(() => {
  ReactGA.send({ hitType: 'pageview', page: location.pathname });
}, [location]);
```

### Custom Event Tracking

```typescript
import ReactGA from 'react-ga4';

const handleServiceAccess = (serviceName: string) => {
  ReactGA.event({
    category: 'Service',
    action: 'Access',
    label: serviceName
  });
};
```

---

## 🔔 Notifications

### Toast Notifications

Install Sonner:
```bash
npm install sonner@2.0.3
```

Usage:
```tsx
import { toast } from 'sonner@2.0.3';

const handleSubmit = async () => {
  try {
    // ... your logic
    toast.success('Task completed successfully!');
  } catch (error) {
    toast.error('An error occurred');
  }
};
```

### In-App Notifications

Already implemented in Header component:
- Bell icon with unread count
- Dropdown notification list
- Real-time notification badge

---

## 🌐 Internationalization (i18n)

### Adding Multi-Language Support

```bash
npm install react-i18next i18next
```

Setup:
```typescript
// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to Life Sphere",
          "dashboard": "Dashboard"
        }
      },
      es: {
        translation: {
          "welcome": "Bienvenido a Life Sphere",
          "dashboard": "Panel de Control"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en'
  });
```

Usage:
```tsx
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
Never commit sensitive keys. Use `.env`:

```env
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-key
VITE_API_URL=your-api-url
```

### 2. Input Validation
Always validate user input:

```typescript
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
```

### 3. XSS Protection
React escapes by default, but be careful with:
- `dangerouslySetInnerHTML`
- Third-party libraries
- User-generated content

### 4. HTTPS Only
Always use HTTPS in production.

---

## 🧪 Testing

### Unit Tests with Vitest

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Example test:
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### E2E Tests with Playwright

```bash
npm install -D @playwright/test
```

Example test:
```typescript
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.fill('input[type="email"]', 'admin@lifesphere.com');
  await page.fill('input[type="password"]', 'demo');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*admin/);
});
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized assets.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Environment Variables

Set these in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_URL`

---

## 📱 PWA Configuration

Add manifest.json:

```json
{
  "name": "Life Sphere",
  "short_name": "Life Sphere",
  "description": "Urban Super App",
  "theme_color": "#4f46e5",
  "background_color": "#ffffff",
  "display": "standalone",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🐛 Debugging

### React DevTools
Install React DevTools browser extension for:
- Component tree inspection
- Props and state debugging
- Performance profiling

### Common Issues

**1. Module not found errors:**
```bash
npm install
```

**2. Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill
```

**3. Styling not updating:**
Clear Tailwind cache:
```bash
rm -rf node_modules/.cache
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)
- [Lucide Icons](https://lucide.dev)

---

## 🤝 Contributing

### Code Style
- Use TypeScript
- Follow existing component patterns
- Use Tailwind classes (avoid inline styles)
- Add proper TypeScript types
- Comment complex logic

### Git Workflow
```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/your-feature
```

### Commit Message Format
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

---

## 📞 Support

For questions or issues:
1. Check this guide
2. Review component documentation
3. Examine existing implementations
4. Refer to library documentation

---

Built with ❤️ for Smart City Innovation
