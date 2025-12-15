# Job Listings with Filtering - Frontend Mentor

A responsive job listings page with interactive filtering functionality built with React, TypeScript, and Tailwind CSS.

## 🎯 Challenge Overview

This project is a solution to the Job Listings with Filtering challenge from Frontend Mentor. The challenge focuses on building an interactive job board interface where users can filter job listings based on different categories like role, level, programming languages, and tools.

## 💼 Portfolio Project

This project also serves as a portfolio demonstration showcasing:
- **Frontend Development**: React with TypeScript for type-safe component development
- **State Management**: React hooks for managing filtering and application state
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Data Handling**: JSON data processing and filtering algorithms
- **UI/UX Implementation**: Interactive elements with hover states and smooth filtering

## ✨ Features

- **Dynamic Filtering**: Click on tags to filter job listings by multiple criteria
- **Real-time Updates**: Instant filtering results without page reload
- **Tag Management**: 
  - Add filters by clicking on job tags
  - Remove individual filters
  - Clear all filters at once
- **Responsive Layout**: Optimized for mobile, tablet, and desktop screens
- **Interactive States**: Hover and focus states for all clickable elements

## 🛠️ Built With

- **React 19** - Frontend framework for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## 📁 Project Structure

```
├── index.html              # Main HTML entry point
├── src/
│   ├── App.tsx             # Main application component
│   ├── App.css             # Application styles
│   ├── ListingItem.tsx     # Individual job listing component
│   ├── FilterItem.tsx      # Filter tag component
│   ├── TagItem.tsx         # Clickable job tag component
│   ├── data.json           # Job listings data
│   ├── models/
│   │   └── Listing.tsx     # TypeScript interface for job listings
│   └── assets/             # SVG icons and images
├── public/
│   └── images/             # Company logos
└── README.md
```

## 🎨 Design Features

- **Mobile-First Design**: Responsive layout that works on all device sizes
- **Clean Typography**: Professional font choices for readability
- **Interactive Elements**: Smooth hover transitions and visual feedback
- **Color Coding**: Visual distinction between featured and new job listings

## 🔧 Functionality

### Core Features Implemented:

- ✅ Display job listings from JSON data
- ✅ Filter jobs by role (Frontend, Backend, Fullstack)
- ✅ Filter jobs by experience level (Junior, Midweight, Senior)
- ✅ Filter jobs by programming languages
- ✅ Filter jobs by tools and frameworks
- ✅ Multiple filter combination support
- ✅ Clear all filters functionality

### User Actions:

1. **Browse Jobs**: View all available job listings on page load
2. **Apply Filters**: Click on any tag (role, level, language, tool) to filter results
3. **Combine Filters**: Add multiple filters to narrow down results
4. **Remove Filters**: Click the X on any active filter to remove it
5. **Reset View**: Use "Clear" button to remove all filters and show all jobs

## 💡 Key Implementation Details

- **Type Safety**: Full TypeScript implementation with proper interfaces
- **Efficient Filtering**: Algorithm checks if all active filters match job tags
- **State Management**: React hooks for managing filters and filtered listings
- **Responsive Grid**: CSS Grid and Flexbox for flexible layouts

## 🌟 Future Enhancements

- Add search functionality for company names or job titles
- Implement sort options (date, salary, alphabetical)
- Add pagination for large datasets
- Include job application modal or external link integration
- Add favorites functionality with local storage
- Implement dark mode toggle

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes as part of the Frontend Mentor challenge.

## Author

- Website - [franciscocristina.com](https://franciscocristina.com)
- LinkedIn - [francisco-cristina](https://www.linkedin.com/in/francisco-cristina)
- GitHub - [@gumballoon](https://github.com/gumballoon)
- Frontend Mentor - [@gumballoon](https://www.frontendmentor.io/profile/gumballoon)
- CSS Battle - [@gumballoon](https://cssbattle.dev/player/gumballoon)

## 🙏 Acknowledgments

- Frontend Mentor for the design and challenge
- Design assets and requirements provided by Frontend Mentor
- React team for the powerful frontend framework
- Tailwind CSS team for the utility-first CSS framework

---

**Frontend Mentor Challenge**: [Job listings with filtering](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt)