import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy inquiry data
const inquiries = [
  {
    id: 1,
    roomTitle: "Bright Double Room in Camden",
    location: "Camden, London",
    price: 850,
    landlord: "Jane Smith",
    status: "pending",
    date: "2025-03-16",
    message: "Hi, I'm interested in viewing this room. Is it still available? I would like to arrange a viewing for this weekend if possible.",
  },
  {
    id: 2,
    roomTitle: "Cozy Single Room in Islington",
    location: "Islington, London",
    price: 700,
    landlord: "John Doe",
    status: "accepted",
    date: "2025-03-13",
    message: "Hello, I'm very interested in your room. I'm a professional working in the city and looking for a quiet place. When would be a good time to view it?",
  },
  {
    id: 3,
    roomTitle: "Spacious En-suite in Victorian House",
    location: "Hackney, London",
    price: 950,
    landlord: "Mike Johnson",
    status: "rejected",
    date: "2025-03-10",
    message: "Hi there, I'm interested in your room. I'm a student at UCL and looking for a place close to campus. Is the room still available?",
  },
];

export default async function InquiriesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Inquiries</h1>
        <p className="text-muted-foreground">
          Manage your room inquiries
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {inquiries.map((inquiry) => (
            <InquiryCard key={inquiry.id} inquiry={inquiry} />
          ))}
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          {inquiries
            .filter((inquiry) => inquiry.status === "pending")
            .map((inquiry) => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
        </TabsContent>
        
        <TabsContent value="accepted" className="space-y-4">
          {inquiries
            .filter((inquiry) => inquiry.status === "accepted")
            .map((inquiry) => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
        </TabsContent>
        
        <TabsContent value="rejected" className="space-y-4">
          {inquiries
            .filter((inquiry) => inquiry.status === "rejected")
            .map((inquiry) => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function InquiryCard({ inquiry }: { inquiry: any }) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };
  
  const statusColor = statusColors[inquiry.status as keyof typeof statusColors];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{inquiry.roomTitle}</CardTitle>
            <CardDescription>{inquiry.location}</CardDescription>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
            {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Price</p>
              <p className="font-medium">£{inquiry.price} /month</p>
            </div>
            <div>
              <p className="text-muted-foreground">Landlord</p>
              <p className="font-medium">{inquiry.landlord}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Inquiry Date</p>
              <p className="font-medium">{new Date(inquiry.date).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Your Message</p>
            <p className="text-sm border rounded-md p-3 bg-muted/50">{inquiry.message}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="w-full">View Room</Button>
            {inquiry.status === "accepted" && (
              <Button className="w-full">Contact Landlord</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
