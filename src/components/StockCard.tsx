
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp, 
  TrendingDown, 
  BarChart4
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StockChart from './StockChart';
import { Stock } from '@/lib/mockData';

interface StockCardProps {
  stock: Stock;
}

const StockCard = ({ stock }: StockCardProps) => {
  const { 
    symbol, 
    name, 
    price, 
    change, 
    changePercent, 
    recommendation,
    confidence,
    analysis,
    historicalData
  } = stock;
  
  const isPositive = change >= 0;
  
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatLargeNumber = (num: number) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(2)}T`;
    } else if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    }
    return num.toString();
  };

  const getRecommendationColor = () => {
    switch (recommendation) {
      case 'buy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'hold':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'sell':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="overflow-hidden hover-scale">
      <div className="p-4 pb-0 md:p-6 md:pb-0">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{symbol}</h3>
              <p className="text-muted-foreground text-sm">{name}</p>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-xl font-semibold mr-2">
                {formatCurrency.format(price)}
              </span>
              <span className={`flex items-center text-sm font-medium ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {isPositive ? (
                  <ArrowUpRight className="h-4 w-4 mr-0.5" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-0.5" />
                )}
                {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`uppercase font-semibold px-2 py-0.5 text-xs ${getRecommendationColor()}`}
          >
            {recommendation}
          </Badge>
        </div>
        
        <div className="flex flex-col mt-3">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Market Cap</p>
              <p className="font-medium">{formatLargeNumber(stock.marketCap)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">P/E Ratio</p>
              <p className="font-medium">{stock.peRatio.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Dividend</p>
              <p className="font-medium">{stock.dividendYield.toFixed(2)}%</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center mb-1">
              <p className="text-sm font-medium">Confidence Score</p>
              <span className="text-xs ml-2 bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {(confidence * 100).toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${confidence * 100}%` }}
              ></div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{analysis}</p>
        </div>
      </div>
      
      <StockChart 
        data={historicalData}
        symbol={symbol}
        name={name}
        currentPrice={price}
        change={change}
        changePercent={changePercent}
        simplified
      />

      <CardFooter className="flex justify-between p-4 pt-3 bg-gray-50/50">
        <Button variant="outline" size="sm" className="w-[48%]">
          <BarChart4 className="h-4 w-4 mr-2" />
          Details
        </Button>
        <Button size="sm" className="w-[48%]">
          {recommendation === 'buy' ? (
            <TrendingUp className="h-4 w-4 mr-2" />
          ) : recommendation === 'sell' ? (
            <TrendingDown className="h-4 w-4 mr-2" />
          ) : null}
          Add to Watchlist
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StockCard;
