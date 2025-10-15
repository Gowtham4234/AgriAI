import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const yieldData = [
  { month: "Jan", predicted: 380, actual: 365 },
  { month: "Feb", predicted: 390, actual: 385 },
  { month: "Mar", predicted: 410, actual: 405 },
  { month: "Apr", predicted: 425, actual: 420 },
  { month: "May", predicted: 430, actual: 428 },
  { month: "Jun", predicted: 440, actual: 435 },
];

const cropDistribution = [
  { name: "Mustard", value: 35, color: "hsl(142, 71%, 45%)" },
  { name: "Soybean", value: 30, color: "hsl(142, 71%, 55%)" },
  { name: "Groundnut", value: 20, color: "hsl(43, 96%, 56%)" },
  { name: "Sunflower", value: 15, color: "hsl(43, 96%, 66%)" },
];

const soilDataTrend = [
  { week: "Week 1", moisture: 65, ph: 6.5, nitrogen: 45 },
  { week: "Week 2", moisture: 68, ph: 6.6, nitrogen: 48 },
  { week: "Week 3", moisture: 70, ph: 6.5, nitrogen: 50 },
  { week: "Week 4", moisture: 67, ph: 6.7, nitrogen: 52 },
];

const comparisonData = [
  { category: "Your Farm", yield: 425 },
  { category: "Regional Avg", yield: 390 },
  { category: "National Avg", yield: 380 },
  { category: "Global Avg", yield: 370 },
];

export default function Analytics() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive yield and performance insights
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5">
          <p className="text-sm text-muted-foreground">Average Yield</p>
          <p className="text-3xl font-bold text-foreground mt-2">425 kg/acre</p>
          <p className="text-xs text-primary mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +12% vs last season
          </p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted-foreground">Total Area</p>
          <p className="text-3xl font-bold text-foreground mt-2">120 acres</p>
          <p className="text-xs text-muted-foreground mt-1">Across 4 crops</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted-foreground">Efficiency Score</p>
          <p className="text-3xl font-bold text-foreground mt-2">87%</p>
          <p className="text-xs text-primary mt-1">Above target</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-muted-foreground">Revenue Estimate</p>
          <p className="text-3xl font-bold text-foreground mt-2">₹12.8L</p>
          <p className="text-xs text-muted-foreground mt-1">This season</p>
        </Card>
      </div>

      <Tabs defaultValue="yield" className="space-y-6">
        <TabsList>
          <TabsTrigger value="yield">Yield Trends</TabsTrigger>
          <TabsTrigger value="comparison">Benchmarking</TabsTrigger>
          <TabsTrigger value="soil">Soil Analytics</TabsTrigger>
          <TabsTrigger value="distribution">Crop Mix</TabsTrigger>
        </TabsList>

        <TabsContent value="yield" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Predicted vs Actual Yield</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="hsl(142, 71%, 45%)" 
                  strokeWidth={2}
                  name="Predicted Yield (kg/acre)"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="hsl(43, 96%, 56%)" 
                  strokeWidth={2}
                  name="Actual Yield (kg/acre)"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              AI predictions are closely tracking actual yield with 96% accuracy
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Yield Comparison</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="category" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="yield" fill="hsl(142, 71%, 45%)" radius={[8, 8, 0, 0]} name="Yield (kg/acre)" />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground">vs Regional</p>
                <p className="font-semibold text-primary">+9%</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground">vs National</p>
                <p className="font-semibold text-primary">+12%</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground">vs Global</p>
                <p className="font-semibold text-primary">+15%</p>
              </div>
              <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-xs text-muted-foreground">Potential Gap</p>
                <p className="font-semibold text-accent">18%</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="soil" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Soil Health Trends</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={soilDataTrend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="moisture" 
                  stroke="hsl(142, 71%, 45%)" 
                  strokeWidth={2}
                  name="Moisture (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="nitrogen" 
                  stroke="hsl(43, 96%, 56%)" 
                  strokeWidth={2}
                  name="Nitrogen (kg/acre)"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Avg Moisture</p>
                <p className="text-2xl font-bold mt-1">67.5%</p>
                <p className="text-xs text-primary mt-1">Optimal range</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Avg pH</p>
                <p className="text-2xl font-bold mt-1">6.6</p>
                <p className="text-xs text-primary mt-1">Ideal for oilseeds</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Avg Nitrogen</p>
                <p className="text-2xl font-bold mt-1">48.8 kg</p>
                <p className="text-xs text-muted-foreground mt-1">Per acre</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Crop Distribution by Area</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={cropDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cropDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Crop Details</h3>
              <div className="space-y-3">
                {cropDistribution.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: crop.color }}
                      />
                      <span className="font-medium">{crop.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{crop.value}%</p>
                      <p className="text-xs text-muted-foreground">{(120 * crop.value / 100).toFixed(0)} acres</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm font-medium mb-2">Diversification Score</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <span className="font-semibold">75%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Good crop rotation reducing pest and disease risk
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
