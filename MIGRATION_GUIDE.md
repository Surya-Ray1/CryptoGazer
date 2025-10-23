# CryptoGazer - React + Bootstrap Migration Guide

## 🎯 Overview

This document guides you through converting your Next.js 15 + TypeScript + Tailwind CSS project to **React + Bootstrap**. All functionality has been preserved while making it easier to work with React and Bootstrap.

## 📦 What Changed

### Technology Stack

**Before (Next.js):**
- Next.js 15 (Server-side rendering framework)
- TypeScript (Typed JavaScript)
- Tailwind CSS (Utility-first CSS)
- Radix UI (Component library)

**After (React):**
- Create React App (Standard React setup)
- JavaScript (No TypeScript complexity)
- Bootstrap 5 + React Bootstrap (Popular CSS framework)
- React Icons (Icon library)
- React Router (Client-side routing)

## 🚀 Installation Steps

### Step 1: Backup Your Current Project (Optional)
```powershell
cd c:\xampp\htdocs
Copy-Item -Path "CryptoGazer-main" -Destination "CryptoGazer-main-backup" -Recurse
```

### Step 2: Install Dependencies

1. **Replace package.json:**
   ```powershell
   cd c:\xampp\htdocs\CryptoGazer-main
   Remove-Item package.json
   Rename-Item package-react.json package.json
   ```

2. **Install Node Modules:**
   ```powershell
   npm install
   ```

   This will install:
   - React 18.3.1
   - React Router DOM 6.26.0
   - Bootstrap 5.3.3
   - React Bootstrap 2.10.4
   - React Icons 5.3.0
   - Recharts 2.12.7 (for charts)
   - Axios 1.7.7 (for API calls)

### Step 3: Move React Source Files

The new React app structure is in the `react-src` folder. Let's set it up:

```powershell
# Remove old Next.js files
Remove-Item -Path "src" -Recurse -Force
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue

# Rename react-src to src
Rename-Item -Path "react-src" -NewName "src"
```

### Step 4: Update package.json Scripts

Your new `package.json` already has the correct scripts:
- `npm start` - Start development server (replaces `npm run dev`)
- `npm run build` - Build for production
- `npm test` - Run tests

### Step 5: Start the Development Server

```powershell
npm start
```

The app will open at `http://localhost:3000`

## 📁 New Project Structure

```
CryptoGazer-main/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   └── dashboard/
│   │       ├── DashboardLayout.js
│   │       ├── Header.js
│   │       ├── StatCard.js
│   │       ├── TokenTable.js
│   │       ├── PortfolioOverview.js
│   │       ├── PortfolioPerformanceChart.js
│   │       └── EnhancedHomePage.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── Markets.js
│   │   ├── DexAnalytics.js
│   │   ├── TokenComparison.js
│   │   ├── GasTracker.js
│   │   ├── AdvancedPortfolio.js
│   │   ├── Settings.js
│   │   └── portfolio/
│   │       ├── PortfolioOverview.js
│   │       └── AddTransaction.js
│   ├── utils/
│   │   ├── utils.js        # Utility functions
│   │   └── types.js        # Type documentation
│   ├── styles/
│   │   └── App.scss        # Global styles
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🔄 Key Changes Explained

### 1. Routing

**Next.js (File-based):**
- Pages in `src/app/` folder
- Automatic routing based on folder structure
- Example: `src/app/markets/page.tsx` → `/markets`

**React (React Router):**
- All routes defined in `App.js`
- Manual route configuration
- Example:
  ```javascript
  <Route path="/markets" element={<Markets />} />
  ```

### 2. Components

**Next.js/Tailwind:**
```jsx
<div className="flex items-center justify-between p-4 bg-gray-100">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

**React/Bootstrap:**
```jsx
<div className="d-flex justify-content-between align-items-center p-4 bg-light">
  <h1 className="h2 fw-bold">Title</h1>
</div>
```

### 3. Navigation

**Next.js:**
```jsx
import Link from 'next/link';
<Link href="/markets">Markets</Link>
```

**React:**
```jsx
import { Link } from 'react-router-dom';
<Link to="/markets">Markets</Link>
```

### 4. Icons

**Next.js (Lucide React):**
```jsx
import { TrendingUp } from 'lucide-react';
<TrendingUp className="h-5 w-5" />
```

