"use client";

import { useState } from "react";
import { submitLead } from "@/lib/leads";
import type { Lead } from "@/types";

const inputClass = "w-full rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-indigo-400/50";
export function ContactForm() {
  const [status, setStatus] = useState(""); const [loading, setLoading] = useState(false);
  async function onSubmit(formData: FormData) {
    setLoading(true); setStatus("");
    const lead: Lead = { name: String(formData.get("name")||""), company: String(formData.get("company")||""), email: String(formData.get("email")||""), phone: String(formData.get("phone")||""), country: String(formData.get("country")||""), service: String(formData.get("service")||""), budget: String(formData.get("budget")||""), timeline: String(formData.get("timeline")||""), requirements: String(formData.get("requirements")||""), source: "contact-form" };
    try { const result = await submitLead(lead); setStatus(result.mode === "preview" ? "Preview mode: the form works, but no backend endpoint is configured yet. Add NEXT_PUBLIC_LEAD_API_URL to store leads." : "Thanks — your project request was sent successfully."); }
    catch(e){ setStatus(e instanceof Error ? e.message : "Submission failed."); } finally { setLoading(false); }
  }
  return <form action={onSubmit} className="grid gap-4 sm:grid-cols-2">
    <input required name="name" placeholder="Name" className={inputClass}/><input required name="company" placeholder="Company" className={inputClass}/>
    <input required type="email" name="email" placeholder="Email" className={inputClass}/><input required name="phone" placeholder="Phone / WhatsApp" className={inputClass}/>
    <input name="country" placeholder="Country" className={inputClass}/><select required name="service" className={inputClass} defaultValue=""><option value="" disabled>Service Needed</option><option>Web Development</option><option>Custom Software</option><option>AI & Automation</option><option>Mobile Apps</option><option>DevOps & Cloud</option><option>QA & Testing</option><option>API & Integrations</option><option>Other</option></select>
    <input required name="budget" placeholder="Budget Range" className={inputClass}/><input required name="timeline" placeholder="Project Timeline" className={inputClass}/>
    <textarea required name="requirements" placeholder="Project Description" rows={6} className={`${inputClass} sm:col-span-2`}/>
    <button disabled={loading} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60 sm:col-span-2">{loading ? "Submitting..." : "Let's Talk About Your Project"}</button>
    {status && <p className="text-sm leading-6 text-zinc-400 sm:col-span-2">{status}</p>}
  </form>;
}
