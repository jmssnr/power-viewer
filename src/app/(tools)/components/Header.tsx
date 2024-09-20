import Link from "next/link";
import CountrySelect from "./CountrySelect";

const Header = () => {
  return (
    <header className="border-b p-3 flex items-center h-[60px] justify-between">
      <p>
        <span className="font-bold">Power</span>Viewer
      </p>
      <nav className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/analyze">Analyze</Link>
        <Link href="/about">About</Link>
        <CountrySelect />
      </nav>
    </header>
  );
};

export default Header;
