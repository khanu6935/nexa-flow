# NexaFlow Agency Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a runnable premium software-agency website matching the approved service model and exact homepage sequence.

**Architecture:** Next.js App Router renders static marketing pages from centralized content data. Client components are limited to navigation, motion, forms and chatbot interaction. Lead submission is abstracted behind `submitLead()` for future backend/database integration.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React.

**Spec:** `docs/superpowers/specs/2026-09-08-agency-website-design.md`

## Global Constraints
- No fake clients, statistics, testimonials, awards or results.
- Homepage uses the exact approved 14-section order.
- Services use Build / Automate & Integrate / Deliver & Maintain categories.
- Responsive, accessible, SEO-friendly, and backend-ready.

---

### Task 1: Foundation and content model
- [ ] Create Next.js configuration, global styles, site config, types and data modules.
- [ ] Verify TypeScript imports and route structure.

### Task 2: Shared UI and layout
- [ ] Build navbar, footer, buttons, section headings and motion helpers.
- [ ] Build chatbot with progressive lead collection and `submitLead()` integration.

### Task 3: Exact homepage
- [ ] Implement all 14 homepage sections in the approved order.
- [ ] Verify exactly 8 service cards and the lifecycle/process sequences.

### Task 4: Supporting pages
- [ ] Build Services, Solutions, Portfolio, Case Study, About, Contact, Privacy and Terms pages.
- [ ] Verify internal links and dynamic project routes.

### Task 5: SEO and verification
- [ ] Add metadata, robots and sitemap.
- [ ] Run install/build checks when dependency access is available.
- [ ] Package the complete project as a ZIP.
