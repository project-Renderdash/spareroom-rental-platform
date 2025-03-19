import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const roomId = formData.get("roomId") as string;
  const message = formData.get("message") as string;
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.redirect(
      new URL(`/login?redirect=/rooms/${roomId}`, request.url)
    );
  }
  
  // In a real app, this would insert the inquiry into the database
  // For now, we'll just redirect back to the dashboard with a success message
  
  return NextResponse.redirect(
    new URL("/dashboard/inquiries?success=true", request.url)
  );
}
