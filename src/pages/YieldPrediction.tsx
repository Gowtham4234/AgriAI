import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { TrendingUp, MapPin, Droplets, Thermometer, Sprout } from "lucide-react";

export default function YieldPrediction() {
  const [predicted, setPredicted] = useState(false);
  const [yieldValue, setYieldValue] = useState(0);

  const handlePredict = () => {
    // Mock prediction
    const randomYield = Math.floor(Math.random() * (500 - 350) + 350);
    setYieldValue(randomYield);
    setPredicted(true);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Yield Prediction</h1>
        <p className="text-muted-foreground mt-1">
          Get AI-powered yield predictions for your oilseed crops
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Crop Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-type">Crop Type</Label>
                <Select>
                  <SelectTrigger id="crop-type">
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mustard">Mustard</SelectItem>
                    <SelectItem value="groundnut">Groundnut</SelectItem>
                    <SelectItem value="soybean">Soybean</SelectItem>
                    <SelectItem value="sunflower">Sunflower</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soil-type">Soil Type</Label>
                <Select>
                  <SelectTrigger id="soil-type">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="black">Black Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Farm Area (acres)</Label>
                <Input id="area" type="number" placeholder="Enter area" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Environmental Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rainfall">Rainfall (mm)</Label>
                <div className="relative">
                  <Droplets className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="rainfall" type="number" placeholder="Average rainfall" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature (°C)</Label>
                <div className="relative">
                  <Thermometer className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="temperature" type="number" placeholder="Average temperature" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soil-moisture">Soil Moisture (%)</Label>
                <Input id="soil-moisture" type="number" placeholder="Soil moisture" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ph">Soil pH</Label>
                <Input id="ph" type="number" step="0.1" placeholder="pH level" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Fertilizer Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nitrogen">Nitrogen (kg/acre)</Label>
                <Input id="nitrogen" type="number" placeholder="N" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phosphorus">Phosphorus (kg/acre)</Label>
                <Input id="phosphorus" type="number" placeholder="P" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="potassium">Potassium (kg/acre)</Label>
                <Input id="potassium" type="number" placeholder="K" />
              </div>
            </div>
          </Card>

          <Button onClick={handlePredict} className="w-full" size="lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            Predict Yield
          </Button>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {predicted ? (
            <>
              <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout className="w-5 h-5" />
                  <h3 className="font-semibold">Predicted Yield</h3>
                </div>
                <div className="text-4xl font-bold mb-2">{yieldValue} kg/acre</div>
                <p className="text-primary-foreground/90 text-sm">
                  Based on current conditions
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Yield Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">vs Global Average</span>
                      <span className="text-sm font-medium text-primary">+12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">vs National Average</span>
                      <span className="text-sm font-medium text-primary">+8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '58%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Potential Gap</span>
                      <span className="text-sm font-medium text-accent">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Key Factors</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium">Soil Quality</p>
                      <p className="text-xs text-muted-foreground">Excellent moisture and pH levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium">Weather Conditions</p>
                      <p className="text-xs text-muted-foreground">Optimal rainfall and temperature</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium">Fertilizer Balance</p>
                      <p className="text-xs text-muted-foreground">Could optimize nitrogen levels</p>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No Prediction Yet</h3>
              <p className="text-sm text-muted-foreground">
                Fill in the form and click "Predict Yield" to get AI-powered predictions
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
