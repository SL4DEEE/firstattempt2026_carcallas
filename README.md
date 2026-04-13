# ADDU Nation Alumni Platform

## Project Details

**Title:** Carcallas

**Framework:** Vite React (TypeScript)

**Module:** Donation Module

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd firstattempt2026_carcallas/my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm run dev
   ```

4. **Open in browser:**
   - The application will be available at `http://localhost:5173`

### Build for Production
```
npm run build
```

### To run on a different computer:
- Clone the repository from GitHub
- Run `npm install` to install all dependencies
- Run `npm run dev` to start the local development server
- No additional configuration required

## Features

- **Authentication:** Email/Password and Biometric login
- **Donation Hub:** Browse and support various campaigns and appeals
- **Career Opportunities:** Job board and mentorship connections
- **Home Dashboard:** Daily snapshot and recent activity feed
- **Responsive Design:** Full-screen mobile and desktop support

## AI Tools Used

- GitHub Copilot (Claude Haiku 4.5) - Code generation and assistance

# ADDU Nation Alumni Platform - Master Prompt

## Project Overview
You are building **ADDU Nation**, a comprehensive alumni platform web application for Ateneo de Davao University. This is a full-featured platform that connects alumni, facilitates donations, and provides career opportunities.

## Tech Stack
- **Framework:** Vite React with TypeScript
- **Styling:** CSS (custom, no frameworks)
- **State Management:** React Hooks (useState)
- **Build Tool:** Vite
- **Deployment:** Node.js environment

## Core Features

### 1. Authentication (Login Page)
- ADDU Nation logo with shield emblem
- Biometric login option
- Email/University ID login
- Password field
- "Forgot Password" link
- "Create Account" link
- **Skip authentication for demo purposes** (no validation required)

### 2. Home Dashboard
- Personalized greeting ("Welcome back, Hello, [Name]")
- Quick navigation tabs (Network, Donate, Career, Docs, Search)
- Daily Snapshot section:
  - Jobs for You (with match count)
  - Verified Status (Profile completion %)
- Recent Activity feed:
  - Mentor messages
  - Donation receipts
  - Job application updates
- Bottom navigation (Home, Network, Donate, Career, Documents)

### 3. Donation Hub
- Header with search functionality
- Impact counter showing total donations ($1,250.00)
- "Make an Impact Today" section with quick actions:
  - Alumni Business
  - Student Projects
  - Community Initiatives
  - Emergency Fund
- "Start a Campaign" button
- Verified Urgent Appeals section:
  - Appeal cards with images
  - Progress bars for fundraising goals
  - "Donate Now" buttons
  - Verified badge indicator

### 4. Career Opportunities
- Header with search and filter
- Three tabs: Job Board, Mentorship, Workshops
- **Job Board:**
  - Company icon/logo
  - Job title, company, location
  - Salary range
  - Job type tags (Full-time, Contract, Remote)
  - Save/bookmark button
  - "Apply Now" button
- **Mentorship section:**
  - Alumni mentor profiles
  - Specialization description
  - "Can Help" badges
  - "Request Meeting" button

## Design Guidelines

### Color Scheme
- **Primary Dark:** #001a4d (Navy blue)
- **Primary Blue:** #0066ff
- **Background:** #ffffff (White)
- **Text:** #333333 (Dark gray)
- **Light Background:** #f5f5f5

### Typography
- Headings: Bold, larger font sizes
- Body: Regular weight, readable line height
- Small text: Gray color for secondary information

### Layout Requirements
- **Full-screen responsive design**
- **Mobile-first approach**
- Fixed header and bottom navigation
- Scrollable content area
- No horizontal scrolling

## Navigation Flow
1. **Login Page** → User lands here first
2. **Home Page** → Landing page after login (click "Log In" or "Biometric Login")
3. **Navigation Options:**
   - Home button → Returns to dashboard
   - Donate button → Goes to Donation Hub
   - Career button → Goes to Career Opportunities
   - Network, Docs, Search → Placeholder pages (can be added later)
   - Documents button → Logs out

