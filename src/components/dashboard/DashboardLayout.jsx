import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { 
  FiHome, 
  FiBriefcase, 
  FiTrendingUp, 
  FiBarChart2, 
  FiZap, 
  FiSettings,
  FiMenu,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import Header from './Header';
import './DashboardLayout.scss';

const DashboardLayout = ({ children, theme, toggleTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const location = useLocation();

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: FiHome },
    {
      label: 'Portfolio',
      icon: FiBriefcase,
      isParent: true,
      isOpen: portfolioOpen,
      toggle: () => setPortfolioOpen(!portfolioOpen),
      subItems: [
        { href: '/portfolio/overview', label: 'Overview' },
        { href: '/portfolio/add-transaction', label: 'Add Transaction' },
        { href: '/advanced-portfolio', label: 'Advanced Portfolio' },
      ]
    },
    { href: '/markets', label: 'Markets', icon: FiTrendingUp },
    {
      label: 'Analytics',
      icon: FiBarChart2,
      isParent: true,
      isOpen: analyticsOpen,
      toggle: () => setAnalyticsOpen(!analyticsOpen),
      subItems: [
        { href: '/dex-analytics', label: 'DEX Analytics' },
        { href: '/token-comparison', label: 'Token Comparison' },
      ]
    },
    { href: '/gas-tracker', label: 'Gas Tracker', icon: FiZap },
    { href: '/settings', label: 'Settings', icon: FiSettings },
  ];

  const SidebarContent = ({ isMobile = false }) => (
    <div className="sidebar-content">
      <div className="sidebar-header text-center py-4">
        <div className="user-avatar mx-auto mb-3">
          <img 
            src="https://placehold.co/100x100.png" 
            alt="User" 
            className="rounded-circle"
            width="80"
            height="80"
          />
        </div>
        <h5 className="mb-0">CryptoGazer</h5>
        <small className="text-muted">User Name</small>
      </div>

      <Nav className="flex-column px-3">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.isParent ? (
              <>
                <Nav.Link
                  onClick={item.toggle}
                  className="d-flex align-items-center justify-content-between nav-item-custom"
                >
                  <div className="d-flex align-items-center">
                    <item.icon className="me-2" size={20} />
                    <span>{item.label}</span>
                  </div>
                  {item.isOpen ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                </Nav.Link>
                {item.isOpen && (
                  <div className="submenu ps-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.href}
                        className={({ isActive }) => 
                          `nav-link nav-item-custom ${isActive ? 'active' : ''}`
                        }
                        onClick={isMobile ? handleCloseSidebar : undefined}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.href}
                className={({ isActive }) => 
                  `nav-link d-flex align-items-center nav-item-custom ${isActive ? 'active' : ''}`
                }
                onClick={isMobile ? handleCloseSidebar : undefined}
              >
                <item.icon className="me-2" size={20} />
                <span>{item.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </Nav>
    </div>
  );

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <Navbar bg="dark" variant="dark" className="d-lg-none">
        <Container fluid>
          <Navbar.Brand>CryptoGazer</Navbar.Brand>
          <button 
            className="btn btn-outline-light"
            onClick={handleShowSidebar}
          >
            <FiMenu size={24} />
          </button>
        </Container>
      </Navbar>

      {/* Mobile Sidebar */}
      <Offcanvas 
        show={showSidebar} 
        onHide={handleCloseSidebar}
        className="sidebar-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent isMobile={true} />
        </Offcanvas.Body>
      </Offcanvas>

      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Desktop Sidebar */}
          <Col lg={2} xl={2} className="d-none d-lg-block sidebar">
            <SidebarContent />
          </Col>

          {/* Main Content */}
          <Col lg={10} xl={10} className="main-content">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <div className="content-wrapper p-4">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardLayout;
