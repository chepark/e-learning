# About this project

This project demonstrates key features using data endpoints enabled through ServiceNow, built on top of provided boilerplates. The focus is on creating a course subscription platform with drag-and-drop capabilities.

# Features

## 1. Course List

- [x] Fetch and display a list of available courses from the backend (ServiceNow or custom
      backend).
- [x] Display course details (Title, Description, Duration).
- [x] Use a traditional "Subscribe" button.
- [x] (Opitional) Implement a drag-and-drop mechanism where learners
      can drag courses into a subscription basket.

## 2. Subscription Feature

- [x] Clicking the "Subscribe" button or dropping a course into the basket should create a new subscription record.
- [x] Display the subscribed course in the learner's "My Courses"
- [x] Optional (Advanced): Provide feedback such as visual highlight when using drag-and-
      drop.

## 3. My Courses

- [x] Optional (Advanced): Provide feedback (e.g., visual highlights) when using drag-and-
      drop.
- [x] (Optional) Provide a way to unsubscribe from courses.

Hosting

## 4. Hosting the service

- [ ] Fully hosting the application on ServiceNow

# Main tech stacks

Due to the time constraint, most tech stacks were chosen to promote the fast implementation.

- Vite: Chosen for its fast build times and modern bundling capabilities.
- JavaScript: While I prefer TypeScript for catching errors at compile time, JavaScript was selected as it aligns with the DCM team's tech stack.
- Axios: Used for handling HTTP requests and simplifying response handling.
- TanStack Query: Integrated to enhance user experience by caching subscription data. Full optimization was limited due to time constraints.
- Styled-Components: Used for creating dynamic styles, particularly for drag-and-drop visual highlights.
- React Router: Set up routing for the main course page and "My Courses" page.

# Project folder and file structures

```
.
└── app/
    ├── ...
    └── src/
        └── api/
            ├── axiosInstance.js: Sets up Axios with BaseURL and common headers.
            ├── constant.js: Stores commonly used API variables
            ├── course.js: API for course-related requests.
            ├── subscription.js: API for subscription-related requests.
            ├── components/
            │   ├── CourseCard.jsx: Displays course details and handles subscribe/unsubscribe actions.
            │   ├── Layout.tsx:  Common layout component for rendering the header and page content.
            │   ├── ShoppingBasket.jsx: Place to drop <CourseCard/> to subscribe a course
            │   └── ...
            ├── context/
            │   └── UIDataContext.js: Stores UI data for drag-and-drop functionality.
            ├── hooks/ hooks to use Tanstack Query and UIData Context
            │   ├── ...
            ├── pages/
            │   ├── HomePage.jsx: Displays available courses and allows users to subscribe.
            │   ├── MyCoursePage.jsx: Displays subscribed courses and enables unsubscribing.
            │   └── ...
            ├── utils/
            │   └── formatDuration.js: Converts epoch date-time to display course duration correctly.
            ├── App.jsx: Set up the frontend routes
            └── ...
```

# Implementation Process

## Day 1 (evening)

- Project planning and familiarization with ServiceNow.
- Created a Personal Developer Instance in ServiceNow.
- Set up tables in ServiceNow Studio using the provided boilerplates.

## Day 2 (full day)

- Explored ServiceNow Table API and configured API calls.
- Refined query parameters to retrieve required data.
- Integrated TanStack Query for data caching.
- UI implementation:
  1. Set up routing.
  2. Implemented layout structure.
  3. Learned drag-and-drop implementation in React.
  4. Developed components and context, integrating them into the UI.

## Day 3 (half-day)

- Checked the requests and implementation. Added missing features.
- Documented the project on README.md

# Challenges

## Fetching fields in a referenced table

When displaying subscribed courses, fetching records from the `x_quo_coursehub_course_subscription` table returned only reference links instead of the full course details (title, description, duration). It was challenging to retrieve data from populated reference fields, but this was eventually solved through further query refinement.

## Understanding the date-time string from Table API and conversion

ServiceNow’s Table API returned the duration data as a date string (`YYYY-MM-DD HH:MM:SS`) instead of the expected format. After investigation, I realized the system was using Unix Epoch timestamps. A conversion utility (`/utils/formatDuration.js`) was implemented to transform these values into readable duration strings.

# Future improvemnet

- Add automated testing
- Improve caching data for better user experience

# Run project locally

## Prerequisite

1. You need to enable PDI in ServiceNow. Then you need to set up tables using the [boiler plate](https://bitbucket.org/qualdatrix/coursehub/src/main/) and insert data into each table.
2. Create `./app/.env` and copy and paste variables from `./app/.env.example`. Replace values accordingly.

## CLI

Go to /app directory and install packages

```
npm install
```

Run the project

```
npm run dev
```
