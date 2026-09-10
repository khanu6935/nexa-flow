"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const nav = [
  ["Home", "/"], ["Services", "/services"], ["Solutions / Industries", "/solutions"], ["Portfolio", "/portfolio"], ["About", "/about"], ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/7 bg-[#07090f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight" aria-label={`${siteConfig.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-indigo-400/30 bg-indigo-400/10 text-sm text-indigo-200">{siteConfig.shortName}</span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">{label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">Start a Project</Link></div>
        <button className="rounded-lg border border-white/10 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-white/7 bg-[#090b12] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5">{label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950">Start a Project</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
