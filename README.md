# NexaFlow Agency Website

Premium, responsive software-agency website built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Branding

Update `config/site.ts` to replace the temporary NexaFlow name, contact details and regional positioning.

## Lead backend

The contact form and chatbot share `lib/leads.ts`. By default they run in **preview mode** and do not pretend data has been stored. Connect a real backend by setting:

```bash
NEXT_PUBLIC_LEAD_API_URL=https://api.example.com/leads
```

The endpoint should accept a JSON payload containing name, company, email, phone, country, service, budget, timeline, requirements and source.

## Important content rule

All initial portfolio entries are clearly labeled `Concept Project` or `Demo Project`. No fake clients, testimonials, awards, statistics or results are included.
