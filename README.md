# Noeris Analytics

Production-ready digital platform for [Noeris Analytics](https://noeris.io) - a boutique consulting firm specializing in Business & Executive Intelligence.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS 4** + shadcn/ui components
- **Framer Motion** for animations
- **Prisma** + PostgreSQL (Neon / Supabase)
- **Resend** for transactional email
- **React Hook Form** + **Zod** for form validation

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (Neon or Supabase) |
| `RESEND_API_KEY` | Resend API key for email delivery |
| `EMAIL_FROM` | Sender address (must be verified in Resend) |
| `LEADS_NOTIFY_EMAIL` | Your email for lead notifications |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly booking URL |

### 3. Set up database

```bash
npx prisma migrate dev --name init
```

For production (Vercel):

```bash
npx prisma migrate deploy
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/              # Pages and API routes
  components/       # UI, layout, marketing, forms, booking
  lib/              # Database, email, validation, rate limiting, SEO
  modules/
    leads/          # Lead creation and notification
    crm/            # CRM port + adapters (HubSpot, Salesforce, Zoho, Dynamics)
    booking/        # Booking provider abstraction
    content/        # Content repository (CMS-ready)
  server/           # Server actions and services (future)
prisma/             # Database schema and migrations
```

## Backend Architecture

### Contact Form Flow

1. Client submits via `ContactForm` (React Hook Form + Zod)
2. `POST /api/contact` validates, rate-limits, checks honeypot
3. Lead persisted to PostgreSQL via Prisma
4. Notification email sent to you via Resend
5. Branded confirmation email sent to prospect
6. CRM sync fired asynchronously (noop by default)

### CRM Integration

Set `CRM_PROVIDER` to enable an adapter:

- `noop` - default, no sync
- `hubspot` - requires `HUBSPOT_ACCESS_TOKEN`
- `salesforce` - requires Salesforce OAuth credentials
- `zoho` - requires Zoho API credentials
- `dynamics` - requires Dynamics 365 credentials

Adapters are stubbed with clear TODOs. Enable by implementing the adapter and setting env vars.

### Booking

Calendly URL from `NEXT_PUBLIC_CALENDLY_URL`. The booking module uses a provider interface - swap to Cal.com or Microsoft Bookings without changing pages.

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables from `.env.example`
4. Set build command: `prisma generate && prisma migrate deploy && next build`
5. Connect Neon or Supabase PostgreSQL

## Future Extension Points

The codebase is structured to support:

- Blog CMS (Sanity, Contentful)
- Case studies from database
- Newsletter subscriptions
- Whitepapers and lead magnets
- BI maturity assessment tool
- Client portal
- Admin dashboard
- Authentication (NextAuth / Clerk)
- AI chatbot
- Proposal generation
- Discovery questionnaire
- File uploads

See `src/modules/content/index.ts` and `src/modules/crm/` for extension interfaces.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run db:migrate` | Run Prisma migrations (dev) |
| `npm run db:deploy` | Deploy migrations (production) |
| `npm run db:studio` | Open Prisma Studio |

## License

Proprietary - Noeris Analytics
