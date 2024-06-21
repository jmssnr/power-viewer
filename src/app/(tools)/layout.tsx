import classes from "./layout.module.css";
import Sidebar from "./components/Sidebar";
export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={classes.root}>
      <Sidebar />
      <section className={classes.content}>
        {children}
      </section>
    </main>
  );
}
