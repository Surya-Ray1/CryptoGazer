import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Table } from 'react-bootstrap';
import { FiPlus, FiX } from 'react-icons/fi';

const TokenComparison = () => {
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock token data
  const availableTokens = [
    { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 43215, change24h: 3.2, marketCap: 845000000000 },
    { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 2450, change24h: 4.5, marketCap: 295000000000 },
    { id: 'solana', symbol: 'SOL', name: 'Solana', price: 98.45, change24h: -2.1, marketCap: 42000000000 },
    { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.58, change24h: 1.8, marketCap: 20500000000 },
  ];

  const addToken = (token) => {
    if (selectedTokens.length < 5 && !selectedTokens.find(t => t.id === token.id)) {
      setSelectedTokens([...selectedTokens, token]);
    }
  };

  const removeToken = (tokenId) => {
    setSelectedTokens(selectedTokens.filter(t => t.id !== tokenId));
  };

  return (
    <div className="token-comparison-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Token Comparison</h1>
            <p className="text-muted">Compare performance and metrics between different cryptocurrencies (up to 5 tokens)</p>
          </Col>
        </Row>

        {/* Token Selection */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0">Add Tokens to Compare</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="search"
                    placeholder="Search tokens..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex flex-column gap-2">
                  {availableTokens.map((token) => (
                    <Button
                      key={token.id}
                      variant="outline-primary"
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => addToken(token)}
                      disabled={selectedTokens.find(t => t.id === token.id)}
                    >
                      <span>{token.name} ({token.symbol})</span>
                      <FiPlus />
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0">Selected Tokens ({selectedTokens.length}/5)</Card.Title>
              </Card.Header>
              <Card.Body>
                {selectedTokens.length === 0 ? (
                  <p className="text-muted text-center py-4">No tokens selected yet</p>
                ) : (
                  <div className="d-flex flex-wrap gap-2">
                    {selectedTokens.map((token) => (
                      <Badge 
                        key={token.id}
                        bg="primary"
                        className="px-3 py-2 d-flex align-items-center gap-2"
                      >
                        {token.symbol}
                        <FiX 
                          size={16}
                          style={{ cursor: 'pointer' }}
                          onClick={() => removeToken(token.id)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Comparison Table */}
        {selectedTokens.length > 0 && (
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title className="mb-0">Comparison Results</Card.Title>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="table-responsive">
                    <Table className="mb-0">
                      <thead>
                        <tr>
                          <th>Metric</th>
                          {selectedTokens.map((token) => (
                            <th key={token.id}>{token.symbol}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Current Price</strong></td>
                          {selectedTokens.map((token) => (
                            <td key={token.id}>${token.price.toLocaleString()}</td>
                          ))}
                        </tr>
                        <tr>
                          <td><strong>24h Change</strong></td>
                          {selectedTokens.map((token) => (
                            <td key={token.id}>
                              <Badge bg={token.change24h >= 0 ? 'success' : 'danger'}>
                                {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                              </Badge>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td><strong>Market Cap</strong></td>
                          {selectedTokens.map((token) => (
                            <td key={token.id}>
                              ${(token.marketCap / 1e9).toFixed(2)}B
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default TokenComparison;
