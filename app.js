// Import express
const express = require("express");

// Create app
const app = express();

// Port number
const PORT = 3000;

// Set EJS engine
app.set("view engine", "ejs");

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {

    res.render("index");

});

// Form submit route
app.post("/submit", (req, res) => {

    // Get form data
    const { name, email } = req.body;

    // Render result page
    res.render("result", {
        name,
        email
    });

});

// Start server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});