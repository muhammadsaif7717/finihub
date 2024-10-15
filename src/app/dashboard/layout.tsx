import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex">
        <Sidebar/>
        <div>
        {children}
        </div>
      </div>
  );
}
