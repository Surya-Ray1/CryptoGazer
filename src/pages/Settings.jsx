import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FiMoon, FiSun } from 'react-icons/fi';

const Settings = () => {
  const [settings, setSettings] = useState({
    currency: 'USD',
    language: 'en',
    notifications: true,
    autoRefresh: true
  });

  return (
    <div className="settings-page fade-in">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h1 className="h2 fw-bold mb-2">Settings</h1>
            <p className="text-muted">Customize your CryptoGazer experience</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title className="mb-0">General Settings</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Default Currency</Form.Label>
                    <Form.Select 
                      value={settings.currency}
                      onChange={(e) => setSettings({...settings, currency: e.target.value})}
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="JPY">JPY - Japanese Yen</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Select 
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Check 
                    type="switch"
                    id="notifications"
                    label="Enable Notifications"
                    checked={settings.notifications}
                    onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                    className="mb-3"
                  />

                  <Form.Check 
                    type="switch"
                    id="autoRefresh"
                    label="Auto-refresh Data"
                    checked={settings.autoRefresh}
                    onChange={(e) => setSettings({...settings, autoRefresh: e.target.checked})}
                    className="mb-3"
                  />

                  <Button variant="primary">Save Settings</Button>
                </Form>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title className="mb-0">About</Card.Title>
              </Card.Header>
              <Card.Body>
                <p className="mb-2"><strong>CryptoGazer</strong></p>
                <p className="text-muted mb-2">Version 1.0.0</p>
                <p className="text-muted">Advanced Crypto Analytics Platform</p>
                <p className="text-muted small">© 2025 CryptoGazer Team. All rights reserved.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
