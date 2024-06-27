"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isRoot = pathname === '/';

  return (
    <header className={`${isRoot ? "bg-transparent" : "bg-surface-2"} text-secondary px-44 py-6 gap-4 h-20 flex justify-between items-center w-full`}>
      <div>
        <img className="w-33 h-6" src="/logo/dark/medium.svg" alt="logo" />
      </div>
      <nav className="pl-36 w-full flex justify-start">
        <ul className="space-x-4 flex">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/locals">
              Locais
            </Link>
          </li>
          <li>
            <Link href="/events">
              Eventos
            </Link>
          </li>
        </ul>
      </nav>
      <div>Account</div>
    </header>
  );
}
