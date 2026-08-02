"use client";

import Link from "next/link";
import Image from "next/image";
import { copy } from "content/copy";

export default function EditorialHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-scaly-min.png"
            alt="Scaly"
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          <span className="font-display text-2xl leading-none text-gray-900">
            Scaly
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/users/register"
            className="hidden text-sm text-gray-500 transition-colors hover:text-gray-900 sm:block"
          >
            {copy.nav.login}
          </Link>
          <Link
            href="/users/register"
            className="bg-[#5199ec] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3d87e0]"
          >
            {copy.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
