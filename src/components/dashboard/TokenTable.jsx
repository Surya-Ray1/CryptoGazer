import React, { useEffect, useState } from 'react';
import { Card, Table, Badge, Spinner, Alert } from 'react-bootstrap';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { formatCurrency, formatPercentage } from '../../utils/utils';

const TokenTable = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true);
        
        // Using CoinGecko API (better CORS support, no API key needed)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform CoinGecko data to match our format
        const transformedData = data.map(coin => ({
          id: coin.id,
          rank: coin.market_cap_rank,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          priceUsd: coin.current_price,
          changePercent24Hr: coin.price_change_percentage_24h,
          marketCapUsd: coin.market_cap,
          volumeUsd24Hr: coin.total_volume
        }));
        
        setTokens(transformedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching tokens:', err);
        setError('Failed to load token data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
    const interval = setInterval(fetchTokens, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card>
        <Card.Body className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 text-muted">Loading tokens...</p>
        </Card.Body>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Card.Body>
          <Alert variant="danger">{error}</Alert>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className="mb-0">Top Cryptocurrencies</Card.Title>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
                <th>Volume (24h)</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => {
                const change = parseFloat(token.changePercent24Hr);
                const isPositive = change >= 0;
                
                return (
                  <tr key={token.id}>
                    <td className="text-muted">#{token.rank}</td>
                    <td>
                      <div>
                        <strong>{token.name}</strong>
                        <small className="text-muted ms-2">{token.symbol}</small>
                      </div>
                    </td>
                    <td>{formatCurrency(parseFloat(token.priceUsd))}</td>
                    <td>
                      <Badge 
                        bg={isPositive ? 'success' : 'danger'}
                        className="d-inline-flex align-items-center"
                      >
                        {isPositive ? <FiTrendingUp className="me-1" /> : <FiTrendingDown className="me-1" />}
                        {formatPercentage(change)}
                      </Badge>
                    </td>
                    <td>{formatCurrency(parseFloat(token.marketCapUsd), true)}</td>
                    <td>{formatCurrency(parseFloat(token.volumeUsd24Hr), true)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TokenTable;
