import Header from "./components/Header";

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex-1">{children}</section>
    </main>
  );
}
