"use client";

import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { submitLead } from "@/lib/leads";
import type { Lead } from "@/types";

const options = ["I need a website", "I need custom software", "I want AI automation", "I need a mobile app", "I need DevOps / Cloud help", "I need QA / Testing", "I need help with an existing project", "I'm just exploring"];
const fields: Array<{ key: keyof Lead; prompt: string; placeholder: string }> = [
  { key: "name", prompt: "What should we call you?", placeholder: "Your name" },
  { key: "company", prompt: "What company or team are you with?", placeholder: "Company name" },
  { key: "email", prompt: "What email should we use to follow up?", placeholder: "you@company.com" },
  { key: "phone", prompt: "Phone or WhatsApp?", placeholder: "+92 ..." },
  { key: "budget", prompt: "What budget range are you considering?", placeholder: "e.g. $5k–$15k" },
  { key: "timeline", prompt: "What timeline are you working toward?", placeholder: "e.g. 2–3 months" },
  { key: "requirements", prompt: "Briefly describe the business problem or project requirements.", placeholder: "Tell us what you want to solve..." },
];

export function Chatbot() {
  const [open, setOpen] = useState(false); const [service, setService] = useState(""); const [step, setStep] = useState(0); const [value, setValue] = useState(""); const [lead, setLead] = useState<Partial<Lead>>({}); const [status, setStatus] = useState("");
  async function next() {
    if (!value.trim()) return;
    const field = fields[step]; const updated = { ...lead, [field.key]: value.trim() }; setLead(updated); setValue("");
    if (step < fields.length - 1) { setStep(step + 1); return; }
    setStatus("Sending...");
    try {
      const result = await submitLead({ ...(updated as Lead), service, source: "chatbot" });
      setStatus(result.mode === "preview" ? "Lead captured in preview mode. Connect NEXT_PUBLIC_LEAD_API_URL to store it in your backend." : "Thanks — your project details were sent successfully.");
    } catch (e) { setStatus(e instanceof Error ? e.message : "Something went wrong."); }
  }
  return <>
    <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-950 shadow-2xl" aria-label="Open lead chatbot"><MessageCircle /></button>
    {open && <div className="fixed bottom-5 right-5 z-[60] w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#0d1018] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/8 p-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-400/15 text-indigo-300"><Bot size={18}/></span><div><p className="text-sm font-semibold">Project Assistant</p><p className="text-xs text-zinc-500">Lead generation</p></div></div><button onClick={() => setOpen(false)} aria-label="Close chatbot"><X size={18}/></button></div>
      <div className="max-h-[65vh] min-h-80 overflow-y-auto p-4">
        <div className="rounded-2xl bg-white/[.06] p-3 text-sm text-zinc-200">Hi 👋 How can we help your business?</div>
        {!service ? <div className="mt-4 grid gap-2">{options.map(o => <button key={o} onClick={() => setService(o)} className="rounded-xl border border-white/8 px-3 py-2.5 text-left text-sm text-zinc-300 hover:bg-white/[.05]">{o}</button>)}</div> : !status ? <div className="mt-4"><p className="mb-3 text-sm text-zinc-300">{fields[step].prompt}</p><div className="flex gap-2"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==="Enter"&&next()} placeholder={fields[step].placeholder} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm outline-none focus:border-indigo-400/60"/><button onClick={next} className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black"><Send size={16}/></button></div><p className="mt-3 text-xs text-zinc-600">Step {step + 1} of {fields.length}</p></div> : <div className="mt-4 rounded-2xl border border-indigo-400/20 bg-indigo-400/8 p-4 text-sm leading-6 text-zinc-300">{status}</div>}
      </div>
    </div>}
  </>;
}
