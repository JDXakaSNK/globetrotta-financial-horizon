
export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  peRatio: number;
  dividendYield: number;
  recommendation: 'buy' | 'hold' | 'sell';
  confidence: number;
  analysis: string;
  historicalData: {
    date: string;
    price: number;
  }[];
}

export interface PerformanceMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export const featuredStocks: Stock[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 187.42,
    change: 1.87,
    changePercent: 1.01,
    volume: 65432100,
    marketCap: 2950000000000,
    peRatio: 31.2,
    dividendYield: 0.52,
    recommendation: 'buy',
    confidence: 0.92,
    analysis: "Apple's consistent innovation in hardware, growing services revenue, and loyal customer base position it well for continued growth. Recent AI initiatives should drive long-term value.",
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 170 + Math.sin(i * 0.3) * 10 + i * 0.5 + Math.random() * 2
    }))
  },
  {
    id: '2',
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 405.65,
    change: 3.23,
    changePercent: 0.80,
    volume: 23541200,
    marketCap: 3020000000000,
    peRatio: 38.6,
    dividendYield: 0.73,
    recommendation: 'buy',
    confidence: 0.89,
    analysis: "Microsoft continues to dominate in cloud services with Azure growth exceeding expectations. Their strategic AI investments and software ecosystem provide strong defensive characteristics.",
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 380 + Math.sin(i * 0.25) * 15 + i * 0.7 + Math.random() * 3
    }))
  },
  {
    id: '3',
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 887.89,
    change: -12.35,
    changePercent: -1.37,
    volume: 43856700,
    marketCap: 2190000000000,
    peRatio: 83.4,
    dividendYield: 0.03,
    recommendation: 'buy',
    confidence: 0.86,
    analysis: "NVIDIA maintains its leadership in GPUs for AI applications, with data center revenue growth accelerating. Despite high valuation, AI computing demand continues to outpace supply.",
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 820 + Math.sin(i * 0.4) * 40 + i * 2 + Math.random() * 5
    }))
  },
  {
    id: '4',
    symbol: 'AMZN',
    name: 'Amazon.com Inc',
    price: 178.15,
    change: 2.34,
    changePercent: 1.33,
    volume: 32654700,
    marketCap: 1850000000000,
    peRatio: 61.5,
    dividendYield: 0,
    recommendation: 'buy',
    confidence: 0.81,
    analysis: "Amazon's AWS maintains strong cloud market position while retail business shows improving margins. Advertising growth and logistics infrastructure provide competitive advantages.",
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 165 + Math.sin(i * 0.35) * 8 + i * 0.4 + Math.random() * 2.5
    }))
  },
  {
    id: '5',
    symbol: 'GOOGL',
    name: 'Alphabet Inc',
    price: 163.88,
    change: -0.54,
    changePercent: -0.33,
    volume: 25987600,
    marketCap: 2050000000000,
    peRatio: 28.2,
    dividendYield: 0.49,
    recommendation: 'hold',
    confidence: 0.74,
    analysis: "Google's search and advertising business remains strong with AI integration enhancing products. Regulatory challenges and increased competition in cloud present moderate headwinds.",
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 160 + Math.sin(i * 0.28) * 6 + i * 0.1 + Math.random() * 1.8
    }))
  },
];

export const marketMetrics: PerformanceMetric[] = [
  {
    id: 'm1',
    title: 'S&P 500',
    value: 5123.45,
    change: 0.75,
    trend: 'up',
    icon: 'trending-up'
  },
  {
    id: 'm2',
    title: 'Nasdaq',
    value: 16234.78,
    change: 1.05,
    trend: 'up',
    icon: 'trending-up'
  },
  {
    id: 'm3',
    title: 'Dow Jones',
    value: 38976.34,
    change: 0.32,
    trend: 'up',
    icon: 'trending-up'
  },
  {
    id: 'm4',
    title: 'VIX',
    value: 15.32,
    change: -3.21,
    trend: 'down',
    icon: 'bar-chart'
  },
];

export const topPerformingSectors = [
  {
    id: 's1',
    name: 'Technology',
    change: 1.87,
    trend: 'up'
  },
  {
    id: 's2',
    name: 'Healthcare',
    change: 1.42,
    trend: 'up'
  },
  {
    id: 's3',
    name: 'Energy',
    change: 0.96,
    trend: 'up'
  },
  {
    id: 's4',
    name: 'Financials',
    change: -0.23,
    trend: 'down'
  },
  {
    id: 's5',
    name: 'Consumer Discretionary',
    change: 0.65,
    trend: 'up'
  }
];

export const investmentThemes = [
  {
    id: 't1',
    title: 'Artificial Intelligence',
    description: 'Companies developing or implementing AI technologies',
    trendStrength: 0.95
  },
  {
    id: 't2',
    title: 'Clean Energy',
    description: 'Renewable energy producers and related technologies',
    trendStrength: 0.82
  },
  {
    id: 't3',
    title: 'Cybersecurity',
    description: 'Network security and data protection providers',
    trendStrength: 0.88
  },
  {
    id: 't4',
    title: 'Semiconductor',
    description: 'Chip designers and manufacturers',
    trendStrength: 0.91
  }
];
