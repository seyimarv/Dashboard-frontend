
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type ActivityItem = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  timestamp: string;
  highlight?: boolean;
};

const activities: ActivityItem[] = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      initials: "SJ",
    },
    action: "uploaded a new report",
    timestamp: "2 minutes ago",
    highlight: true,
  },
  {
    id: "2",
    user: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
      initials: "MC",
    },
    action: "added a new customer",
    timestamp: "40 minutes ago",
  },
  {
    id: "3",
    user: {
      name: "Emily Williams",
      avatar: "https://i.pravatar.cc/150?img=3",
      initials: "EW",
    },
    action: "commented on sales report",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    user: {
      name: "David Garcia",
      avatar: "https://i.pravatar.cc/150?img=4",
      initials: "DG",
    },
    action: "completed the monthly review",
    timestamp: "2 hours ago",
  },
  {
    id: "5",
    user: {
      name: "Amanda Lee",
      avatar: "https://i.pravatar.cc/150?img=5",
      initials: "AL",
    },
    action: "started a new project",
    timestamp: "1 day ago",
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions from your team members
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-auto max-h-[350px]">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={cn(
                "flex items-start gap-4 rounded-lg p-3 transition-colors",
                activity.highlight && "bg-accent"
              )}
            >
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    {activity.action}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
