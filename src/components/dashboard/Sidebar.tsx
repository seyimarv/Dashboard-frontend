
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  Bell,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NavItem = {
  title: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
};

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "relative flex h-screen flex-col border-r bg-card py-4 transition-all duration-300 ease-in-out",
        collapsed ? "w-[80px]" : "w-[250px]",
        className
      )}
    >
      <div className="flex items-center justify-between px-4">
        {!collapsed && (
          <h2 className="text-xl font-bold text-primary">InsightHub</h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <Separator className="my-4" />

      <div className="flex-1 space-y-1 px-3">
        {mainNavItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
              location.pathname === item.href ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="px-3">
        <div className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2",
          collapsed && "justify-center px-2"
        )}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
