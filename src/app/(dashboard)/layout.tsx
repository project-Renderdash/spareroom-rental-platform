import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardSidebar } from "@/components/features/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] xl:w-[300px]">
        <DashboardSidebar />
      </aside>
      <main className="flex w-full flex-col overflow-hidden py-8">
        {children}
      </main>
    </div>
  );
}
