const express = require("express");

const app = express();

const PORT = 5000;


// Middleware
app.use(express.json());


// Test API
app.get("/", (req, res) => {
    res.send("Backend API is running successfully");
});


// Health Check API
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is healthy"
    });
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
