
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { investmentThemes, topPerformingSectors } from '@/lib/mockData';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

const FeaturedAnalysis = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Market Sectors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformingSectors.map((sector) => (
              <div key={sector.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    sector.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium">{sector.name}</span>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  sector.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {sector.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {sector.trend === 'up' ? '+' : ''}{sector.change.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Investment Themes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {investmentThemes.map((theme) => (
              <div key={theme.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{theme.title}</span>
                    <Badge 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {(theme.trendStrength * 100).toFixed(0)}% Strong
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{theme.description}</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div 
                    className="bg-primary h-1.5 rounded-full" 
                    style={{ width: `${theme.trendStrength * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedAnalysis;
