// Utility functions

// Format currency
export const formatCurrency = (value, compact = false) => {
  if (value === undefined || value === null || isNaN(value)) return 'Loading...';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: compact ? 'compact' : 'standard',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Format compact number
export const formatCompactNumber = (value) => {
  if (value === undefined || value === null || isNaN(value)) return 'Loading...';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Format percentage
export const formatPercentage = (value, decimals = 2) => {
  if (value === undefined || value === null || isNaN(value)) return 'N/A';
  
  return `${value > 0 ? '+' : ''}${value.toFixed(decimals)}%`;
};

// Format large number
export const formatLargeNumber = (value) => {
  if (value === undefined || value === null || isNaN(value)) return 'Loading...';
  
  if (value >= 1e12) return `${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
  
  return value.toFixed(2);
};

// Combine class names
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Get trend color
export const getTrendColor = (value) => {
  if (value === undefined || value === null || isNaN(value)) return 'secondary';
  return value >= 0 ? 'success' : 'danger';
};

// Get trend icon name
export const getTrendIcon = (value) => {
  if (value === undefined || value === null || isNaN(value)) return 'dash';
  return value >= 0 ? 'trending-up' : 'trending-down';
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
};
