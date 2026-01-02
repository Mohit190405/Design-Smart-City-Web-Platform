# Life Sphere Design System

## 🎨 Visual Design Language

### Design Principles
1. **Enterprise-Grade Professionalism** - Clean, trust-inspiring interfaces
2. **Data-Driven Clarity** - Information hierarchy optimized for decision-making
3. **Scalable Modularity** - Reusable components across all roles
4. **Accessibility First** - WCAG compliant color contrast and interactions
5. **Future-Ready** - Extensible for AI, IoT, and mobile expansion

---

## 🌈 Color System

### Primary Colors (Trust & Governance)
```css
--color-primary-50:  #eef2ff   /* Lightest tint */
--color-primary-100: #e0e7ff
--color-primary-200: #c7d2fe
--color-primary-300: #a5b4fc
--color-primary-400: #818cf8
--color-primary-500: #6366f1   /* Base */
--color-primary-600: #4f46e5   /* Primary brand */
--color-primary-700: #4338ca
--color-primary-800: #3730a3
--color-primary-900: #312e81   /* Darkest shade */
```

**Usage:** Navigation active states, primary CTAs, links, focus states

### Secondary Colors (Growth & Sustainability)
```css
--color-secondary-50:  #f0fdfa
--color-secondary-100: #ccfbf1
--color-secondary-200: #99f6e4
--color-secondary-300: #5eead4
--color-secondary-400: #2dd4bf
--color-secondary-500: #14b8a6   /* Base */
--color-secondary-600: #0d9488   /* Secondary brand */
--color-secondary-700: #0f766e
--color-secondary-800: #115e59
--color-secondary-900: #134e4a
```

**Usage:** Success states, positive metrics, environmental features

### Accent Colors (Action & Alerts)
```css
--color-accent-50:  #fff7ed
--color-accent-100: #ffedd5
--color-accent-200: #fed7aa
--color-accent-300: #fdba74
--color-accent-400: #fb923c
--color-accent-500: #f97316    /* Base */
--color-accent-600: #ea580c    /* Accent brand */
--color-accent-700: #c2410c
--color-accent-800: #9a3412
--color-accent-900: #7c2d12
```

**Usage:** Warnings, pending states, important notifications, CTAs

### Neutral Colors (Foundation)
```css
--color-neutral-50:  #f9fafb   /* Page background */
--color-neutral-100: #f3f4f6   /* Card hover, disabled backgrounds */
--color-neutral-200: #e5e7eb   /* Borders, dividers */
--color-neutral-300: #d1d5db   /* Input borders */
--color-neutral-400: #9ca3af   /* Placeholder text */
--color-neutral-500: #6b7280   /* Secondary text */
--color-neutral-600: #4b5563   /* Body text */
--color-neutral-700: #374151   /* Labels */
--color-neutral-800: #1f2937   /* Headings */
--color-neutral-900: #111827   /* Primary text */
```

### Status Colors
```css
--color-success: #10b981   /* Green - Completed, Active */
--color-warning: #f59e0b   /* Yellow - Pending, Caution */
--color-error:   #ef4444   /* Red - Error, Critical */
--color-info:    #3b82f6   /* Blue - Info, Processing */
```

---

## 📏 Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Heading Hierarchy
```
H1: 36px (2.25rem) / Bold 700 / -2% letter-spacing
H2: 30px (1.875rem) / SemiBold 600 / -1% letter-spacing
H3: 24px (1.5rem) / SemiBold 600
H4: 20px (1.25rem) / SemiBold 600
H5: 18px (1.125rem) / SemiBold 600
H6: 16px (1rem) / SemiBold 600
```

### Body Text
```
Large:   18px / Regular 400 / 1.6 line-height
Base:    16px / Regular 400 / 1.6 line-height
Small:   14px / Regular 400 / 1.5 line-height
XSmall:  12px / Regular 400 / 1.5 line-height
```

---

## 🔘 Component Library

### Buttons

**Variants:**
- `primary` - Main actions (Primary color background)
- `secondary` - Secondary actions (Secondary color background)
- `accent` - Alert/important actions (Accent color background)
- `ghost` - Tertiary actions (Transparent with hover)
- `danger` - Destructive actions (Red background)

**Sizes:**
- `sm` - 32px height, 12px/24px padding
- `md` - 40px height, 16px/32px padding (default)
- `lg` - 48px height, 24px/48px padding

**States:**
- Default, Hover, Active, Disabled
- Loading state with spinner
- Full-width option

### Cards

**Padding Options:**
- `none` - No padding (for custom layouts)
- `sm` - 16px padding
- `md` - 24px padding (default)
- `lg` - 32px padding

**Features:**
- Default shadow: `0 1px 2px rgba(0,0,0,0.05)`
- Hover shadow: `0 10px 15px rgba(0,0,0,0.1)`
- Border: 1px solid neutral-200
- Border radius: 12px (rounded-xl)

### Input Fields

**Types:**
- Text, Email, Password, Tel, Date
- TextArea (multi-line)
- Select (dropdown)

**Features:**
- Optional label
- Optional icon (left-aligned)
- Error state with message
- Helper text
- Disabled state
- Focus ring with primary color

### Badges

**Variants:**
- `success` - Green (Active, Completed)
- `warning` - Yellow (Pending, In Progress)
- `error` - Red (Failed, Critical)
- `info` - Blue (Processing, Info)
- `neutral` - Grey (Default)
- `primary` - Brand color
- `secondary` - Secondary color

**Sizes:**
- `sm` - 8px/16px padding, 12px text
- `md` - 10px/20px padding, 14px text (default)
- `lg` - 12px/24px padding, 16px text

### Stat Cards

**Purpose:** Display KPI metrics with trend indicators

