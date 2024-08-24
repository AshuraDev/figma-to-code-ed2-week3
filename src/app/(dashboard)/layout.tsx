import Nav from "@/components/navigation/nav";
import SideBar from "@/components/navigation/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="hidden w-60 fixed inset-0 lg:flex">
        <SideBar />
      </div>
      <main className="w-full xl:pl-60">
        <Nav />
       <div className="w-full h-full  px-5 py-3 md:px-11 xl:px-6">
       {children}
       </div>
      </main>
    </div>
  );
}
