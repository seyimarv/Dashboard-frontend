
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { CustomerSegments } from "@/components/dashboard/CustomerSegments";
import { Users, CreditCard, BarChart, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your business
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="animate-fade-in stagger-1">
                <StatCard
                  title="Total Customers"
                  value="2,543"
                  description="Active users on your platform"
                  icon={Users}
                  trend={{ value: 12, positive: true }}
                />
              </div>
              <div className="animate-fade-in stagger-2">
                <StatCard
                  title="Revenue"
                  value="$45,231.89"
                  description="Monthly revenue generated"
                  icon={CreditCard}
                  trend={{ value: 8, positive: true }}
                />
              </div>
              <div className="animate-fade-in stagger-3">
                <StatCard
                  title="Conversion Rate"
                  value="3.2%"
                  description="Visitors to customers"
                  icon={BarChart}
                  trend={{ value: 1.1, positive: false }}
                />
              </div>
              <div className="animate-fade-in stagger-4">
                <StatCard
                  title="Growth"
                  value="+24.5%"
                  description="Year-over-year growth"
                  icon={TrendingUp}
                  trend={{ value: 4, positive: true }}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="md:col-span-2 lg:col-span-4 animate-fade-in stagger-1">
                <RevenueChart />
              </div>
              <div className="md:col-span-2 lg:col-span-3 animate-fade-in stagger-2">
                <CustomerSegments />
              </div>
            </div>
            <div className="animate-fade-in stagger-3">
              <ActivityFeed />
            </div>
          </div>
        </DashboardLayout>
  );
};

export default Index;
