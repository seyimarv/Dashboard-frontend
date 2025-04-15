
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    updates: true,
  });
  
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="animate-fade-in stagger-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your public profile information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="space-y-4 md:w-1/3">
                    <Label className="text-base">Profile Picture</Label>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Change</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:w-2/3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Tell us about yourself"
                        defaultValue="Product manager with over 5 years of experience in SaaS products."
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <Label className="text-base">Professional Information</Label>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" defaultValue="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" defaultValue="Product Manager" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="animate-fade-in stagger-1">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications" className="font-normal">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications" className="font-normal">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-medium">Marketing & Updates</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-emails" className="font-normal">
                        Marketing Emails
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new features and offers
                      </p>
                    </div>
                    <Switch
                      id="marketing-emails"
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="product-updates" className="font-normal">
                        Product Updates
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about product updates
                      </p>
                    </div>
                    <Switch
                      id="product-updates"
                      checked={notifications.updates}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, updates: checked })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="animate-fade-in stagger-1">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Badge className="bg-yellow-500">Not Enabled</Badge>
                  </div>
                  
                  <Button variant="outline">
                    Enable Two-Factor Authentication
                  </Button>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-medium">Active Sessions</h3>
                  
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">
                            Windows 11 • Chrome • San Francisco, USA
                          </p>
                        </div>
                        <Badge>Active Now</Badge>
                      </div>
                    </div>
                    
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Previous Session</p>
                          <p className="text-sm text-muted-foreground">
                            macOS • Safari • San Francisco, USA
                          </p>
                        </div>
                        <Badge variant="outline">3 days ago</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="text-red-500 hover:text-red-500 hover:bg-red-50">
                    Log Out of All Sessions
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="animate-fade-in stagger-1">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the dashboard looks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-base">Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start p-4 h-auto">
                        <div className="space-y-2 text-left">
                          <div className="w-10 h-10 rounded-full bg-background border"></div>
                          <div>
                            <p className="font-medium">Light</p>
                            <p className="text-xs text-muted-foreground">
                              Light background with dark text
                            </p>
                          </div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start p-4 h-auto">
                        <div className="space-y-2 text-left">
                          <div className="w-10 h-10 rounded-full bg-slate-900 border"></div>
                          <div>
                            <p className="font-medium">Dark</p>
                            <p className="text-xs text-muted-foreground">
                              Dark background with light text
                            </p>
                          </div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start p-4 h-auto">
                        <div className="space-y-2 text-left">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-100 to-slate-900 border"></div>
                          <div>
                            <p className="font-medium">System</p>
                            <p className="text-xs text-muted-foreground">
                              Follows your system preferences
                            </p>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label className="text-base">Sidebar</Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Button variant="outline" className="justify-start p-4 h-auto">
                        <div className="space-y-2 text-left">
                          <div className="w-full h-12 rounded bg-accent flex">
                            <div className="w-1/4 h-full bg-primary/20 rounded-l"></div>
                            <div className="w-3/4 h-full"></div>
                          </div>
                          <div>
                            <p className="font-medium">Expanded</p>
                            <p className="text-xs text-muted-foreground">
                              Show labels and icons
                            </p>
                          </div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start p-4 h-auto">
                        <div className="space-y-2 text-left">
                          <div className="w-full h-12 rounded bg-accent flex">
                            <div className="w-1/12 h-full bg-primary/20 rounded-l"></div>
                            <div className="w-11/12 h-full"></div>
                          </div>
                          <div>
                            <p className="font-medium">Collapsed</p>
                            <p className="text-xs text-muted-foreground">
                              Show only icons
                            </p>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
