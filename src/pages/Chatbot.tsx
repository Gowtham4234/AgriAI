import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Send, Mic, Bot, User, Languages } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    role: "bot",
    content: "नमस्ते! मैं AgriAI हूं। मैं आपकी खेती से जुड़े सवालों में मदद कर सकता हूं। आप मुझसे सिंचाई, उर्वरक, कीट नियंत्रण के बारे में पूछ सकते हैं।",
    timestamp: new Date(),
  },
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("hindi");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      const responses = {
        english: "Based on your current soil moisture levels and weather forecast, I recommend increasing irrigation frequency to every 2 days with 25-30mm water. This will help optimize your mustard crop yield during the flowering stage.",
        hindi: "आपकी मिट्टी की नमी और मौसम के पूर्वानुमान के आधार पर, मैं सलाह देता हूं कि सिंचाई को हर 2 दिन में 25-30 मिमी पानी के साथ बढ़ाएं। यह आपकी सरसों की फसल को फूल के चरण में बेहतर उपज देने में मदद करेगा।",
        tamil: "உங்கள் தற்போதைய மண் ஈரப்பதம் மற்றும் வானிலை முன்னறிவிப்பின் அடிப்படையில், ஒவ்வோர் 2 நாட்களுக்கு 25-30 மிமீ தண்ணீருடன் நீர்ப்பாசனத்தை அதிகரிக்க பரிந்துரைக்கிறேன். இது உங்கள் கடுகு பயிரின் மகசூல் அதிகரிக்க உதவும்.",
        telugu: "మీ ప్రస్తుత నేల తేమ స్థాయిలు మరియు వాతావరణ సూచన ఆధారంగా, ప్రతి 2 రోజులకు 25-30mm నీటితో నీటిపారుదల పౌనఃపున్యాన్ని పెంచమని నేను సిఫార్సు చేస్తున్నాను. ఇది పుష్పించే దశలో మీ ఆవాల పంట దిగుబడిని ఆప్టిమైజ్ చేయడంలో సహాయపడుతుంది.",
      };

      const botMessage: Message = {
        role: "bot",
        content: responses[language as keyof typeof responses] || responses.english,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 h-[calc(100vh-8rem)]">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">AI Chatbot</h1>
            <p className="text-muted-foreground mt-1">
              Ask questions about farming, get instant AI-powered answers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-muted-foreground" />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
                <SelectItem value="tamil">தமிழ்</SelectItem>
                <SelectItem value="telugu">తెలుగు</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Mic className="w-5 h-5" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your farming question..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon" className="flex-shrink-0">
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Ask about irrigation, fertilizers, pest control, weather, seed varieties
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setInput(
                language === "hindi"
                  ? "सिंचाई के लिए सबसे अच्छा समय क्या है?"
                  : "What's the best time for irrigation?"
              )
            }
          >
            💧 Irrigation timing
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setInput(
                language === "hindi"
                  ? "उर्वरक की कितनी मात्रा चाहिए?"
                  : "How much fertilizer do I need?"
              )
            }
          >
            🌱 Fertilizer dosage
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setInput(
                language === "hindi"
                  ? "कीटों से कैसे बचें?"
                  : "How to prevent pests?"
              )
            }
          >
            🐛 Pest prevention
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setInput(
                language === "hindi"
                  ? "आज का मौसम कैसा है?"
                  : "What's today's weather?"
              )
            }
          >
            ☀️ Weather update
          </Button>
        </div>
      </div>
    </div>
  );
}
