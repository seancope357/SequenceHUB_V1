# SequenceHub - The xLights Sequence Marketplace

SequenceHub is a modern, responsive web application that serves as a marketplace for xLights sequences. Built with Next.js 15, TypeScript, and Tailwind CSS, it features a dark theme with neon accents and provides both buyer and seller experiences.

## 🎯 Project Overview

**SequenceHub** is designed to be the go-to marketplace for xLights sequence creators and enthusiasts. The platform allows users to:

- **Browse & Purchase**: Discover premium xLights sequences from creators worldwide
- **Sell & Monetize**: Upload and sell your own sequences to the community
- **Manage Collections**: Organize purchased sequences in a personal library
- **Analytics & Insights**: Track sales performance and engagement (for sellers)

## 🎨 Design System

### Theme
- **Dark Mode UI**: Matte Black (#0B0B0B) & Charcoal Grey (#121212) backgrounds
- **Accent Colors**:
  - Neon Cyan (#00E5FF) → Primary
  - Vibrant Purple (#B84FFF) → Secondary  
  - Golden Amber (#FFD54F) → Highlights

### Typography
- **Headings**: Poppins ExtraBold
- **Body Text**: Inter Regular
- **Accents/Numbers**: Orbitron

## 🛠 Tech Stack

### Core Framework
- **Next.js 15** with App Router and TypeScript
- **React 19** with Server Components
- **Tailwind CSS 4** for styling

### Backend & Database
- **Supabase** for authentication, database, and file storage
- **PostgreSQL** database with Row Level Security (RLS)

### Payment Processing
- **Stripe** for secure payments and subscription management

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **Framer Motion** for animations
- **Lucide React** for icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── auth/              # Authentication components
│   ├── cart/              # Shopping cart components
│   ├── dashboard/         # Dashboard components
│   ├── layout/            # Navigation, sidebar, layout
│   ├── marketplace/       # Product listings, search
│   └── ui/                # Reusable UI components
├── contexts/              # React contexts
├── data/                  # Static data and constants
├── hooks/                 # Custom React hooks
├── lib/
│   ├── stripe/            # Stripe integration
│   ├── supabase/          # Supabase client setup
│   └── utils/             # Utility functions
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase project set up
- Stripe account configured

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/seancope357/SequenceHUB_V1.git
   cd SequenceHUB_V1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.local.example` to `.env.local` and fill in your credentials:
   ```bash
   cp .env.local.example .env.local
   ```

   Required environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key

   These variables must be defined. The application will throw an error if
   `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is missing.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚦 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📦 Deployment

This project is optimized for deployment on **Vercel**:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic builds on push to main branch

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the xLights community**
