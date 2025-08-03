# CarePlus Medical Center System

## Overview

CarePlus is a comprehensive medical center management system for a body sculpting and cosmetic center in Amman, Jordan. The application features a full-stack web platform with separate patient and staff portals, built using modern web technologies including React, TypeScript, Express, and PostgreSQL. The system is now fully functional with database integration and sample data.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript  
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Authentication**: Session-based authentication using bcryptjs for password hashing

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components following the shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming (CarePlus purple/blue brand colors)
- **Form Handling**: React Hook Form with Zod validation schemas
- **API Layer**: Custom fetch wrapper with error handling and TypeScript types
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture
- **Server Framework**: Express.js with TypeScript support
- **Database Layer**: Drizzle ORM with PostgreSQL, using Neon serverless database
- **API Design**: RESTful endpoints with consistent error handling
- **Session Management**: Express sessions with PostgreSQL storage
- **Password Security**: bcryptjs for hashing and validation

### Database Schema
The system uses the following main entities:
- **Users**: Basic user authentication and profile information
- **Patients**: Extended patient information with medical details
- **Staff**: Administrative user accounts with role-based access
- **Services**: Available medical services and treatments
- **Appointments**: Scheduling system for patient bookings
- **Medical Records**: Patient treatment history and notes
- **Contact Forms**: Website inquiry submissions

## Data Flow

1. **User Authentication**: Session-based authentication with secure password hashing
2. **Patient Registration**: Multi-step form with validation and database persistence
3. **Staff Management**: Administrative access to all system data and operations
4. **API Communication**: RESTful endpoints with consistent JSON responses
5. **Real-time Updates**: React Query for automatic data synchronization
6. **Form Validation**: Client-side validation with Zod schemas, server-side validation with Drizzle

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **drizzle-orm**: Type-safe SQL query builder
- **bcryptjs**: Password hashing and security

### UI Dependencies
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling for components
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundling for production builds

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and TypeScript support
- **Backend**: tsx with nodemon-like auto-restart functionality
- **Database**: Neon serverless PostgreSQL with connection pooling

### Production Build Process
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migrations**: Drizzle Kit handles schema migrations
4. **Static Assets**: Frontend serves from built public directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for Drizzle)
- **NODE_ENV**: Environment flag for production/development modes
- **Session Configuration**: Secure session management with PostgreSQL storage

The application is designed for deployment on platforms supporting Node.js with PostgreSQL databases, with specific optimizations for Replit's environment including hot reloading and development tooling integration.

## Recent Changes

- **July 22, 2025**: Complete website implementation with all core features
- Updated contact information with authentic CarePlus Jordan details
- Database seeded with sample patients, staff, services, appointments, and contact forms
- Fixed TypeScript errors and ensured proper type safety throughout the application
- Integrated accurate contact details including WhatsApp numbers and updated business hours
- Google Maps integration updated with correct location (XVHX+JH Amman)
- Implemented user-requested UI improvements: removed book appointment button, made consultation button link to patient portal, added clickable phone/WhatsApp numbers
- Enhanced staff portal with real revenue calculations, patient/service names in schedules, and functional quick actions
- Updated About CarePlus section with user-provided content about services and capabilities
- Integrated branded professional images for all service sections (botox & fillers, hydrafacial, laser, dermatology, sculpting, skin treatments, and about section)
- Updated service descriptions with authentic CarePlus messaging and combined Botox & Fillers into single service
- Added "Transform Your Beauty" section with professional branded imagery and inspiring content
- **July 23, 2025**: Fixed critical server error in staff editing functionality caused by CommonJS require statements in ES6 module environment
- **July 23, 2025**: Implemented comprehensive role-based access control system:
  - **Admin**: Full access to all tabs and functionalities (Overview, Patients, Appointments, Services, Staff, Records, Reports)
  - **Manager**: Access to all tabs except Staff, Services, Records, and Reports; can edit and delete data
  - **Standard**: Read-only access to Overview, Appointments, and Patients tabs only; cannot edit or delete anything
- **July 26, 2025**: Enhanced security and separation of concerns:
  - Separated website services from staff portal services - website now shows fixed CarePlus services independent of internal management
  - Hidden revenue information (daily and monthly) from standard role users for improved data security
  - Fixed password authentication system with proper bcrypt hashing
- **August 2, 2025**: Social media authentication and navigation improvements:
  - Added Google and Facebook OAuth login buttons to patient portal with proper error handling
  - Updated database schema to support social login fields (googleId, facebookId)
  - Fixed patient records "Back to Dashboard" navigation to properly return to Records tab
  - Implemented URL parameter handling for automatic tab switching in staff dashboard
  - Added comprehensive appointments history tab in patient records with service and staff details
- **August 2, 2025**: Large-scale patient data import and UI cleanup:
  - Successfully imported 965 Arabic patients from Excel file using direct SQL database import
  - Removed Excel import/export UI buttons per user request to maintain clean interface
  - Streamlined patient management to focus on core functionality
  - Database now contains over 1,000 patient records with authentic Arabic names and phone numbers
- **August 3, 2025**: Internal Events system UI integration:
  - Removed separate Internal Events tab per user preference
  - Integrated "Add Event" button into Services tab alongside "Add Service" button
  - Modified appointments calendar view to display internal events alongside patient appointments
  - Internal events now appear in calendar with distinct visual styling (dashed borders, calendar icon)
  - Fixed SelectItem validation errors for empty values in event forms
  - Maintained backend separation between appointments and events while unifying frontend display