import { Card } from "@/components/ui/card";
import { TrendingUp, Droplets, Sun, Wind, Sprout, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground p-8 shadow-glow">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome to AgriAI</h2>
          <p className="text-primary-foreground/90 mb-6">
            Get AI-powered insights to maximize your oilseed crop yield
          </p>
          <div className="flex gap-3">
            <Button asChild variant="secondary">
              <Link to="/yield">Predict Yield</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/advisory">View Advisory</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Predicted Yield</p>
              <p className="text-2xl font-bold text-foreground mt-1">425 kg/acre</p>
              <p className="text-xs text-primary mt-1">↑ 12% vs last season</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-5 hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Soil Moisture</p>
              <p className="text-2xl font-bold text-foreground mt-1">68%</p>
              <p className="text-xs text-primary mt-1">Optimal range</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-5 hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-2xl font-bold text-foreground mt-1">28°C</p>
              <p className="text-xs text-muted-foreground mt-1">Partly cloudy</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Sun className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-5 hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Crops</p>
              <p className="text-2xl font-bold text-foreground mt-1">3 Fields</p>
              <p className="text-xs text-muted-foreground mt-1">Mustard, Soybean</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weather Widget */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Today's Weather</h3>
            <Sun className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-accent" />
                <span className="font-medium">Temperature</span>
              </div>
              <span className="text-muted-foreground">28°C</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="font-medium">Rainfall</span>
              </div>
              <span className="text-muted-foreground">12mm expected</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Wind Speed</span>
              </div>
              <span className="text-muted-foreground">15 km/h</span>
            </div>
          </div>
        </Card>

        {/* AI Advisory Preview */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">AI Recommendations</h3>
            <Sprout className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Irrigation Alert</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Increase irrigation by 10% due to rising temperatures
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Fertilizer Recommendation</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Apply nitrogen-rich fertilizer at 45 kg/acre
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Pest Alert</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monitor for aphids - preventive spray recommended
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button asChild className="w-full mt-4" variant="outline">
            <Link to="/advisory">View All Recommendations</Link>
          </Button>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Yield prediction generated</p>
              <p className="text-xs text-muted-foreground">Mustard Field A - 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Droplets className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Soil moisture reading updated</p>
              <p className="text-xs text-muted-foreground">Soybean Field B - 5 hours ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
