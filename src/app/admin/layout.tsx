import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <Sidebar />

      {/* Main Admin Content */}
      <main className="flex-grow overflow-auto">
        {children}
      </main>
    </div>
  );
}
