
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value.startsWith("$") && /^\$\d+/.test(value) ? (
            <AnimatedCounter 
              endValue={parseInt(value.replace(/[$,]/g, ""))} 
              prefix="$" 
              duration={1500}
            />
          ) : value.endsWith("%") && /^\+?\d+/.test(value.replace("+", "")) ? (
            <AnimatedCounter 
              endValue={parseFloat(value.replace(/[+%]/g, ""))} 
              prefix={value.startsWith("+") ? "+" : ""} 
              suffix="%" 
              decimals={1}
              duration={1500}
            />
          ) : /^[0-9,]+$/.test(value) ? (
            <AnimatedCounter 
              endValue={parseInt(value.replace(/,/g, ""))} 
              duration={1500}
            />
          ) : (
            value
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center text-xs">
            <span
              className={cn(
                "inline-flex items-center rounded-sm px-1 py-0.5 font-medium",
                trend.positive
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              )}
            >
              {trend.positive ? "+" : "-"}
              {trend.value}%
            </span>
            <span className="ml-1 text-muted-foreground">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
