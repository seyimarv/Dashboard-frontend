
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MoreHorizontal, Mail, UserPlus, FileText } from "lucide-react";

// Sample customer data
const customers = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    initials: "OM",
    status: "active",
    spent: "$2,340.00",
    orders: 24,
    lastOrder: "2 days ago",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "https://i.pravatar.cc/150?img=52",
    initials: "JL",
    status: "active",
    spent: "$4,572.00",
    orders: 42,
    lastOrder: "5 days ago",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "https://i.pravatar.cc/150?img=44",
    initials: "IN",
    status: "inactive",
    spent: "$675.00",
    orders: 3,
    lastOrder: "2 months ago",
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    avatar: "https://i.pravatar.cc/150?img=61",
    initials: "WK",
    status: "active",
    spent: "$8,426.00",
    orders: 67,
    lastOrder: "1 day ago",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    initials: "SD",
    status: "active",
    spent: "$1,092.00",
    orders: 12,
    lastOrder: "1 week ago",
  },
  {
    id: "6",
    name: "Ethan Johnson",
    email: "ethan.johnson@email.com",
    avatar: "https://i.pravatar.cc/150?img=15",
    initials: "EJ",
    status: "active",
    spent: "$3,872.00",
    orders: 32,
    lastOrder: "3 days ago",
  },
  {
    id: "7",
    name: "Amelia Thompson",
    email: "amelia.thompson@email.com",
    avatar: "https://i.pravatar.cc/150?img=22",
    initials: "AT",
    status: "inactive",
    spent: "$530.00",
    orders: 5,
    lastOrder: "1 month ago",
  },
  {
    id: "8",
    name: "James Wilson",
    email: "james.wilson@email.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    initials: "JW",
    status: "active",
    spent: "$6,748.00",
    orders: 53,
    lastOrder: "4 days ago",
  },
];

export function CustomersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Spent</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={customer.avatar} alt={customer.name} />
                    <AvatarFallback>{customer.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={customer.status === "active" ? "default" : "secondary"}
                  className={customer.status === "active" ? "bg-green-500" : ""}
                >
                  {customer.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell>{customer.spent}</TableCell>
              <TableCell>{customer.orders}</TableCell>
              <TableCell>{customer.lastOrder}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Customer
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const Customers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            Manage and view details about your customers
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search customers..." className="w-[300px]" />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button className="gap-1">
            <UserPlus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <Card className="animate-fade-in stagger-1">
          <CardHeader>
            <CardTitle>Customer Database</CardTitle>
            <CardDescription>
              View and manage all your customers in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Customers</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <CustomersTable />
              </TabsContent>
              <TabsContent value="active">
                <CustomersTable />
              </TabsContent>
              <TabsContent value="inactive">
                <CustomersTable />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
