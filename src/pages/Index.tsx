
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StockCard from '@/components/StockCard';
import StockChart from '@/components/StockChart';
import PerformanceMetric from '@/components/PerformanceMetric';
import FeaturedAnalysis from '@/components/FeaturedAnalysis';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { marketMetrics, featuredStocks } from '@/lib/mockData';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Get the top performing stock
  const topStock = [...featuredStocks].sort((a, b) => b.confidence - a.confidence)[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6 text-center">
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
                Financial Insights • Market Analysis • Smart Investments
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Discover Your Next <span className="text-primary">Investment</span> Opportunity
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                Data-driven analysis and market insights to help you make smarter investment decisions with confidence.
              </p>
            </div>
            
            {/* Market metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {marketMetrics.map((metric) => (
                <PerformanceMetric
                  key={metric.id}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  trend={metric.trend}
                  icon={metric.icon}
                />
              ))}
            </div>
            
            {/* Featured stock chart */}
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <StockChart
                data={topStock.historicalData}
                symbol={topStock.symbol}
                name={topStock.name}
                currentPrice={topStock.price}
                change={topStock.change}
                changePercent={topStock.changePercent}
              />
            </div>
          </section>
          
          {/* Top recommendations */}
          <section className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Investment Recommendations</h2>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                View all recommendations
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredStocks.slice(0, 3).map((stock, index) => (
                <div 
                  key={stock.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <StockCard stock={stock} />
                </div>
              ))}
            </div>
          </section>
          
          {/* Market Analysis */}
          <section className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Market Analysis</h2>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                More insights
              </a>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
              <FeaturedAnalysis />
            </div>
          </section>
          
          {/* Top Performers */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Today's Movers</h2>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                View all stocks
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredStocks.slice(3, 5).map((stock, index) => (
                <div 
                  key={stock.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <StockCard stock={stock} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
