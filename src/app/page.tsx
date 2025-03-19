import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroCarousel } from "@/components/features/home/hero-carousel";

// Dummy room data
const featuredRooms = [
  {
    id: 1,
    title: "Bright Double Room in Modern Flat",
    location: "Camden, London",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    title: "Cozy Single Room with Garden View",
    location: "Islington, London",
    price: 700,
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Spacious En-suite in Victorian House",
    location: "Hackney, London",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Featured Rooms Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold tracking-tight">
            Featured Rooms
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
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
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{room.location}</p>
                    <p className="font-medium text-primary">£{room.price} /month</p>
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
          <div className="mt-10 flex justify-center">
            <Link href="/rooms">
              <Button variant="outline">View All Rooms</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold">Search</h3>
              <p className="mt-2 text-muted-foreground">
                Browse through our extensive list of available rooms and use filters to find your perfect match.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold">Connect</h3>
              <p className="mt-2 text-muted-foreground">
                Send inquiries to landlords and arrange viewings for rooms that interest you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold">Move In</h3>
              <p className="mt-2 text-muted-foreground">
                Finalize the details with your new landlord and move into your new room.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
