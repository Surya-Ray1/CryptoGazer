import React from 'react';
import { Card } from 'react-bootstrap';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import './StatCard.scss';

const StatCard = ({ title, value, icon: Icon, description, change, trend }) => {
  return (
    <Card className="stat-card h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
            <Card.Title className="h3 mb-0">{value}</Card.Title>
          </div>
          <div className="icon-wrapper">
            <Icon size={24} />
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{description}</small>
          {change && (
            <div className={`d-flex align-items-center ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
              {trend === 'up' ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
              <small className="ms-1">{change}</small>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
