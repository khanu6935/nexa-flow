import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/20 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-7 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-xl border border-indigo-400/30 bg-indigo-400/10 text-sm text-indigo-200">{siteConfig.shortName}</span>{siteConfig.name}</div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">{siteConfig.tagline}</p>
        </div>
        <div><h3 className="text-sm font-semibold text-white">Services</h3><div className="mt-4 grid gap-3 text-sm text-zinc-500"><Link href="/services">Web Development</Link><Link href="/services">Custom Software</Link><Link href="/services">AI & Automation</Link><Link href="/services">DevOps & Cloud</Link><Link href="/services">QA & Testing</Link></div></div>
        <div><h3 className="text-sm font-semibold text-white">Company</h3><div className="mt-4 grid gap-3 text-sm text-zinc-500"><Link href="/about">About</Link><Link href="/portfolio">Portfolio</Link><Link href="/solutions">Industries</Link><Link href="/contact">Contact</Link></div></div>
        <div><h3 className="text-sm font-semibold text-white">Contact</h3><div className="mt-4 grid gap-3 text-sm text-zinc-500"><span>{siteConfig.email}</span><span>{siteConfig.whatsapp}</span><a href={siteConfig.linkedin}>LinkedIn</a></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/7 px-5 pt-7 text-xs text-zinc-600 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-10"><span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span><div className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}
