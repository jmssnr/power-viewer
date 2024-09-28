import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <section className="h-[calc(100vh-var(--header-height))] w-[calc(100vw-var(--sidebar-width))] bg-neutral-50">
        {children}
      </section>
    </main>
  );
}
