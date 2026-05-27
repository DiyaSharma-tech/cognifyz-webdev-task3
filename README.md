# Cognifyz Web Development Internship - Task 3

## Advanced CSS Styling and Responsive Design

---

# Project Overview

This project was developed as part of the Cognifyz Web Development Internship Program.

The objective of this task was to enhance webpage styling using advanced CSS techniques and create a fully responsive website using Bootstrap. The project also demonstrates server-side rendering using EJS and Express.js.

The application contains multiple responsive sections including a navigation bar, hero section, cards section, and contact form with modern UI styling and animations.

---

# Objectives of the Task

- Create a complex webpage layout with multiple sections
- Apply advanced CSS styling techniques
- Use transitions and animations for better UI/UX
- Utilize Bootstrap for responsive design
- Build dynamic webpages using EJS
- Create a user-friendly responsive interface

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of web pages |
| CSS3 | Styling and animations |
| Bootstrap 5 | Responsive UI framework |
| JavaScript | Basic interactivity |
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework |
| EJS | Template engine for dynamic rendering |

---

# Features

- Responsive navigation bar
- Hero section with gradient background
- Animated UI components
- Responsive cards section
- Interactive hover effects
- Contact form with responsive layout
- Bootstrap grid system
- CSS transitions and animations
- Dynamic EJS rendering
- Express.js server integration

---

# Project Structure

```bash
cognifyz-webdev-task3/

│

├── public/
│   └── style.css
│

├── views/
│   ├── index.ejs
│   └── result.ejs
│

├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Working of the Application

## Step 1: Home Page

The user opens the responsive website in the browser.

---

## Step 2: Responsive Layout

The webpage automatically adjusts according to different screen sizes using Bootstrap classes and responsive CSS.

---

## Step 3: Interactive UI

Users can interact with cards, buttons, and form elements enhanced with transitions and hover effects.

---

## Step 4: Form Submission

The contact form sends user data to the Express.js backend using POST request handling.

---

## Step 5: Dynamic Result Page

The submitted user information is dynamically displayed using EJS templating.

---

# Responsive Design

The project is optimized for:

- Desktop 
- Tablet 
- Mobile 

Bootstrap grid system and media queries are used for responsiveness.

---

# Advanced CSS Features

The project includes:

- CSS animations
- Smooth transitions
- Hover effects
- Gradient backgrounds
- Responsive spacing
- Card shadow effects
- Typography styling
- Modern UI design

---

#  Code Explanation

## app.js

The `app.js` file:

- Creates the Express server
- Configures EJS templating
- Serves static files
- Handles routes
- Processes form submissions
- Dynamically renders webpages

### Main Functionalities

- Express server setup
- Middleware configuration
- Static file serving
- Route handling
- Form data handling
- Dynamic EJS rendering

---

## index.ejs

The `index.ejs` file contains:

- Navigation bar
- Hero section
- Responsive cards
- Contact form
- Bootstrap integration
- Responsive webpage layout

This acts as the main UI of the application.

---

## result.ejs

The `result.ejs` file displays submitted user information dynamically using EJS.

### Example

```ejs
<p>Name: <%= name %></p>
<p>Email: <%= email %></p>
```

---

## style.css

The `style.css` file includes:

- Custom styling
- Hover animations
- Responsive design
- Card effects
- Hero section styling
- Media queries
- UI enhancements

---

# Installation and Setup

## Step 1: Clone the Repository

```bash
git clone https://github.com/DiyaSharma-tech/cognifyz-webdev-task3.git
```

---

## Step 2: Navigate to Project Folder

```bash
cd cognifyz-webdev-task3
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Run the Application

```bash
node app.js
```

---

## Step 5: Open in Browser

```bash
http://localhost:3000
```

---

#  Learning Outcomes

Through this project, the following concepts were learned and implemented:

- Responsive web design
- Bootstrap framework usage
- Advanced CSS styling
- CSS transitions and animations
- Express.js server setup
- EJS templating
- Dynamic webpage rendering
- UI/UX enhancement techniques

---

# Future Improvements

Possible enhancements for the project:

- Add dark mode support
- Add JavaScript animations
- Improve form validation
- Connect database integration
- Add authentication system
- Create additional responsive pages
- Enhance accessibility features

---

# Author

**Diya Sharma**

Web Development Internship Project Submission  
Cognifyz Technologies

---

# Internship Information

This project was completed as part of the Cognifyz Web Development Internship Program under:

## Task 3: Advanced CSS Styling and Responsive Design
