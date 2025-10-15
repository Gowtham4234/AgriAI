import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sprout, Bug, AlertCircle, TrendingUp, Calendar } from "lucide-react";

export default function Advisory() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Advisory</h1>
        <p className="text-muted-foreground mt-1">
          Personalized recommendations to optimize your crop yield
        </p>
      </div>

      <Tabs defaultValue="irrigation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
          <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
          <TabsTrigger value="fertilizer">Fertilizer</TabsTrigger>
          <TabsTrigger value="pest">Pest Control</TabsTrigger>
          <TabsTrigger value="seeds">Seed Varieties</TabsTrigger>
        </TabsList>

        <TabsContent value="irrigation" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Increase Irrigation Schedule</h3>
                  <Badge variant="destructive">High Priority</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Current soil moisture is at 58%. Recommended level is 65-75% for optimal mustard growth during flowering stage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Recommended Frequency</p>
                    <p className="font-semibold">Every 2 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Water Amount</p>
                    <p className="font-semibold">25-30 mm</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Best Time</p>
                    <p className="font-semibold">Early morning</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Adjust for Monsoon Season</h3>
                  <Badge>Medium Priority</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Weather forecast shows 45mm rainfall expected in next 7 days. Reduce irrigation frequency to prevent waterlogging.
                </p>
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-sm">
                    💡 <span className="font-medium">Tip:</span> Ensure proper drainage channels are cleared before heavy rainfall
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="fertilizer" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Nitrogen Application - Critical Stage</h3>
                  <Badge variant="destructive">High Priority</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your soybean crop is entering the pod formation stage. Nitrogen boost is crucial for maximizing yield.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Recommended Dosage</p>
                    <p className="text-2xl font-bold text-foreground">45 kg/acre</p>
                    <p className="text-xs text-muted-foreground mt-1">Urea (46% N)</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Application Method</p>
                    <p className="font-semibold">Top dressing</p>
                    <p className="text-xs text-muted-foreground mt-1">Split into 2 applications</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Phosphorus & Potassium Balance</h3>
                  <Badge>Medium Priority</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Soil test shows optimal P and K levels. Maintain current application rates for best results.
                </p>
                <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">Phosphorus (P₂O₅)</p>
                    <p className="font-semibold mt-1">20 kg/acre</p>
                  </div>
                  <div className="flex-1 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">Potassium (K₂O)</p>
                    <p className="font-semibold mt-1">15 kg/acre</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pest" className="space-y-4">
          <Card className="p-6 border-destructive/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <Bug className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Aphid Infestation Alert</h3>
                  <Badge variant="destructive">Urgent</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Weather conditions (28°C, 70% humidity) are favorable for aphid population growth. Preventive action recommended.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                    <p className="font-medium text-sm mb-1">Recommended Treatment</p>
                    <p className="text-sm text-muted-foreground">Apply Imidacloprid 17.8 SL @ 0.5 ml/liter or use neem-based organic spray</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-sm mb-1">Application Schedule</p>
                    <p className="text-sm text-muted-foreground">Spray in early morning or evening. Repeat after 10 days if needed</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Leaf Spot Disease - Monitor</h3>
                  <Badge>Low Risk</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Current conditions show low risk for leaf spot diseases. Continue regular monitoring and maintain field hygiene.
                </p>
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-sm">
                    💡 <span className="font-medium">Prevention Tips:</span> Ensure proper spacing, avoid overhead irrigation, remove infected leaves promptly
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="seeds" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">High-Yield Seed Recommendations</h3>
            <p className="text-muted-foreground mb-6">
              Based on your soil type, climate zone, and farming practices, these varieties are recommended for maximum yield.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">NRCHB 101 (Mustard)</h4>
                    <p className="text-sm text-muted-foreground">High-yielding bio-fortified variety</p>
                  </div>
                  <Badge className="bg-primary">Recommended</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Yield Potential</p>
                    <p className="font-semibold text-sm">18-22 q/ha</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Maturity</p>
                    <p className="font-semibold text-sm">130-135 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Oil Content</p>
                    <p className="font-semibold text-sm">40-42%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Disease Resistance</p>
                    <p className="font-semibold text-sm">Moderate</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">JS 95-60 (Soybean)</h4>
                    <p className="text-sm text-muted-foreground">Widely adapted variety</p>
                  </div>
                  <Badge variant="secondary">Alternative</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Yield Potential</p>
                    <p className="font-semibold text-sm">25-30 q/ha</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Maturity</p>
                    <p className="font-semibold text-sm">95-100 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Protein Content</p>
                    <p className="font-semibold text-sm">40-42%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Disease Resistance</p>
                    <p className="font-semibold text-sm">Good</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">ICGV 91114 (Groundnut)</h4>
                    <p className="text-sm text-muted-foreground">Spanish type, early maturing</p>
                  </div>
                  <Badge variant="secondary">Alternative</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Yield Potential</p>
                    <p className="font-semibold text-sm">20-25 q/ha</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Maturity</p>
                    <p className="font-semibold text-sm">100-110 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Oil Content</p>
                    <p className="font-semibold text-sm">48-50%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Disease Resistance</p>
                    <p className="font-semibold text-sm">Excellent</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
