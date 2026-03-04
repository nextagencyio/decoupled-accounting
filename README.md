# Decoupled Accounting

An accounting firm website starter template for Decoupled Drupal + Next.js. Built for CPA firms, bookkeeping practices, and financial advisory businesses looking to establish a professional web presence.

![Decoupled Accounting Screenshot](docs/screenshot.png)

## Features

- **Services** - Showcase accounting, tax preparation, bookkeeping, payroll, and advisory offerings with detailed descriptions and client type targeting
- **Team Members** - Present partners, CPAs, and staff with credentials, specializations, education, and professional memberships
- **Resources** - Publish financial guides, tax tips, and educational articles organized by topic with author attribution
- **Modern Design** - Clean, accessible UI optimized for professional services content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-accounting my-accounting-site
cd my-accounting-site
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Accounting Firm"
```

Note the space ID returned (e.g., `Space ID: 1234`). Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero section, firm statistics, and consultation CTAs
- 3 Services (Individual Tax Preparation, Business Tax & Advisory, Bookkeeping & Payroll)
- 3 Team Members (Managing Partner, Partner, Senior CPA with full credentials)
- 3 Resources (Year-End Tax Planning, Starting a Business Checklist, Retirement Planning Guide)
- About page with firm history and approach
- Contact page with office details and hours

</details>

## Content Types

### Service
- **Image** - Service featured image
- **Summary** - Brief description of the service
- **Client Type** - Target audience (e.g., Individuals and Families, Small Businesses)
- **Service Category** - Taxonomy classification (Tax Preparation, Bookkeeping, Business Advisory, Audit & Assurance, Payroll Services, Estate & Trust, Consulting)

### Team Member
- **Portrait Photo** - Professional headshot
- **Credentials** - Professional designations (e.g., CPA, EA, CFE, CGMA)
- **Job Title** - Position at the firm
- **Specializations** - Areas of expertise
- **Education** - Academic background
- **Professional Memberships** - Industry associations and organizations
- **Role** - Taxonomy classification (Managing Partner, Partner, Senior CPA, Staff Accountant, Tax Manager, Bookkeeper)

### Resource
- **Featured Image** - Article header image
- **Summary** - Brief article synopsis
- **Topic** - Taxonomy classification (Tax Planning, Small Business, Personal Finance, Retirement, Real Estate, Nonprofit, Regulatory Updates)
- **Author** - Article author name
- **Published Date** - Publication date

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/accounting-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

Set the environment variable:

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

To convert to a production app with real data:

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-accounting)

Set `NEXT_PUBLIC_DEMO_MODE=true` in Vercel environment variables for a demo deployment.

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
