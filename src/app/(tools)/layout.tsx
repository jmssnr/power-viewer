import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[auto_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <section className="flex-1 h-[calc(100vh-var(--header-height))">
          {children}
        </section>
      </div>
    </main>
  );
}
