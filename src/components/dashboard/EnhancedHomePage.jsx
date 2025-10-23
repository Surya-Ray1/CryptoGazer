import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { 
  FiPieChart, 
  FiBarChart2, 
  FiZap, 
  FiTrendingUp, 
  FiArrowUpRight,
  FiStar,
  FiClock,
  FiDollarSign,
  FiBriefcase,
  FiActivity,
  FiTarget,
  FiExternalLink
} from 'react-icons/fi';
import './EnhancedHomePage.scss';

const QuickActionCard = ({ title, description, icon: Icon, href, badge, color }) => (
  <Link to={href} className="text-decoration-none">
    <Card className="quick-action-card h-100">
      <Card.Body>
        <div className="d-flex align-items-center gap-3">
          <div className={`icon-wrapper ${color}`}>
            <Icon size={24} />
          </div>
          <div className="flex-grow-1">
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="mb-0">{title}</h5>
              {badge && <Badge bg="secondary" className="small">{badge}</Badge>}
            </div>
            <p className="text-muted small mb-0">{description}</p>
          </div>
          <FiArrowUpRight className="arrow-icon" size={20} />
        </div>
      </Card.Body>
    </Card>
  </Link>
);

const FeatureCard = ({ title, description, features, icon: Icon, href, status }) => (
  <Card className="feature-card h-100">
    <Card.Body>
      <div className="d-flex align-items-start justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
          <div className="feature-icon">
            <Icon size={20} />
          </div>
          <div>
            <Card.Title className="h6 mb-1">{title}</Card.Title>
            {status && (
              <Badge 
                bg={status === 'new' ? 'primary' : status === 'updated' ? 'success' : 'secondary'}
                className="small"
              >
                {status === 'new' ? 'New' : status === 'updated' ? 'Updated' : 'Coming Soon'}
              </Badge>
            )}
          </div>
        </div>
      </div>
      <p className="text-muted small mb-3">{description}</p>
      <ul className="feature-list mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-muted small">
            <span className="bullet"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={href}>
        <Button 
          variant={status === 'coming-soon' ? 'secondary' : 'outline-primary'}
          size="sm" 
          className="w-100"
          disabled={status === 'coming-soon'}
        >
          {status === 'coming-soon' ? 'Coming Soon' : (
            <>
              Explore <FiExternalLink className="ms-2" />
            </>
          )}
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

const EnhancedHomePage = () => {
  const quickActions = [
    {
      title: 'Portfolio Analysis',
      description: 'Get detailed insights into your crypto holdings with advanced analytics',
      icon: FiPieChart,
      href: '/advanced-portfolio',
      badge: 'Enhanced',
      color: 'bg-gradient-primary'
    },
    {
      title: 'DEX Analytics',
      description: 'Track prices and liquidity across multiple decentralized exchanges',
      icon: FiBarChart2,
      href: '/dex-analytics',
      badge: 'Multi-chain',
      color: 'bg-gradient-success'
    },
    {
      title: 'Gas Tracker',
      description: 'Monitor real-time gas prices and optimize your transaction timing',
      icon: FiZap,
      href: '/gas-tracker',
      badge: 'Real-time',
      color: 'bg-gradient-warning'
    },
    {
      title: 'Token Comparison',
      description: 'Compare performance and metrics between different cryptocurrencies',
      icon: FiTrendingUp,
      href: '/token-comparison',
      badge: 'Advanced',
      color: 'bg-gradient-info'
    }
  ];

  const features = [
    {
      title: 'Multi-Chain Portfolio',
      description: 'Comprehensive portfolio tracking across Ethereum, Polygon, BSC, Arbitrum, and more.',
      features: [
        'Cross-chain asset aggregation',
        'Real-time price updates',
        'Performance analytics',
        'Risk assessment tools'
      ],
      icon: FiBriefcase,
      href: '/advanced-portfolio',
      status: 'new'
    },
    {
      title: 'DEX Price Intelligence',
      description: 'Track and analyze prices across major decentralized exchanges with historical data.',
      features: [
        'Multi-DEX price comparison',
        'Liquidity pool analysis',
        'Volume tracking',
        'Arbitrage opportunities'
      ],
      icon: FiActivity,
      href: '/dex-analytics',
      status: 'new'
    },
    {
      title: 'Advanced Gas Analytics',
      description: 'Intelligent gas price monitoring with predictive insights and optimization tips.',
      features: [
        'Multi-network gas tracking',
        'Price prediction algorithms',
        'Transaction cost calculator',
        'Optimization recommendations'
      ],
      icon: FiZap,
      href: '/gas-tracker',
      status: 'updated'
    },
    {
      title: 'Token Performance Analysis',
      description: 'Deep dive into token metrics and performance comparisons.',
      features: [
        'Side-by-side comparisons',
        'Historical performance',
        'Fundamental analysis',
        'Market correlation insights'
      ],
      icon: FiTarget,
      href: '/token-comparison',
      status: 'new'
    }
  ];

  return (
    <div className="enhanced-home-page mb-5">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 px-4 mb-5 rounded-3">
        <Container>
          <Row>
            <Col lg={10} xl={8} className="mx-auto">
              <h1 className="display-4 fw-bold mb-4">
                Advanced Crypto Analytics Platform
              </h1>
              <p className="lead text-muted mb-4">
                Track, analyze, and optimize your crypto portfolio with institutional-grade tools
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Badge bg="secondary" className="px-3 py-2">
                  <FiStar className="me-2" />
                  Multi-chain Support
                </Badge>
                <Badge bg="secondary" className="px-3 py-2">
                  <FiClock className="me-2" />
                  Real-time Data
                </Badge>
                <Badge bg="secondary" className="px-3 py-2">
                  <FiDollarSign className="me-2" />
                  Cost Optimization
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Quick Actions */}
      <div className="mb-5">
        <h2 className="h3 fw-bold mb-4">Quick Actions</h2>
        <Row className="g-4">
          {quickActions.map((action, index) => (
            <Col key={index} md={6} lg={3}>
              <QuickActionCard {...action} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Feature Showcase */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 fw-bold mb-0">Platform Features</h2>
          <Badge bg="primary" className="px-3 py-2">
            {features.filter(f => f.status === 'new').length} New Features
          </Badge>
        </div>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6}>
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Statistics Section */}
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body className="py-4">
              <div className="stat-icon bg-primary bg-opacity-10 text-primary mx-auto mb-3">
                <FiBarChart2 size={28} />
              </div>
              <h3 className="h4 fw-bold mb-2">6+</h3>
              <p className="text-muted mb-0">Supported Blockchains</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body className="py-4">
              <div className="stat-icon bg-success bg-opacity-10 text-success mx-auto mb-3">
                <FiActivity size={28} />
              </div>
              <h3 className="h4 fw-bold mb-2">Real-time</h3>
              <p className="text-muted mb-0">Price Updates</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body className="py-4">
              <div className="stat-icon bg-info bg-opacity-10 text-info mx-auto mb-3">
                <FiTarget size={28} />
              </div>
              <h3 className="h4 fw-bold mb-2">Advanced</h3>
              <p className="text-muted mb-0">Analytics Tools</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EnhancedHomePage;
