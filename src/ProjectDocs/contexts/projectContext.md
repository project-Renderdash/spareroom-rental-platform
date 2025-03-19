# SpareRoom - Room Rental Platform

## Project Overview

SpareRoom is a modern web application for finding and listing spare rooms for rent. Inspired by SpareRoom.co.uk and Airbnb, it provides a platform for landlords to list their available rooms and for tenants to find and inquire about rooms that match their preferences.

## Tech Stack

- **Frontend**: Next.js 15+ with App Router and React Server Components
- **UI Components**: Shadcn UI with Tailwind CSS
- **State Management**: Zustand (for client components)
- **Database & Auth**: Supabase
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── (auth)/           # Auth-related routes (login, signup)
│   ├── (dashboard)/      # User dashboard routes
│   ├── api/              # API routes
│   ├── rooms/            # Room listing and detail pages
│   └── layout.tsx        # Root layout
├── components/
│   ├── shared/           # Shared UI components
│   │   ├── auth/         # Authentication components
│   │   └── layout/       # Layout components (header, footer)
│   ├── features/         # Feature-specific components
│   │   ├── rooms/        # Room listing and detail components
│   │   ├── search/       # Search and filter components
│   │   ├── dashboard/    # Dashboard components
│   │   └── inquiries/    # Inquiry components
│   └── ui/               # Shadcn UI components
├── lib/
│   ├── supabase/         # Supabase client and utilities
│   ├── constants/        # Global constants
│   ├── hooks/            # Custom React hooks
│   ├── middleware/       # Custom middleware
│   └── utils/            # Shared utility functions
└── ProjectDocs/          # Project documentation
```

## Database Schema

### profiles
- id (UUID, references auth.users)
- first_name (text)
- last_name (text)
- avatar_url (text)
- bio (text)
- phone_number (text)
- created_at (timestamp)
- updated_at (timestamp)

### rooms
- id (UUID)
- title (text)
- description (text)
- price (integer) - monthly rent
- location (text)
- address (text)
- postcode (text)
- latitude (float)
- longitude (float)
- available_from (date)
- room_type (text) - e.g., single, double, ensuite
- bills_included (boolean)
- amenities (jsonb) - array of amenities
- house_rules (jsonb) - array of house rules
- created_at (timestamp)
- updated_at (timestamp)
- owner_id (UUID, references profiles.id)

### room_images
- id (UUID)
- room_id (UUID, references rooms.id)
- url (text)
- position (integer) - for ordering
- created_at (timestamp)

### inquiries
- id (UUID)
- room_id (UUID, references rooms.id)
- user_id (UUID, references profiles.id)
- message (text)
- status (text) - e.g., pending, accepted, rejected
- created_at (timestamp)
- updated_at (timestamp)

## Key Features

### Authentication
- Email/password authentication
- Google OAuth integration
- Protected routes for authenticated users

### Room Listings
- Browse available rooms
- Filter by location, price, room type, etc.
- View detailed room information
- Image gallery for each room

### User Dashboard
- Overview of user activity
- Profile management
- Inquiry management
- Favorites management

### Inquiry System
- Send inquiries to landlords
- Track inquiry status
- Communicate with landlords

## Development Workflow

1. **Authentication**: Implement user authentication with Supabase Auth
2. **Database**: Set up the database schema and relationships
3. **UI Components**: Create reusable UI components with Shadcn UI
4. **Pages**: Implement the main pages and routes
5. **Features**: Add feature-specific functionality
6. **Testing**: Test the application for bugs and usability issues
7. **Deployment**: Deploy the application to Vercel

## Future Enhancements

- Real-time messaging between users and landlords
- Map integration for room locations
- Advanced search and filtering options
- Reviews and ratings for rooms and landlords
- Payment integration for booking rooms
- Mobile app development
