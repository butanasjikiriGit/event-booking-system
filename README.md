# Title Section

**Project Name**: EBS (Event Booking System)

**Version**: 1.0

**Date**: October 22, 2026

**Authors**:
- **Group Leader**: Jikiri Isaiah Butanas
- **Members**: Raniel Paul Miranda, Jelie Ann Limotan, Keith Wilmer Handumon

# Table of Contents

1. [Title Section](https://github.com/butanasjikiriGit/event-booking-system#title-section)
2. [Project Links and Checklist](https://github.com/butanasjikiriGit/event-booking-system#project-links-and-checklist)
3. [Features](https://github.com/butanasjikiriGit/event-booking-system#features)
   - [Frontend Features](https://github.com/butanasjikiriGit/event-booking-system#frontend-features)
   - [Backend Features](https://github.com/butanasjikiriGit/event-booking-system#backend-features)
4. [Functional Requirements](https://github.com/butanasjikiriGit/event-booking-system#functional-requirements)
5. [Non-Functional Requirements](https://github.com/butanasjikiriGit/event-booking-system#non-functional-requirements)
6. [Visual Mockup and Wireframes](https://github.com/butanasjikiriGit/event-booking-system#visual-mockup-and-wireframes)
7. [Data Requirements and ERD](https://github.com/butanasjikiriGit/event-booking-system#data-requirements-and-erd)
   - [Entity-Relationship Diagram](https://github.com/butanasjikiriGit/event-booking-system)
   - [Database Schema Details](https://github.com/butanasjikiriGit/event-booking-system)

# Project Links and Checklist

[Trello Task Board](https://trello.com/b/CrwwHllV/event-bookiing-stystem)

[Entity-Relationship Diagram (ERD)](https://drive.google.com/file/d/1MlZevdXKJCO7BiowTzFPl7Oh2rb_3r5F/view?usp=sharing)

[Wireframes and Mockups (Figma and Stitch)](https://www.figma.com/design/3Up6gqrOY2OWatO3oxbszA/Untitled?node-id=22-2728&t=6USLX0l13EQ9sBFV-1)

# Features

### Frontend Features
  
- **User Authentication UI**: Login and Registration forms capturing first name, last name, email, password, and mobile number.
- **Events & VIP Packages Catalog**: Display upcoming events (with artist, venue, and schedule) and their corresponding VIP tiers/packages with inclusions and activities.
- **Package Booking & Checkout**: Form allowing users to select a VIP package, specify ticket quantity, and view total amount.
- **My Booking & Ticket Dashboard**: User page displaying booking references, payment status, and individual generated ticket codes for attendees.

### Backend Features

- **Authentication & Role Management**: User registration and login with password hashing and admin role checks.
- **Events, Packages & Activities CRUD**: Admin endpoints to create events, assign VIP packages to events, and schedule package activities.
  - **Events**: Create new events, read/retrieve all events or specific event details, update event information (name, artistName, venue, schedule, capacity), and archive or cancel events by updating their status.
  - **VIP Packages**: Create VIP packages assigned to an event, read/retrieve packages by event, update package details (name, inclusions, price, capacity), and activate or deactivate packages using the isActive toggle. 
  - **Package Activities**: Create scheduled activities under a VIP package, read/retrieve the itinerary for a package, update activity details (title, startsAt, endsAt, meetingLocation, instruction), and delete removed activities. 
- **Booking & Ticket Generation Engine**: Logic to record package bookings, calculate `totalAmount` based on `unitPriceAtBooking`, and issue individual attendee tickets with check-in tracking.

# Functional Requirements

- **User Registration and Auth**: Users must register and log in using `firstName`, `lastName`, `email`, `mobileNo`, and password. Admins are identified via the `isAdmin` boolean flag.
- **Browse Event & Packages**: Users must be able to view active events, available VIP packages, and scheduled itinerary activities.
- **Create Booking**: Authenticated users must be able to book a specific package by specifying quantity, generating a unique booking reference and recording booking status and payment status.
- **Ticket Issuance & Check-in**: Upon booking confirmation, the system must generate individual ticket records containing a unique ticket code, attendee name, and check-in timestamp.
- **Admin Management**: Admin users must be able to create and update events, packages, capacities, and package activities.
  - **Event Operations (EVENT)**
    - **Create**: Add new events with `name`, `description`, `artistName`, `category`, `venue`, `location`, `startsAt`, `endsAt`, `capacity`, and `status`.
    - **Read**: View all events, including upcoming, ongoing, completed and cancelled events.
    - **Update**: Edit event details, reschedule start/end times, adjust total capacity, or change the event status.
    - **Archive**: Deactivate or cancel an event by updating status.
  - **VIP Package Operations (PACKAGE)**
    - **Create**: Create new VIP packages under an event with name, description, inclusions, price, currency, and capacity.
    - **Read**: View all active and inactive VIP packages.
    - **Update**: Edit package pricing, inclusions, descriptions, and available slot capacity.
    - **Activate/Deactivate**: Toggle the `isActive` status to show or hide a  package from customers.
  - **Package Activity Operations (PACKAGE_ACTIVITY)**
    - **Create**: Add itinerary activities to a VIP package with `title`, `description`, `statsAt`, `endsAt`, `meetingLocation`, and `instruction`.
    - **Read**: View all scheduled activities for a specific package.
    - **Update**: Modify activity schedules, meeting locations, or guest instructions.
    - **Delete**: Remove an activity from a package schedule.
  - **Booking & Ticket Operations (BOOKING & TICKET)**
    - **Read**: View all user bookings `bookingReference` and generated attendee tickets `ticketCode`.
    - **Update**: Change `bookingStatus` (Pending, Confirmed, Cancelled), update `paymentStatus` (Unpaid, Paid, Refunded), and check in attendees by updating ticket `status` and `checkedInAt`.
  - **User Operations (USER)**
    - **Read**: View registered customer profiles.
    - **Update**: Assign or remove admin rights via the `isAdmin` field.

# Non-Functional Requirements

- **Performance**: Pages should load within 2 seconds; API responses should take less than 500ms.
- **Security**: User passwords must be hashed using `bcrypt` before saving to the database. Protected routes must require JWT authentication. 
- **Usability**: The UI must be responsive and easy to navigate on both mobile phones and desktop screens. 
- **Reliability**: The database must prevent double-booking if an event reaches 0 available slots.

# Visual Mockup and Wireframes

- [Figma Prototype Link](https://www.figma.com/design/3Up6gqrOY2OWatO3oxbszA/Untitled?node-id=22-2728&t=6USLX0l13EQ9sBFV-1)
- **Typography Guide (Figma & Stitch)**:
  - **Primary Fonts**: Inter / Plus Jakarta Sans 
  - **Secondary Fonts**: System-ui, -apple-system, sans-serif 
  - **Color Palette**: 
    - **Primary Background (Warm Alabaster)**: #FAF6F2 ![warm-alabaster](./images/warm-alabaster.png)
    - **Secondary Background (Soft Sand)**: #F5EFEA ![soft-sand](./images/soft-sand.png)
    - **Surface / Cards (Pure White)**: #FFFFFF ![pure-white](./images/pure-white.png)
    - **Input Fields & Tags (Warm Stone)**: #F3EFEA ![warm-stone](./images/warm-stone.png)
    - **Primary Accent (Terracotta Coral)**: #DF7857 ![terracotta-coral](./images/terracotta-coral.png)
    - **Accent Tint (Pale Peach)**: #F7E5DE ![pale-peach](./images/pale-peach.png)
    - **Primary Text (Deep Charcoal)**: #222222 ![deep-charcoal](./images/deep-charcoal.png)
    - **Secondary Text (Warm Slate Gray)**: #6E6A66 ![warm-slate-gray](./images/warm-slate-gray.png)
    - **Borders & Dividers (Light Warm Gray)**: #EAE3DC ![light-warm-gray](./images/light-warm-gray.png)
- **Included Wireframes (Desktop & Mobile Views)**:
  - Landing / Home Page
  - Login / Register Page
  - Event Catalog / Packages Page
  - Event Details & Booking Form Page
  - User Profile / My Bookings Page
  - Admin Dashboard

# Data Requirements and ERD

### Entity-Relationship Diagram
- [ERD Link](https://drive.google.com/file/d/1MlZevdXKJCO7BiowTzFPl7Oh2rb_3r5F/view?usp=sharing)

### Database Schema Details (to be added)