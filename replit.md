# Wedding Invitation Website

## Overview

This is a beautiful, mobile-friendly, one-page wedding invitation website built with React, Express, and TypeScript. The application features an elegant design with warm pastel tones, smooth animations, and comprehensive wedding information including RSVP functionality, event details, photo gallery, and gift registry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom wedding theme colors (blush, ivory, soft gold, lavender)
- **UI Components**: Radix UI components with shadcn/ui styling system
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations with Tailwind classes for smooth scroll effects

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for RSVP management
- **Validation**: Zod schemas for request/response validation
- **Storage**: Configurable storage layer (currently in-memory, prepared for PostgreSQL)

### Build System
- **Bundler**: Vite for development and production builds
- **Development**: Hot module replacement with Vite dev server
- **Production**: Optimized static assets served by Express

## Key Components

### Frontend Components
- **HeroSection**: Wedding video, couple names, date, and countdown timer
- **EventDetails**: Ceremony and reception information with embedded Google Maps
- **RSVPSection**: Form handling with validation and submission
- **PhotoGallery**: Responsive image carousel with auto-play
- **GiftRegistry**: Links to external registries and bank details
- **SocialSharing**: WhatsApp, Instagram, Email, and Facebook sharing
- **Navigation**: Smooth scrolling navigation bar
- **CountdownTimer**: Live countdown to wedding day

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting multiple backends
- **RSVP API**: Create and retrieve RSVP submissions
- **Validation**: Server-side validation using shared Zod schemas
- **Error Handling**: Centralized error handling middleware

## Data Flow

### RSVP Submission Flow
1. User fills out RSVP form in frontend
2. React Hook Form validates input using Zod schema
3. TanStack Query sends POST request to `/api/rsvp`
4. Server validates request body against shared schema
5. Server checks for duplicate email addresses
6. RSVP data is stored in configured storage backend
7. Success/error response sent back to client
8. Toast notification shown to user

### Gallery and Media
- Static images served from external CDN (Unsplash)
- Video content served from local assets
- Social media sharing generates dynamic URLs

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **@hookform/resolvers**: Zod integration for forms
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **express**: Web framework
- **drizzle-orm**: Type-safe ORM
- **drizzle-zod**: Schema validation integration
- **@neondatabase/serverless**: PostgreSQL database connector
- **zod**: Schema validation library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@vitejs/plugin-react**: React support for Vite
- **drizzle-kit**: Database schema management

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- Express server with TypeScript compilation via tsx
- Concurrent development with proxy setup

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Static assets served by Express in production

### Database Setup
- Drizzle ORM configured for PostgreSQL
- Schema definitions in `shared/schema.ts`
- Migrations generated to `./migrations` directory
- Environment variable `DATABASE_URL` required for database connection

### Environment Configuration
- Development: `NODE_ENV=development`
- Production: `NODE_ENV=production`
- Database: `DATABASE_URL` environment variable
- Build artifacts in `dist/` directory

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting providers with minimal configuration changes.