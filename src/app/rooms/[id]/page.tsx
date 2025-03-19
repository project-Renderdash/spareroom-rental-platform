import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Dummy room data - in a real app, this would come from the database
const roomsData = [
  {
    id: "1",
    title: "Bright Double Room in Modern Flat",
    description: "A spacious double room in a modern flat located in the heart of Camden. The room comes fully furnished with a comfortable double bed, wardrobe, desk, and chair. The flat has a shared kitchen and bathroom, and includes all bills in the rent. It's perfect for professionals or students looking for a convenient location with great transport links.",
    location: "Camden, London",
    address: "123 Camden High Street",
    postcode: "NW1 7JR",
    price: 850,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    roomType: "Double",
    billsIncluded: true,
    availableFrom: "2025-04-01",
    landlord: {
      name: "Jane Smith",
      avatarUrl: "",
      responseRate: "95%",
      responseTime: "within a day",
    },
    amenities: [
      "Furnished",
      "Double Bed",
      "Wardrobe",
      "Desk",
      "Chair",
      "Central Heating",
      "Washing Machine",
      "Wi-Fi",
      "Fridge/Freezer",
      "Microwave",
    ],
    houseRules: [
      "No smoking",
      "No pets",
      "No parties",
      "Quiet after 11pm",
    ],
  },
  {
    id: "2",
    title: "Cozy Single Room with Garden View",
    description: "A cozy single room in a shared house with a beautiful garden view. The room is fully furnished with a single bed, wardrobe, and desk. The house has a shared kitchen, bathroom, and living room. All bills are included in the rent. The location is perfect for those who want to be close to the city center but still enjoy a quiet neighborhood.",
    location: "Islington, London",
    address: "45 Islington Park Street",
    postcode: "N1 1QB",
    price: 700,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    roomType: "Single",
    billsIncluded: true,
    availableFrom: "2025-03-25",
    landlord: {
      name: "John Doe",
      avatarUrl: "",
      responseRate: "90%",
      responseTime: "within 2 days",
    },
    amenities: [
      "Furnished",
      "Single Bed",
      "Wardrobe",
      "Desk",
      "Garden Access",
      "Central Heating",
      "Washing Machine",
      "Wi-Fi",
      "Dishwasher",
    ],
    houseRules: [
      "No smoking",
      "No pets",
      "Quiet after 10pm",
      "Clean up after yourself",
    ],
  },
  {
    id: "3",
    title: "Spacious En-suite in Victorian House",
    description: "A spacious en-suite room in a beautiful Victorian house. The room comes with a private bathroom and is fully furnished with a double bed, wardrobe, desk, and chair. The house has a shared kitchen and living room. Bills are not included in the rent. The location is perfect for those who want to be in a trendy area with lots of cafes, bars, and restaurants.",
    location: "Hackney, London",
    address: "78 Hackney Road",
    postcode: "E2 8DP",
    price: 950,
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    roomType: "En-suite",
    billsIncluded: false,
    availableFrom: "2025-04-15",
    landlord: {
      name: "Mike Johnson",
      avatarUrl: "",
      responseRate: "85%",
      responseTime: "within 3 days",
    },
    amenities: [
      "Furnished",
      "Double Bed",
      "Wardrobe",
      "Desk",
      "Chair",
      "Private Bathroom",
      "Central Heating",
      "Washing Machine",
      "Wi-Fi",
      "Dishwasher",
    ],
    houseRules: [
      "No smoking",
      "Pets allowed",
      "No parties",
      "Quiet after 11pm",
    ],
  },
];

export default async function RoomDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const session = data.session;
  
  // Get the room ID from params
  const roomId = params.id;
  
  // Find the room with the matching ID
  const room = roomsData.find((r) => r.id === roomId);
  
  if (!room) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold tracking-tight">Room not found</h1>
        <p className="text-muted-foreground">
          The room you are looking for does not exist.
        </p>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{room.title}</h1>
          <p className="text-muted-foreground">{room.location}</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          {/* Left Column - Room Details */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={room.images[0]}
                alt={room.title}
                className="h-[400px] w-full object-cover"
              />
              <div className="mt-2 grid grid-cols-3 gap-2">
                {room.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${room.title} - Image ${index + 2}`}
                    className="h-24 w-full rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
            
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{room.description}</p>
              </CardContent>
            </Card>
            
            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* House Rules */}
            <Card>
              <CardHeader>
                <CardTitle>House Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {room.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{room.address}</p>
                <p className="text-muted-foreground">{room.postcode}</p>
                <div className="mt-4 h-[300px] rounded-md bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Inquiry and Landlord */}
          <div className="space-y-6">
            {/* Price and Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">£{room.price} /month</CardTitle>
                <CardDescription>
                  {room.billsIncluded ? "Bills included" : "Bills not included"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Room Type</span>
                  <span className="font-medium">{room.roomType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Available From</span>
                  <span className="font-medium">{new Date(room.availableFrom).toLocaleDateString()}</span>
                </div>
                
                {session ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Send Inquiry</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Inquiry</DialogTitle>
                        <DialogDescription>
                          Send a message to the landlord to inquire about this room.
                        </DialogDescription>
                      </DialogHeader>
                      <form action="/api/inquiries/create" method="post" className="space-y-4">
                        <input type="hidden" name="roomId" value={room.id} />
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Hi, I'm interested in this room. Is it still available?"
                            rows={5}
                            required
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit">Send Inquiry</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button className="w-full" asChild>
                    <a href={`/login?redirect=/rooms/${room.id}`}>Log in to Send Inquiry</a>
                  </Button>
                )}
              </CardContent>
            </Card>
            
            {/* Landlord */}
            <Card>
              <CardHeader>
                <CardTitle>About the Landlord</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={room.landlord.avatarUrl} alt={room.landlord.name} />
                    <AvatarFallback>{room.landlord.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{room.landlord.name}</p>
                    <p className="text-sm text-muted-foreground">Landlord</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response Rate</span>
                    <span className="text-sm font-medium">{room.landlord.responseRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="text-sm font-medium">{room.landlord.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Always view the property before paying any money</p>
                <p>• Never pay cash - use bank transfers for a record</p>
                <p>• Be wary of deals that seem too good to be true</p>
                <p>• Check the landlord's ID and property ownership</p>
                <p>• Get a written agreement before paying a deposit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
