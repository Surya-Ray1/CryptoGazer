import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Table, Badge, Button } from 'react-bootstrap';
import { FiZap, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const GasTracker = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

  // Mock gas data for different networks
  const gasData = {
    ethereum: {
      name: 'Ethereum',
      unit: 'Gwei',
      slow: { price: 25, time: '~5 min' },
      standard: { price: 35, time: '~2 min' },
      fast: { price: 50, time: '~30 sec' },
      baseFee: 24,
      priorityFee: 1
    },
    polygon: {
      name: 'Polygon',
      unit: 'Gwei',
      slow: { price: 30, time: '~3 min' },
      standard: { price: 40, time: '~1 min' },
      fast: { price: 55, time: '~20 sec' },
      baseFee: 28,
      priorityFee: 2
    },
    bsc: {
      name: 'BSC',
      unit: 'Gwei',
      slow: { price: 3, time: '~5 sec' },
      standard: { price: 5, time: '~3 sec' },
      fast: { price: 6, time: '~1 sec' },
      baseFee: 3,
      priorityFee: 0
    },
    arbitrum: {
      name: 'Arbitrum',
      unit: 'Gwei',
      slow: { price: 0.1, time: '~2 min' },
      standard: { price: 0.5, time: '~1 min' },
      fast: { price: 1, time: '~30 sec' },
      baseFee: 0.1,
      priorityFee: 0.05
    }
  };

  const currentGas = gasData[selectedNetwork];

  return (
    <div className="gas-tracker-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Gas Tracker</h1>
            <p className="text-muted">Monitor real-time gas prices across multiple blockchains</p>
          </Col>
        </Row>

        {/* Network Selector */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Select Network</Form.Label>
              <Form.Select 
                value={selectedNetwork}
                onChange={(e) => setSelectedNetwork(e.target.value)}
              >
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                <option value="bsc">Binance Smart Chain</option>
                <option value="arbitrum">Arbitrum</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Gas Price Cards */}
        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card className="h-100 border-success">
              <Card.Body className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                    <FiTrendingDown size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">Slow</h6>
                <h2 className="fw-bold">{currentGas.slow.price} {currentGas.unit}</h2>
                <small className="text-muted">{currentGas.slow.time}</small>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-primary">
              <Card.Body className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                    <FiZap size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">Standard</h6>
                <h2 className="fw-bold">{currentGas.standard.price} {currentGas.unit}</h2>
                <small className="text-muted">{currentGas.standard.time}</small>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-danger">
              <Card.Body className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3">
                    <FiTrendingUp size={24} />
                  </div>
                </div>
                <h6 className="text-muted mb-2">Fast</h6>
                <h2 className="fw-bold">{currentGas.fast.price} {currentGas.unit}</h2>
                <small className="text-muted">{currentGas.fast.time}</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* EIP-1559 Details */}
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0">EIP-1559 Gas Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Base Fee:</span>
                      <strong>{currentGas.baseFee} {currentGas.unit}</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Priority Fee:</span>
                      <strong>{currentGas.priorityFee} {currentGas.unit}</strong>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Transaction Cost Calculator */}
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0">Transaction Cost Calculator</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Transaction Type</th>
                      <th>Gas Limit</th>
                      <th>Slow</th>
                      <th>Standard</th>
                      <th>Fast</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Simple Transfer</td>
                      <td>21,000</td>
                      <td>${((21000 * currentGas.slow.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((21000 * currentGas.standard.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((21000 * currentGas.fast.price) / 1e9 * 2400).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Token Swap</td>
                      <td>150,000</td>
                      <td>${((150000 * currentGas.slow.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((150000 * currentGas.standard.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((150000 * currentGas.fast.price) / 1e9 * 2400).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>NFT Mint</td>
                      <td>100,000</td>
                      <td>${((100000 * currentGas.slow.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((100000 * currentGas.standard.price) / 1e9 * 2400).toFixed(2)}</td>
                      <td>${((100000 * currentGas.fast.price) / 1e9 * 2400).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GasTracker;
