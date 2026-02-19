
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between">
      <Link href="/">Ramadan</Link>
      <div className="flex gap-4 text-sm">
        <Link href="/tasbih">Tasbih</Link>
        <Link href="/niat-puasa">Niat</Link>
        <Link href="/tarawih">Tarawih</Link>
      </div>
    </nav>
  );
}
