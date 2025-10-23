import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Markets = () => {
  return (
    <div className="markets-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Markets</h1>
            <p className="text-muted">Explore cryptocurrency markets and trends</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body className="text-center py-5">
                <h3>Markets Page</h3>
                <p className="text-muted">Market data and analytics coming soon...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Markets;