**Features:**
- Title (small text, neutral-600)
- Value (large heading, neutral-900)
- Change indicator (% with up/down icon)
- Change label (context text)
- Icon with colored gradient background
- Color themes: primary, secondary, accent, success, warning, error

---

## 📐 Spacing System

Based on 8px grid:

```css
--spacing-xs:  4px   (0.25rem)
--spacing-sm:  8px   (0.5rem)
--spacing-md:  16px  (1rem)
--spacing-lg:  24px  (1.5rem)
--spacing-xl:  32px  (2rem)
--spacing-2xl: 48px  (3rem)
```

**Grid Gaps:**
- Small: 16px (1rem)
- Medium: 24px (1.5rem)
- Large: 32px (2rem)

---

## 🎯 Border Radius

```css
--radius-sm: 6px   (0.375rem)  /* Small elements */
--radius-md: 8px   (0.5rem)    /* Buttons */
--radius-lg: 12px  (0.75rem)   /* Cards */
--radius-xl: 16px  (1rem)      /* Large containers */
```

**Full Radius:**
- Pills/Badges: `9999px` (rounded-full)
- Avatar: `50%` (rounded-full)

---

## 🌑 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)      /* Subtle elevation */
--shadow-md: 0 4px 6px rgba(0,0,0,0.1)       /* Cards */
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)     /* Hover states */
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1)     /* Modals, dropdowns */
```

---

## 📊 Chart Guidelines

### Color Palette for Data Visualization
1. **Primary Data:** `--color-primary-600`
2. **Secondary Data:** `--color-secondary-600`
3. **Tertiary Data:** `--color-accent-600`
4. **Additional Series:** Green (#10b981), Blue (#3b82f6), Purple (#a855f7)

### Chart Types
- **Line Charts:** Trends over time, user activity
- **Bar Charts:** Comparisons, categorical data
- **Pie Charts:** Distribution, proportions
- **Area Charts:** Cumulative trends
- **Radar Charts:** Multi-dimensional comparisons

---

## 🎭 Animation & Transitions

### Duration
```css
Fast:     150ms   /* Hover effects */
Base:     200ms   /* Default transitions */
Moderate: 300ms   /* Complex animations */
Slow:     500ms   /* Page transitions */
```

### Easing
```css
ease-in-out  /* Default smooth transitions */
ease-out     /* Enter animations */
ease-in      /* Exit animations */
```

---

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Layout Guidelines
- **Mobile:** Stack vertically, single column
- **Tablet:** 2-column grids where appropriate
- **Desktop:** Multi-column layouts (3-4 columns)
- **Sidebar:** Collapsible on mobile, fixed on desktop

---

## ♿ Accessibility

### Color Contrast
- **Text on White:** Minimum 4.5:1 ratio
- **Large Text:** Minimum 3:1 ratio
- **Interactive Elements:** Clear focus indicators

### Interactive States
- Hover: Background color change
- Focus: 2px ring with primary-100 color
- Active: Darker background
- Disabled: 50% opacity, cursor not-allowed

### Keyboard Navigation
- Tab order follows visual hierarchy
- Focus indicators on all interactive elements
- Skip links for main content

---

## 🔄 State Management

### Loading States
- Skeleton loaders for content
- Spinners for actions
- Progress bars for processes

### Empty States
- Icon (neutral-400)
- Title message
- Optional description
- Call-to-action button

### Error States
- Red error color
- Clear error message
- Recovery action

---

## 📋 Layout Patterns

### Dashboard Layout
```
┌─────────────┬────────────────────────────────┐
│             │  Header (Search, Notif, User) │
│  Sidebar    ├────────────────────────────────┤
│  (64/256px) │                                │
│             │  Main Content Area             │
│             │  (Padding: 24px)               │
│             │                                │
└─────────────┴────────────────────────────────┘
```

### Card Grid Layout
- 1 column on mobile
- 2-3 columns on tablet
- 3-4 columns on desktop
- Gap: 24px

### Form Layout
- Single column on mobile
- 2 columns on desktop
- Labels above inputs
- Error messages below inputs

---

## 🎨 Icon System

**Library:** Lucide React

**Sizes:**
- Small: 16px (w-4 h-4)
- Base: 20px (w-5 h-5)
- Medium: 24px (w-6 h-6)
- Large: 32px (w-8 h-8)

**Colors:**
- Follow text color hierarchy
- Use neutral-600 for default
- Use brand colors for emphasis

---

## 🏗️ Component Composition

### Example: Stat Card
```tsx
<StatCard
  title="Total Users"
  value="5,234"
  change={12.5}
  changeLabel="vs last month"
  icon={<Users />}
  color="primary"
/>
```

### Example: Badge
```tsx
<Badge variant="success" size="sm">
  Active
</Badge>
```

### Example: Card with Header
```tsx
<Card>
  <CardHeader>
    <CardTitle>Recent Activity</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

---

## 🚀 Best Practices

1. **Consistency:** Use design tokens, not hardcoded values
2. **Hierarchy:** Maintain clear visual hierarchy
3. **Spacing:** Follow 8px grid system
4. **Feedback:** Provide immediate user feedback for actions
5. **Performance:** Optimize images, lazy load heavy components
6. **Scalability:** Build reusable, composable components

---

## 📦 Exported Components

- `Button` - All button variants
- `Card`, `CardHeader`, `CardTitle`, `CardContent` - Card components
- `Input`, `TextArea`, `Select` - Form inputs
- `Badge` - Status indicators
- `StatCard` - KPI cards
- `EmptyState` - Empty state messaging
- `Sidebar` - Navigation sidebar
- `Header` - Top header bar

---

Built with precision for enterprise smart city applications.
