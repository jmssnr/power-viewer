import Header from "./components/Header";

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <section className="h-[calc(100vh-60px)]">{children}</section>
    </main>
  );
}
