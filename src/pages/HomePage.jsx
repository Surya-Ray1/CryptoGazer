import React, { useEffect, useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { FiTrendingUp, FiGlobe, FiActivity } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import TokenTable from '../components/dashboard/TokenTable';
import PortfolioOverview from '../components/dashboard/PortfolioOverview';
import PortfolioPerformanceChart from '../components/dashboard/PortfolioPerformanceChart';
import EnhancedHomePage from '../components/dashboard/EnhancedHomePage';
import { formatCompactNumber } from '../utils/utils';

const HomePage = () => {
  const [globalMarketData, setGlobalMarketData] = useState(null);
  const [fearAndGreed, setFearAndGreed] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [errorStats, setErrorStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoadingStats(true);
      setErrorStats(null);
      
      try {
        // Using CoinGecko for global stats and Alternative.me for Fear & Greed
        const [globalRes, fngRes] = await Promise.all([
          fetch('https://api.coingecko.com/api/v3/global'),
          fetch('https://api.alternative.me/fng/?limit=1')
        ]);

        console.log('[CoinGecko] Global API response status:', globalRes.status);
        console.log('[Alternative.me] F&G API response status:', fngRes.status);

        if (!globalRes.ok) {
          throw new Error(`CoinGecko API error: ${globalRes.status}`);
        }

        if (!fngRes.ok) {
          throw new Error(`Fear & Greed API error: ${fngRes.status}`);
        }

        const globalData = await globalRes.json();
        const fngData = await fngRes.json();

        console.log('[CoinGecko] Global API data:', globalData);
        console.log('[Alternative.me] F&G API data:', fngData);

        if (globalData.data) {
          const transformedGlobalData = {
            market_cap_usd: globalData.data.total_market_cap?.usd || 0,
            volume_24h_usd: globalData.data.total_volume?.usd || 0,
            market_cap_change_percentage_24h_usd: globalData.data.market_cap_change_percentage_24h_usd || 0,
            btc_dominance_percentage: globalData.data.market_cap_percentage?.btc || 0,
            eth_dominance_percentage: globalData.data.market_cap_percentage?.eth || 0,
          };
          setGlobalMarketData(transformedGlobalData);
        } else {
          throw new Error('No global data found in CoinGecko API response');
        }

        if (fngData.data && fngData.data.length > 0) {
          setFearAndGreed(fngData.data[0]);
        } else {
          throw new Error('No Fear & Greed data found in Alternative.me API response');
        }
      } catch (err) {
        let message = 'An unknown error occurred while fetching dashboard statistics.';
        if (err instanceof Error) {
          if (err.message.toLowerCase().includes('failed to fetch')) {
            message = 'Failed to connect to statistics services (api.alternative.me). Please check your internet connection or the API\'s status.';
          } else {
            message = err.message;
          }
        } else if (typeof err === 'string') {
          message = err;
        }
        setErrorStats(message);
        console.error('HomePage fetchStats error details:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, []);

  const marketCapChange = globalMarketData?.market_cap_change_percentage_24h_usd;
  const marketCapChangeString = marketCapChange !== undefined
    ? `${marketCapChange >= 0 ? '+' : ''}${marketCapChange.toFixed(1)}%`
    : 'Loading...';

  return (
    <div className="home-page fade-in">
      {/* Enhanced Home Page Section */}
      <EnhancedHomePage />

      {/* Error Alert */}
      {errorStats && (
        <Alert variant="danger" className="mb-4">
          <Alert.Heading>Error loading dashboard statistics:</Alert.Heading>
          <p className="mb-0">{errorStats}</p>
        </Alert>
      )}

      {/* Statistics Cards */}
      <Row className="g-4 mb-4">
        <Col md={6} lg={4}>
          <StatCard
            title="Global Market Cap"
            value={loadingStats ? 'Loading...' : formatCompactNumber(globalMarketData?.market_cap_usd)}
            icon={FiGlobe}
            description="Total value of all cryptocurrencies"
            change={loadingStats ? '' : marketCapChangeString}
            trend={marketCapChange >= 0 ? 'up' : 'down'}
          />
        </Col>
        <Col md={6} lg={4}>
          <StatCard
            title="Fear & Greed Index"
            value={loadingStats ? 'Loading...' : (fearAndGreed?.value || 'N/A')}
            icon={FiActivity}
            description={loadingStats ? 'Loading...' : (fearAndGreed?.value_classification || 'N/A')}
          />
        </Col>
        <Col md={6} lg={4}>
          <StatCard
            title="24h Volume"
            value={loadingStats ? 'Loading...' : formatCompactNumber(globalMarketData?.volume_24h_usd)}
            icon={FiTrendingUp}
            description="Total crypto volume traded in 24h"
          />
        </Col>
      </Row>

      {/* Portfolio Overview and Performance */}
      <Row className="g-4 mb-4">
        <Col lg={4}>
          <PortfolioOverview />
        </Col>
        <Col lg={8}>
          <PortfolioPerformanceChart />
        </Col>
      </Row>

      {/* Token Table */}
      <Row>
        <Col>
          <TokenTable />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
