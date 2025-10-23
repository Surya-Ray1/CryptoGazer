import React from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import { FiSun, FiMoon, FiBell, FiSearch } from 'react-icons/fi';
import './Header.scss';

const Header = ({ theme, toggleTheme }) => {
  return (
    <Navbar bg={theme} variant={theme} className="header-navbar border-bottom px-4 py-3">
      <Container fluid>
        <div className="d-flex align-items-center flex-grow-1">
          <Form className="search-form me-auto d-none d-md-flex">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0">
                <FiSearch />
              </span>
              <Form.Control
                type="search"
                placeholder="Search tokens, addresses..."
                className="border-start-0"
              />
            </div>
          </Form>

          <div className="d-flex align-items-center gap-3">
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle p-2"
              title="Notifications"
            >
              <FiBell size={18} />
            </Button>

            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle p-2"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
