# HDT AI Frontend Application

## Overview

This is a full-stack React application for HDT AI (a Vietnamese AI technology company), built with TypeScript, Express, and modern web technologies. The application serves as a corporate website showcasing AI solutions and services, with multi-language support (Vietnamese and English) and a responsive design system based on the Devin.ai interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/UI component library with Radix UI primitives
- **Styling**: TailwindCSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state
- **Internationalization**: Custom i18n implementation with React Context

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Build Tool**: Vite for development and production builds
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL storage

### Development Environment
- **Development Server**: Vite with HMR (Hot Module Replacement)
- **TypeScript**: Strict mode enabled with custom path aliases
- **Code Organization**: Monorepo structure with shared schemas

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Shadcn/UI component library
│   │   ├── Header.tsx       # Main navigation component
│   │   ├── Footer.tsx       # Footer with company info
│   │   └── LanguageSwitcher.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── Enterprise.tsx   # Enterprise solutions
│   │   ├── Pricing.tsx      # Pricing plans
│   │   └── [other pages]
│   ├── hooks/               # Custom React hooks
│   │   ├── useLanguage.tsx  # i18n management
│   │   └── use-mobile.tsx   # Responsive utilities
│   └── lib/                 # Utility libraries
│       ├── i18n.ts          # Translation definitions
│       ├── queryClient.ts   # React Query configuration
│       └── utils.ts         # General utilities
```

### Backend Structure
```
server/
├── index.ts                 # Express server entry point
├── routes.ts                # API route definitions
├── storage.ts               # Data access layer
└── vite.ts                  # Vite middleware setup
```

### Shared Resources
```
shared/
└── schema.ts               # Database schema definitions
```

## Data Flow

### Client-Side Data Management
1. **Language Context**: Global state for i18n using React Context
2. **React Query**: Server state caching and synchronization
3. **Form State**: Local component state for forms and user interactions
4. **Route State**: URL-based state management via Wouter

### API Communication
1. **REST API**: Express routes with `/api` prefix
2. **Error Handling**: Centralized error handling with proper HTTP status codes
3. **Request Logging**: Automatic logging of API requests with timing
4. **CORS**: Configured for development and production environments

### Database Integration
1. **Drizzle ORM**: Type-safe database queries
2. **Schema Management**: Centralized schema definitions in shared directory
3. **Migrations**: Database migrations managed via Drizzle Kit
4. **Connection**: Neon serverless PostgreSQL connection

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **TypeScript**: Full TypeScript support with strict configuration
- **Express**: Node.js web framework for backend API
- **Drizzle**: Modern ORM with TypeScript support

### UI/UX Dependencies
- **Radix UI**: Headless UI primitives for accessibility
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Font Awesome**: Additional icon support
- **Inter & JetBrains Mono**: Typography fonts

### Development Dependencies
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Served via Express static middleware in production

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Serves built assets via Express
- **Database**: Environment-based DATABASE_URL configuration

### Deployment Commands
```bash
npm run dev      # Development with hot reload
npm run build    # Production build
npm run start    # Production server
npm run db:push  # Database schema deployment
```

### Infrastructure Requirements
- **Node.js**: Runtime environment
- **PostgreSQL**: Database (Neon serverless recommended)
- **Environment Variables**: DATABASE_URL for database connection

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.