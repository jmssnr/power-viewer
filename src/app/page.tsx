import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="./monitoring">Monitoring</Link>
        </li>
        <li>
          <Link href="./analytics">Analytics</Link>
        </li>
      </ul>
    </main>
  );
}
