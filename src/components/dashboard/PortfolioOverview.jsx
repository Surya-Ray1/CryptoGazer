import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { FiTrendingUp } from 'react-icons/fi';
import { formatCurrency, formatPercentage } from '../../utils/utils';

const PortfolioOverview = () => {
  // Mock data - replace with actual portfolio data
  const portfolioData = {
    totalValue: 45678.90,
    change24h: 5.67,
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', amount: 0.5, value: 21500, change: 3.2 },
      { symbol: 'ETH', name: 'Ethereum', amount: 5.2, value: 9800, change: 4.5 },
      { symbol: 'SOL', name: 'Solana', amount: 120, value: 8400, change: -2.1 },
      { symbol: 'MATIC', name: 'Polygon', amount: 5000, value: 5978.90, change: 8.9 },
    ]
  };

  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title className="mb-0">Portfolio Overview</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="mb-4">
          <h2 className="h3 mb-1">{formatCurrency(portfolioData.totalValue)}</h2>
          <div className="d-flex align-items-center">
            <Badge 
              bg={portfolioData.change24h >= 0 ? 'success' : 'danger'}
              className="d-inline-flex align-items-center"
            >
              <FiTrendingUp className="me-1" />
              {formatPercentage(portfolioData.change24h)}
            </Badge>
            <small className="text-muted ms-2">24h change</small>
          </div>
        </div>

        <h6 className="text-muted mb-3">Top Holdings</h6>
        <ListGroup variant="flush">
          {portfolioData.holdings.map((holding, index) => (
            <ListGroup.Item key={index} className="px-0 d-flex justify-content-between align-items-center">
              <div>
                <strong>{holding.symbol}</strong>
                <small className="text-muted d-block">{holding.amount} {holding.symbol}</small>
              </div>
              <div className="text-end">
                <div>{formatCurrency(holding.value)}</div>
                <small className={holding.change >= 0 ? 'text-success' : 'text-danger'}>
                  {formatPercentage(holding.change)}
                </small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PortfolioOverview;
