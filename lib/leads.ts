import type { Lead } from "@/types";

export type LeadSubmissionResult =
  | { ok: true; mode: "api" }
  | { ok: true; mode: "preview"; payload: Lead };

export async function submitLead(lead: Lead): Promise<LeadSubmissionResult> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_API_URL;

  if (!endpoint) {
    return { ok: true, mode: "preview", payload: lead };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error("Lead submission failed. Please try again or contact us directly.");
  }

  return { ok: true, mode: "api" };
}
