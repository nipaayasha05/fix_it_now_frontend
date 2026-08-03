# FixItNow Frontend

**A Home Service Marketplace Frontend Application**

## Live Application

https://your-frontend-url.vercel.app/

## Backend API

https://fix-it-now-backend-ivory.vercel.app/

## Admin Credentials

**Email:** admin@gmail.com

**Password:** 123456

## Project Overview

FixItNow is a modern home service marketplace built with Next.js. It allows customers to find and book home services, technicians to manage their profiles, services, and bookings, and administrators to manage users, categories, and the overall platform.

The application integrates with the FixItNow Backend API for authentication, service management, booking, reviews, and secure Stripe payment processing.

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- next-themes (Dark/Light Mode)
- React Hook Form
- Zod
- JWT

### State Management & Data Fetching

- Server Components
- Server Actions
- Fetch API

### Authentication

- JWT Authentication
- HTTP-only Cookies
- Next.js Middleware

### Payment Integration

- Stripe Checkout

---

## Features

### Authentication

- User registration
- User login
- Secure JWT authentication
- Protected routes with middleware
- Role-based navigation and dashboards

### Customer

- Browse service categories
- Search and filter services
- View technician profiles
- Book services
- Manage bookings
- Make secure payments with Stripe
- View payment history
- Submit service reviews

### Technician

- Create technician profile
- Manage services
- Manage availability
- View assigned bookings
- Update booking status
- View dashboard overview

### Admin

- Dashboard overview
- Update user status
- Manage service categories

### Payment

- Stripe Checkout integration
- Payment success page
- Payment cancel page
- Payment history

### UI Features

- Responsive layout
- Skeleton loading states
- User-friendly error handling
- Toast notifications
- Dynamic role-based dashboards
- Optimized images using Next.js Image component

---

## Environment Variables

Create a `.env.local` file and add the following variables:

```env
NEXT_PUBLIC_BACKEND_API_URL=your_backend_api_url
BACKEND_API_URL=your_backend_api_url
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_SECRET=your_jwt_access_secret
```

---

## Installation

```bash
git clone https://github.com/nipaayasha05/fix_it_now_frontend

cd fix_it_now_frontend

npm install

npm run dev
```

---

## User Roles

- CUSTOMER
- TECHNICIAN
- ADMIN

---

## API Integration

The frontend communicates with the FixItNow Backend API to perform:

- Authentication
- User Profile
- Service Management
- Category Management
- Technician Management
- Booking Management
- Review Management
- Payment Processing

For detailed endpoint mapping, see **API_INTEGRATION.md**.

---

## Pages

### Public Pages

- Home
- Services
- Service Details
- Technicians
- Technician Details
- Login
- Register

### Customer Dashboard

- Dashboard
- My Bookings
- My Reviews

### Technician Dashboard

- Dashboard
- Completed Profile
- Services
- Availability
- Bookings

### Admin Dashboard

- Dashboard Overview
- Users
- Categories

---
