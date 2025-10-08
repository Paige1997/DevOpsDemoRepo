const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from a 'public' directory
app.use(express.static(path.join(__dirname, "/public")));

// Define a simple API endpoint
app.get("/api/greeting", (req, res) => {
  res.json({
    message: "Hello from the Node.js API!"
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});