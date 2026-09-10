import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10 ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, secondary = false, className = "" }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${secondary ? "border border-white/12 bg-white/[.04] text-white hover:bg-white/[.08]" : "bg-white text-zinc-950 hover:bg-zinc-200"} ${className}`}>
      {children}<ArrowRight size={16} />
    </Link>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="grid-bg border-b border-white/7 pb-20 pt-36 sm:pb-28 sm:pt-44">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">{eyebrow}</p>
          <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">{description}</p>
        </div>
      </Container>
    </section>
  );
}
