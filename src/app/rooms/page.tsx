import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Dummy room data
const rooms = [
  {
    id: 1,
    title: "Bright Double Room in Modern Flat",
    location: "Camden, London",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    roomType: "Double",
    billsIncluded: true,
    availableFrom: "2025-04-01",
  },
  {
    id: 2,
    title: "Cozy Single Room with Garden View",
    location: "Islington, London",
    price: 700,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roomType: "Single",
    billsIncluded: true,
    availableFrom: "2025-03-25",
  },
  {
    id: 3,
    title: "Spacious En-suite in Victorian House",
    location: "Hackney, London",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    roomType: "En-suite",
    billsIncluded: false,
    availableFrom: "2025-04-15",
  },
  {
    id: 4,
    title: "Modern Double Room in Shared Apartment",
    location: "Shoreditch, London",
    price: 900,
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roomType: "Double",
    billsIncluded: true,
    availableFrom: "2025-04-10",
  },
  {
    id: 5,
    title: "Bright Single Room in Family Home",
    location: "Brixton, London",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roomType: "Single",
    billsIncluded: true,
    availableFrom: "2025-03-20",
  },
  {
    id: 6,
    title: "Large Double Room with Private Balcony",
    location: "Clapham, London",
    price: 1000,
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roomType: "Double",
    billsIncluded: false,
    availableFrom: "2025-04-05",
  },
];

export default function RoomsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find Rooms</h1>
          <p className="text-muted-foreground">
            Browse available rooms for rent
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Filters */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter area or postcode"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="minPrice"
                    placeholder="Min"
                    type="number"
                  />
                  <Input
                    id="maxPrice"
                    placeholder="Max"
                    type="number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Room Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="single"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="single" className="font-normal">Single</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="double"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="double" className="font-normal">Double</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="ensuite"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="ensuite" className="font-normal">En-suite</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="studio"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="studio" className="font-normal">Studio</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Bills</Label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="billsIncluded"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="billsIncluded" className="font-normal">Bills Included</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availableFrom">Available From</Label>
                <Input
                  id="availableFrom"
                  type="date"
                />
              </div>
              
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
          
          {/* Room Listings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Showing {rooms.length} rooms</p>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm">Sort by:</Label>
                <select
                  id="sort"
                  className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="date-asc">Available Date (Soonest)</option>
                  <option value="date-desc">Available Date (Latest)</option>
                </select>
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={room.imageUrl}
                      alt={room.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{room.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">{room.location}</p>
                        <p className="font-medium text-primary">£{room.price} /month</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {room.roomType}
                        </span>
                        {room.billsIncluded && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Bills Included
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          Available {new Date(room.availableFrom).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/rooms/${room.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
