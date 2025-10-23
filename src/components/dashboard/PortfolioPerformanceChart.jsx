import React, { useState } from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const PortfolioPerformanceChart = () => {
  const [timeframe, setTimeframe] = useState('7d');

  // Mock data - replace with actual portfolio performance data
  const data = {
    '24h': [
      { time: '00:00', value: 45000 },
      { time: '04:00', value: 45200 },
      { time: '08:00', value: 44800 },
      { time: '12:00', value: 45400 },
      { time: '16:00', value: 45600 },
      { time: '20:00', value: 45800 },
      { time: '24:00', value: 45678 },
    ],
    '7d': [
      { time: 'Mon', value: 42000 },
      { time: 'Tue', value: 43200 },
      { time: 'Wed', value: 44100 },
      { time: 'Thu', value: 43800 },
      { time: 'Fri', value: 44500 },
      { time: 'Sat', value: 45200 },
      { time: 'Sun', value: 45678 },
    ],
    '30d': [
      { time: 'Week 1', value: 38000 },
      { time: 'Week 2', value: 40000 },
      { time: 'Week 3', value: 42000 },
      { time: 'Week 4', value: 45678 },
    ],
    '1y': [
      { time: 'Jan', value: 28000 },
      { time: 'Feb', value: 30000 },
      { time: 'Mar', value: 32000 },
      { time: 'Apr', value: 31000 },
      { time: 'May', value: 33000 },
      { time: 'Jun', value: 35000 },
      { time: 'Jul', value: 37000 },
      { time: 'Aug', value: 39000 },
      { time: 'Sep', value: 41000 },
      { time: 'Oct', value: 43000 },
      { time: 'Nov', value: 44500 },
      { time: 'Dec', value: 45678 },
    ],
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark text-white p-2 rounded border">
          <p className="mb-1">{payload[0].payload.time}</p>
          <p className="mb-0 fw-bold">
            ${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="h-100">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title className="mb-0">Portfolio Performance</Card.Title>
        <ButtonGroup size="sm">
          <Button 
            variant={timeframe === '24h' ? 'primary' : 'outline-secondary'}
            onClick={() => setTimeframe('24h')}
          >
            24H
          </Button>
          <Button 
            variant={timeframe === '7d' ? 'primary' : 'outline-secondary'}
            onClick={() => setTimeframe('7d')}
          >
            7D
          </Button>
          <Button 
            variant={timeframe === '30d' ? 'primary' : 'outline-secondary'}
            onClick={() => setTimeframe('30d')}
          >
            30D
          </Button>
          <Button 
            variant={timeframe === '1y' ? 'primary' : 'outline-secondary'}
            onClick={() => setTimeframe('1y')}
          >
            1Y
          </Button>
        </ButtonGroup>
      </Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data[timeframe]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis 
              dataKey="time" 
              stroke="#888"
              style={{ fontSize: '0.875rem' }}
            />
            <YAxis 
              stroke="#888"
              style={{ fontSize: '0.875rem' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#0d6efd" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default PortfolioPerformanceChart;