**React (React Icons):**
```jsx
import { FiTrendingUp } from 'react-icons/fi';
<FiTrendingUp size={20} />
```

## 🎨 Bootstrap CSS Classes Quick Reference

### Common Tailwind → Bootstrap Conversions

| Tailwind | Bootstrap | Description |
|----------|-----------|-------------|
| `flex` | `d-flex` | Flexbox display |
| `items-center` | `align-items-center` | Vertical alignment |
| `justify-between` | `justify-content-between` | Horizontal spacing |
| `gap-4` | `gap-4` | Gap between items |
| `text-xl` | `h4` or `fs-5` | Large text |
| `font-bold` | `fw-bold` | Bold text |
| `text-gray-500` | `text-muted` | Muted text color |
| `bg-white` | `bg-white` | White background |
| `rounded-lg` | `rounded-3` | Large border radius |
| `shadow-md` | `shadow` | Box shadow |
| `p-4` | `p-4` | Padding |
| `mb-4` | `mb-4` | Margin bottom |
| `grid grid-cols-3` | `row` + `col-md-4` | Grid layout |
| `hidden md:block` | `d-none d-md-block` | Responsive display |

## 🔧 Common Bootstrap Components

### Cards
```jsx
import { Card } from 'react-bootstrap';

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Body>
    Content here
  </Card.Body>
</Card>
```

### Buttons
```jsx
import { Button } from 'react-bootstrap';

<Button variant="primary">Primary</Button>
<Button variant="outline-secondary">Outline</Button>
```

### Forms
```jsx
import { Form } from 'react-bootstrap';

<Form.Group className="mb-3">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
</Form.Group>
```

### Grid System
```jsx
import { Container, Row, Col } from 'react-bootstrap';

<Container>
  <Row>
    <Col md={6}>Column 1</Col>
    <Col md={6}>Column 2</Col>
  </Row>
</Container>
```

## 🌙 Dark Mode

Dark mode is controlled via Bootstrap's data attribute:

```javascript
// In App.js
document.documentElement.setAttribute('data-bs-theme', 'dark');
```

Toggle in the Header component.

## 📊 Features Included

All original features are preserved:

✅ **Portfolio Analytics**
- Multi-chain tracking
- Performance charts
- Transaction management

✅ **DEX Analytics**
- Multi-DEX price tracking
- Liquidity analysis
- Favorites system (up to 6)

✅ **Gas Tracker**
- Multi-network monitoring
- EIP-1559 support
- Cost calculator

✅ **Token Comparison**
- Side-by-side comparison (up to 5 tokens)
- Performance metrics
- Market data

✅ **Markets**
- Top cryptocurrencies
- Real-time prices
- Market statistics

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

### Module Not Found Errors
```powershell
# Clear cache and reinstall
Remove-Item -Path "node_modules" -Recurse -Force
Remove-Item -Path "package-lock.json" -Force
npm install
```

### Styles Not Loading
Make sure SASS is installed:
```powershell
npm install sass --save-dev
```

## 📚 Learning Resources

### React
- [React Official Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)

### Bootstrap
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [React Bootstrap Docs](https://react-bootstrap.github.io/)

## 🎓 Next Steps

1. **Customize Styles**: Edit `src/styles/App.scss` for global styles
2. **Add Features**: Create new components in `src/components/`
3. **Connect APIs**: Update API calls in page components
4. **Deploy**: Run `npm run build` to create production build

## 📝 Development Tips

### Creating New Pages

1. Create component file in `src/pages/`:
```javascript
// src/pages/NewPage.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const NewPage = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Body>
          New Page Content
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewPage;
```

2. Add route in `App.js`:
```javascript
import NewPage from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

3. Add to sidebar in `DashboardLayout.js`:
```javascript
{ href: '/new-page', label: 'New Page', icon: FiIcon }
```

## 🚢 Building for Production

```powershell
# Create optimized production build
npm run build

# The build folder will contain your production-ready app
# Deploy the contents of the 'build' folder to your web server
```

## ✨ Summary

You now have a fully functional React + Bootstrap version of CryptoGazer with:
- ✅ All original features
- ✅ Simpler technology stack
- ✅ Bootstrap styling
- ✅ Easy to understand and modify
- ✅ No TypeScript complexity
- ✅ Standard React patterns

Happy coding! 🚀
