import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioOverviewPage = () => {
  return (
    <div className="portfolio-overview-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Portfolio Overview</h1>
            <p className="text-muted">View your complete portfolio summary</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body className="text-center py-5">
                <h3>Portfolio Overview</h3>
                <p className="text-muted">Your portfolio summary and holdings...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioOverviewPage;
