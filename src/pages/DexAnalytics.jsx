import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table, Badge, Button, Spinner } from 'react-bootstrap';
import { FiSearch, FiStar, FiRefreshCw } from 'react-icons/fi';

const DexAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Mock data for DEX pairs
  const mockPairs = [
    { 
      pair: 'ETH/USDT', 
      dex: 'Uniswap', 
      price: '$2,450.32', 
      liquidity: '$125.4M', 
      volume24h: '$45.2M',
      change24h: 3.25 
    },
    { 
      pair: 'BTC/USDT', 
      dex: 'SushiSwap', 
      price: '$43,215.80', 
      liquidity: '$89.7M', 
      volume24h: '$32.1M',
      change24h: -1.45 
    },
    { 
      pair: 'SOL/USDC', 
      dex: 'Raydium', 
      price: '$98.45', 
      liquidity: '$34.2M', 
      volume24h: '$12.8M',
      change24h: 5.67 
    },
  ];

  const toggleFavorite = (pair) => {
    if (favorites.includes(pair)) {
      setFavorites(favorites.filter(f => f !== pair));
    } else {
      if (favorites.length < 6) {
        setFavorites([...favorites, pair]);
      }
    }
  };

  return (
    <div className="dex-analytics-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">DEX Analytics</h1>
            <p className="text-muted">Track prices and liquidity across multiple decentralized exchanges</p>
          </Col>
        </Row>

        {/* Search and Filters */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group>
              <div className="input-group">
                <span className="input-group-text">
                  <FiSearch />
                </span>
                <Form.Control
                  type="search"
                  placeholder="Search trading pairs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-primary">
              <FiRefreshCw className="me-2" />
              Refresh Data
            </Button>
          </Col>
        </Row>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title className="mb-0">
                    <FiStar className="me-2" />
                    Favorites ({favorites.length}/6)
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex flex-wrap gap-2">
                    {favorites.map((fav, index) => (
                      <Badge 
                        key={index} 
                        bg="primary" 
                        className="px-3 py-2 d-flex align-items-center gap-2"
                      >
                        {fav}
                        <FiStar 
                          size={14} 
                          style={{ cursor: 'pointer' }}
                          onClick={() => toggleFavorite(fav)}
                        />
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* DEX Pairs Table */}
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0">Trading Pairs</Card.Title>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Pair</th>
                        <th>DEX</th>
                        <th>Price</th>
                        <th>Liquidity</th>
                        <th>24h Volume</th>
                        <th>24h Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockPairs.map((pair, index) => {
                        const isPositive = pair.change24h >= 0;
                        return (
                          <tr key={index}>
                            <td>
                              <FiStar 
                                size={18}
                                style={{ 
                                  cursor: 'pointer',
                                  color: favorites.includes(pair.pair) ? 'gold' : 'gray'
                                }}
                                onClick={() => toggleFavorite(pair.pair)}
                              />
                            </td>
                            <td><strong>{pair.pair}</strong></td>
                            <td>{pair.dex}</td>
                            <td>{pair.price}</td>
                            <td>{pair.liquidity}</td>
                            <td>{pair.volume24h}</td>
                            <td>
                              <Badge bg={isPositive ? 'success' : 'danger'}>
                                {isPositive ? '+' : ''}{pair.change24h}%
                              </Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DexAnalytics;
