import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/dashboard/DashboardLayout';
import HomePage from './pages/HomePage';
import PortfolioOverview from './pages/portfolio/PortfolioOverview';
import AddTransaction from './pages/portfolio/AddTransaction';
import AdvancedPortfolio from './pages/AdvancedPortfolio';
import Markets from './pages/Markets';
import DexAnalytics from './pages/DexAnalytics';
import TokenComparison from './pages/TokenComparison';
import GasTracker from './pages/GasTracker';
import Settings from './pages/Settings';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <Router>
      <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/overview" element={<PortfolioOverview />} />
          <Route path="/portfolio/add-transaction" element={<AddTransaction />} />
          <Route path="/advanced-portfolio" element={<AdvancedPortfolio />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/dex-analytics" element={<DexAnalytics />} />
          <Route path="/token-comparison" element={<TokenComparison />} />
          <Route path="/gas-tracker" element={<GasTracker />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
