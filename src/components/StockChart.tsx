
import { useState, useCallback } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Line
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface StockChartProps {
  data: Array<{ date: string; price: number }>;
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  simplified?: boolean;
}

const StockChart = ({ 
  data, 
  symbol, 
  name, 
  currentPrice, 
  change, 
  changePercent,
  simplified = false 
}: StockChartProps) => {
  const [timeframe, setTimeframe] = useState<'1D' | '5D' | '1M' | '3M' | '1Y' | 'All'>('1M');
  const isMobile = useIsMobile();
  
  const isPositive = change >= 0;
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatPrice = useCallback((value: number) => {
    return formatCurrency.format(value);
  }, [formatCurrency]);

  // Find min and max values to set proper domain
  const minPrice = Math.min(...data.map(d => d.price)) * 0.995;
  const maxPrice = Math.max(...data.map(d => d.price)) * 1.005;

  const timeframes = ['1D', '5D', '1M', '3M', '1Y', 'All'];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg border border-border shadow-sm">
          <p className="font-mono text-sm mb-1">{label}</p>
          <p className="font-semibold">
            {formatCurrency.format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 ${simplified ? 'border shadow-none' : 'shadow-soft'}`}>
      <CardContent className={simplified ? 'p-3 pb-3 lg:p-3 lg:pb-3' : 'p-4 pb-4 lg:p-6 lg:pb-6'}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              {!simplified && (
                <h3 className="text-xl font-semibold">{symbol}</h3>
              )}
              {simplified ? (
                <p className="text-base font-semibold">{symbol}</p>
              ) : (
                <p className="text-muted-foreground">{name}</p>
              )}
            </div>
            
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl font-semibold">
                {formatPrice(currentPrice)}
              </span>
              <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
          
          {!simplified && (
            <div className="flex space-x-1">
              {timeframes.map((tf) => (
                <Button
                  key={tf}
                  variant={timeframe === tf ? "secondary" : "ghost"}
                  size="sm"
                  className="text-xs px-2 h-7"
                  onClick={() => setTimeframe(tf as any)}
                >
                  {tf}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        <div className={`w-full ${simplified ? 'h-24' : 'h-48 md:h-64'} mt-2`}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id={`gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              {!simplified && (
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="rgba(0,0,0,0.05)" 
                />
              )}
              
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                minTickGap={30}
                tickFormatter={(value) => {
                  if (simplified) return '';
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                }}
              />
              
              <YAxis 
                domain={[minPrice, maxPrice]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => {
                  if (simplified) return '';
                  return formatCurrency.format(value);
                }}
                width={simplified ? 0 : 60}
                tickCount={5}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"} 
                fill={`url(#gradient-${symbol})`}
                strokeWidth={2}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;
