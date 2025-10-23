import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    type: 'buy',
    token: '',
    amount: '',
    price: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction submitted:', formData);
    // Handle transaction submission
  };

  return (
    <div className="add-transaction-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Add Transaction</h1>
            <p className="text-muted">Record a new portfolio transaction</p>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={6}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Transaction Type</Form.Label>
                    <Form.Select 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="buy">Buy</option>
                      <option value="sell">Sell</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Token</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g., BTC, ETH"
                      value={formData.token}
                      onChange={(e) => setFormData({...formData, token: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.00000001"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Price per Token (USD)</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Notes (Optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Add any notes about this transaction..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Add Transaction
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddTransaction;
