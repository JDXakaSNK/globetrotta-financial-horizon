
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart, 
  PieChart, 
  LineChart, 
  Activity 
} from 'lucide-react';
import { 
  Card,
  CardContent
} from '@/components/ui/card';

interface PerformanceMetricProps {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

const PerformanceMetric = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon 
}: PerformanceMetricProps) => {
  const formatValue = (val: number) => {
    if (val > 1000000000) {
      return `${(val / 1000000000).toFixed(2)}B`;
    } else if (val > 1000000) {
      return `${(val / 1000000).toFixed(2)}M`;
    } else if (val > 1000) {
      return `${(val / 1000).toFixed(2)}K`;
    } else {
      return val.toLocaleString();
    }
  };

  const renderIcon = () => {
    switch (icon) {
      case 'trending-up':
        return <TrendingUp className="h-5 w-5" />;
      case 'trending-down':
        return <TrendingDown className="h-5 w-5" />;
      case 'bar-chart':
        return <BarChart className="h-5 w-5" />;
      case 'pie-chart':
        return <PieChart className="h-5 w-5" />;
      case 'line-chart':
        return <LineChart className="h-5 w-5" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  return (
    <Card className="overflow-hidden hover-scale">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className={`
            flex justify-center items-center 
            ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}
          `}>
            {renderIcon()}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-semibold">{formatValue(value)}</p>
          <div className={`flex items-center text-sm font-medium
            ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}
          `}>
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : trend === 'down' ? (
              <TrendingDown className="h-4 w-4 mr-1" />
            ) : null}
            {change > 0 ? '+' : ''}{change.toFixed(2)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetric;
