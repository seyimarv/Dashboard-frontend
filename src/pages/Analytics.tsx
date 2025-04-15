
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const performanceData = [
  { month: "Jan", visits: 1200, leads: 420, customers: 182 },
  { month: "Feb", visits: 1800, leads: 680, customers: 234 },
  { month: "Mar", visits: 2400, leads: 980, customers: 391 },
  { month: "Apr", visits: 2100, leads: 790, customers: 310 },
  { month: "May", visits: 2800, leads: 1100, customers: 450 },
  { month: "Jun", visits: 3200, leads: 1400, customers: 560 },
];

const channelData = [
  { name: "Organic Search", value: 35 },
  { name: "Social Media", value: 25 },
  { name: "Email", value: 20 },
  { name: "Direct", value: 15 },
  { name: "Referral", value: 5 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">
                In-depth analysis of your business performance
              </p>
            </div>
            
            <Card className="animate-fade-in stagger-1">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Track visits, leads, and customer acquisition over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <Tabs defaultValue="bar">
                  <TabsList className="mb-4">
                    <TabsTrigger value="bar">Bar Chart</TabsTrigger>
                    <TabsTrigger value="line">Line Chart</TabsTrigger>
                  </TabsList>
                  <TabsContent value="bar" className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={performanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "var(--radius)",
                          }}
                        />
                        <Legend />
                        <Bar dataKey="visits" name="Website Visits" fill="hsl(var(--primary))" />
                        <Bar dataKey="leads" name="Leads Generated" fill="hsl(217, 91.2%, 59.8%)" />
                        <Bar dataKey="customers" name="New Customers" fill="hsl(231, 91.2%, 75%)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="line" className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={performanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "var(--radius)",
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="visits"
                          name="Website Visits"
                          stroke="hsl(var(--primary))"
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="leads"
                          name="Leads Generated"
                          stroke="hsl(217, 91.2%, 59.8%)"
                        />
                        <Line
                          type="monotone"
                          dataKey="customers"
                          name="New Customers"
                          stroke="hsl(231, 91.2%, 75%)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="animate-fade-in stagger-2">
                <CardHeader>
                  <CardTitle>Traffic Channels</CardTitle>
                  <CardDescription>
                    Distribution of visitor acquisition channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={channelData}
                      margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        stroke="hsl(var(--muted-foreground))" 
                        width={70}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, "Percentage"]}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <Bar dataKey="value" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="animate-fade-in stagger-3">
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>
                    Visualize your customer journey stages
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { stage: "Visits", value: 100 },
                        { stage: "Sign-ups", value: 42 },
                        { stage: "Active Users", value: 28 },
                        { stage: "Subscribers", value: 18 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, "Conversion Rate"]}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          borderColor: "hsl(var(--border))",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(217, 91.2%, 59.8%)"
                        radius={[4, 4, 0, 0]} 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </DashboardLayout>
  );
};

export default Analytics;
