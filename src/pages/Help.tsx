
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mail, ArrowRight, MessageCircle, FileText, Book } from "lucide-react";

const faqs = [
  {
    question: "How do I add a new customer to the system?",
    answer: "To add a new customer, navigate to the Customers page and click the 'Add Customer' button in the top right corner. Fill out the required information in the form and click 'Save' to add the customer to your database."
  },
  {
    question: "How can I export my dashboard data?",
    answer: "You can export your dashboard data by clicking on the three dots (⋮) menu in the top right corner of any chart or data table. Select 'Export' and choose your preferred format (CSV, Excel, or PDF)."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data is secure. We use industry-standard encryption to protect your information both in transit and at rest. Additionally, we perform regular security audits and follow best practices for data protection."
  },
  {
    question: "Can I customize the dashboard layout?",
    answer: "Yes, you can customize the dashboard layout by clicking on the 'Customize' button in the top right corner of the dashboard. From there, you can drag and drop widgets, resize them, and save your custom layout."
  },
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and you'll receive a password reset link. Follow the instructions in the email to create a new password."
  },
  {
    question: "Can I share reports with my team?",
    answer: "Yes, you can share reports with your team. Generate a report, then click the 'Share' button. You can either send a link directly to team members or set up scheduled report emails to be sent automatically."
  },
  {
    question: "How do I connect to my data sources?",
    answer: "To connect to your data sources, go to Settings > Integrations. Click 'Add Integration' and select your data source from the list. Follow the prompts to authenticate and set up the connection."
  }
];

const Help = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Find answers to common questions and get support
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            className="pl-10 w-full max-w-lg" 
            placeholder="Search for help articles..." 
            type="search" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="animate-fade-in stagger-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Chat Support
              </CardTitle>
              <CardDescription>
                Chat with our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get real-time help from our friendly support agents.
              </p>
              <Button className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in stagger-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
              <CardDescription>
                Send us an email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We'll respond to your email within 24 hours.
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in stagger-3">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Knowledge Base
              </CardTitle>
              <CardDescription>
                Browse our documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed guides and tutorials for all features.
              </p>
              <Button variant="outline" className="w-full">
                Browse Articles
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in stagger-4">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to the most common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="animate-fade-in stagger-5">
          <CardHeader>
            <CardTitle>Need More Help?</CardTitle>
            <CardDescription>
              Can't find what you're looking for?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available to help you with any questions or issues you might have. We're committed to providing excellent support and ensuring your success with our platform.
              </p>
              <Button className="gap-2">
                Request A Call Back
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <FileText className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Help;
