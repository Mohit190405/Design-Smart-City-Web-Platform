# Life Sphere – Urban Super App

## 🌆 Enterprise Smart City Web Platform

A comprehensive, role-based digital ecosystem that integrates personal life management, civic services, education, business operations, and workforce management into a single unified web platform.

## 🎯 Project Overview

**Technology Stack:** React + TypeScript + Tailwind CSS  
**Architecture:** MERN-ready (Frontend Complete)  
**Design System:** Enterprise SaaS UI

## 👥 User Roles

### 1. **Admin** 
Full system access and management capabilities
- User Management across all roles
- Service Management and monitoring
- Analytics & Reports
- Security Center
- System Settings
- Activity Logs

### 2. **Client** (Citizen / Student / Business)
Access to all civic and educational services
- Personal Dashboard
- Service Access (Utilities, Transport, Healthcare, Education, Business, Housing)
- Request Management & Status Tracking
- Learning Hub with Courses
- Wallet & Payments (UI)
- Messages & Notifications
- Profile & Settings

### 3. **Personnel** (Employee / Service Provider / Staff)
Task and job management for service providers
- Personnel Dashboard
- Task Management (Accept/Complete tasks)
- Job History & Earnings
- Performance Metrics & Analytics
- Training & Certifications
- Availability Management
- Messages & Communication

## 🎨 Design System

### Color Palette
- **Primary:** Deep Blue/Indigo (#4f46e5) - Trust, Governance
- **Secondary:** Teal/Green (#0d9488) - Growth, Sustainability
- **Accent:** Orange (#f97316) - Alerts, Actions
- **Background:** Light Grey/White (#f9fafb)

### Components
- **Buttons:** Primary, Secondary, Accent, Ghost, Danger variants
- **Cards:** Hover effects, customizable padding
- **Inputs:** Text, Email, Password, Select, TextArea with icons
- **Badges:** Status indicators (Success, Warning, Error, Info, Neutral)
- **StatCards:** KPI cards with trend indicators
- **Charts:** Line, Bar, Pie, Area, Radar charts (Recharts)

## 📁 Project Structure

```
/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Global header with search, notifications, profile
│   │   └── Sidebar.tsx         # Collapsible sidebar navigation
│   └── ui/
│       ├── Badge.tsx           # Status badges
│       ├── Button.tsx          # Button component
│       ├── Card.tsx            # Card components
│       ├── Input.tsx           # Form inputs
│       └── StatCard.tsx        # KPI stat cards
├── contexts/
│   └── AuthContext.tsx         # Authentication & user management
├── layouts/
│   ├── AdminLayout.tsx         # Admin dashboard layout
│   ├── ClientLayout.tsx        # Client dashboard layout
│   └── PersonnelLayout.tsx     # Personnel dashboard layout
├── pages/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── OTPVerificationPage.tsx
│   │   ├── RoleSelectionPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── admin/
│   │   ├── AdminDashboard.tsx
│   │   ├── UserManagement.tsx
│   │   ├── ServiceManagement.tsx
│   │   ├── Analytics.tsx
│   │   ├── SecurityCenter.tsx
│   │   └── SystemSettings.tsx
│   ├── client/
│   │   ├── ClientDashboard.tsx
│   │   ├── ServiceAccess.tsx
│   │   ├── MyRequests.tsx
│   │   ├── Learning.tsx
│   │   ├── MessagesPage.tsx
│   │   └── ProfilePage.tsx
│   └── personnel/
│       ├── PersonnelDashboard.tsx
│       ├── TaskManagement.tsx
│       ├── JobHistory.tsx
│       ├── Performance.tsx
│       └── Training.tsx
├── styles/
│   └── globals.css             # Global styles & CSS variables
└── App.tsx                     # Main app with routing
```

## 🚀 Features

### Authentication
- ✅ Login with role-based redirect
- ✅ Registration with role selection
- ✅ OTP Verification
- ✅ Forgot Password flow
- ✅ Quick demo access buttons

### Admin Features
- ✅ Comprehensive dashboard with KPIs
- ✅ User management table with filters
- ✅ Service management grid
- ✅ Advanced analytics with multiple chart types
- ✅ Security monitoring
- ✅ System settings

### Client Features
- ✅ Personal dashboard with activity overview
- ✅ Service catalog with categories (Utilities, Transport, Healthcare, etc.)
- ✅ Request tracking system
- ✅ Learning hub with courses and progress tracking
- ✅ Messaging system
- ✅ Profile management

### Personnel Features
- ✅ Task dashboard with today's schedule
- ✅ Task acceptance and completion workflow
- ✅ Job history with earnings tracking
- ✅ Performance analytics with radar charts
- ✅ Training & certification management
- ✅ Skills development tracking

## 🎯 Key UI/UX Principles

1. **Role-Based Access Control (RBAC)** - Each role has dedicated dashboards and permissions
2. **Consistent Design Language** - Unified components across all sections
3. **Data-Driven Dashboards** - KPIs, charts, and real-time indicators
4. **Mobile-Responsive** - Adapts to all screen sizes
5. **Accessibility** - High contrast, clear hierarchy
6. **Scalability** - Modular component architecture

## 🔐 Demo Credentials

Use the quick access buttons on the login page or:

- **Admin:** admin@lifesphere.com / demo
- **Client:** client@lifesphere.com / demo
- **Personnel:** personnel@lifesphere.com / demo

## 🛠️ Technical Highlights

- **React Router** for navigation and role-based routing
- **Context API** for authentication state management
- **Recharts** for data visualization
- **Tailwind CSS v4** with custom CSS variables
- **Lucide React** for consistent iconography
- **TypeScript** for type safety
- **Vite** for fast development

## 📊 Analytics & Reporting

All roles have access to relevant analytics:
- **Admin:** Platform-wide metrics, user growth, service distribution
- **Client:** Personal activity, spending, learning progress
- **Personnel:** Earnings, performance ratings, task completion

## 🎓 Future-Ready Features

The platform is designed with extensibility in mind:
- AI recommendation placeholders
- IoT dashboard integration points
- Mobile app adaptability
- Dark mode readiness
- Supabase/database integration ready

## 🌐 Services Covered

1. **Utilities** - Water, Electricity, Waste Management
2. **Transport** - Public Transit, Parking
3. **Healthcare** - Appointments, Emergency Services
4. **Education** - Online Courses, Certifications
5. **Business** - Licensing, Permits
6. **Housing** - Property Services, Tax

## 📱 Responsive Design

- **Desktop First** - Optimized for enterprise use
- **Tablet Support** - Adapted layouts
- **Mobile Ready** - Responsive grid system

## 🎨 Design Philosophy

**Modern Enterprise SaaS**
- Clean, minimal, professional
- Card-based layouts
- Soft shadows and rounded corners
- Consistent spacing (8px grid)
- Clear visual hierarchy

---

Built with ❤️ for Smart Cities
