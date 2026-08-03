# API Integration Documentation

This document provides an overview of how the frontend is connected to the backend APIs. It shows which frontend routes and components use specific API endpoints, along with the HTTP method and their purpose.

| Frontend Route                         | Component             | API Endpoint                                   | Method | Purpose                               |
| -------------------------------------- | --------------------- | ---------------------------------------------- | ------ | ------------------------------------- |
| `/auth/login`                          | LoginForm             | `/api/auth/login`                              | POST   | Authenticate user                     |
| `/auth/register`                       | RegisterForm          | `/api/auth/register`                           | POST   | Register a new user                   |
| `/profile`                             | MyProfile             | `/api/auth/me`                                 | GET    | Fetch authenticated user profile      |
| `/dashboard/technician`                | TechnicianOverview    | `/api/auth/me`                                 | GET    | Fetch technician information          |
| `/dashboard/technician/profile`        | TechnicianProfile     | `/api/auth/me`                                 | GET    | Fetch technician profile              |
| `/dashboard/technician/profile`        | CreateProfile         | `/api/technician`                              | POST   | Create technician profile             |
| `/dashboard/admin/category`            | CreateCategory        | `/api/admin/categories`                        | POST   | Create a new category                 |
| `/dashboard/admin/categories`          | CategoryList          | `/api/categories`                              | GET    | Fetch all categories                  |
| `/dashboard/technician/services`       | CreateService         | `/api/categories`                              | GET    | Fetch categories for service creation |
| `/dashboard/technician/services`       | CreateService         | `/api/technician/services`                     | POST   | Create a new service                  |
| `/services`                            | AllServices           | `/api/services`                                | GET    | Fetch all available services          |
| `/services/:id`                        | ServiceById           | `/api/services/:id`                            | GET    | Fetch service details                 |
| `/technicians`                         | AllTechnicians        | `/api/technicians`                             | GET    | Fetch all technicians                 |
| `/technicians/:id`                     | TechnicianDetailsPage | `/api/technicians/:id`                         | GET    | Fetch technician details              |
| `/technicians/:id`                     | BookingCard           | `/api/bookings`                                | POST   | Create a booking                      |
| `/dashboard/customer`                  | CustomerOverview      | `/api/bookings`                                | GET    | Fetch customer bookings overview      |
| `/dashboard/customer/bookings`         | MyBooking             | `/api/bookings`                                | GET    | Fetch customer bookings               |
| `/dashboard/customer/bookings`         | PaymentCard           | `/api/bookings/:id`                            | GET    | Fetch booking details before payment  |
| `/dashboard/customer/:id/pay`          | PaymentCard           | `/api/payments/create`                         | POST   | Create payment session                |
| `/dashboard/customer`                  | CustomerOverview      | `/api/payments`                                | GET    | Fetch payment history                 |
| `/dashboard/customer/reviews`          | MyReview              | `/api/bookings/reviews/eligible`               | GET    | Fetch eligible bookings for review    |
| `/dashboard/customer/reviews/eligible` | ReviewModal           | `/api/reviews`                                 | POST   | Submit a review                       |
| `/dashboard/technician/bookings`       | Bookings              | `/api/technician/bookings`                     | GET    | Fetch technician bookings             |
| `/dashboard/technician/bookings`       | TechnicianBookingCard | `/api/technician/bookings/:id`                 | PATCH  | Update booking status                 |
| `/dashboard/technician/availability`   | CreateAvailability    | `/api/technician/availability`                 | POST   | Create technician availability        |
| `/dashboard/technician`                | TechnicianOverview    | `/api/technician/availability/my-availability` | GET    | Fetch technician availability         |
| `/dashboard/technician/availability`   | AvailabilityList      | `/api/technician/availability/my-availability` | GET    | Fetch availability list               |
| `/dashboard/technician`                | TechnicianOverview    | `/api/technician/dashboard`                    | GET    | Fetch technician dashboard overview   |
| `/dashboard/admin/users`               | Users                 | `/api/admin/users`                             | GET    | Fetch all users                       |
| `/dashboard/admin/users`               | UserCard              | `/api/admin/users/:id`                         | PATCH  | Update user status                    |
| `/dashboard/admin`                     | Admin                 | `/api/admin/overview`                          | GET    | Fetch admin dashboard overview        |
| `/services`                            | ServiceList           | `/api/services/my-service`                     | GET    | Fetch technician's own services       |
