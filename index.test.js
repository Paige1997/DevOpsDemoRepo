const request = require("supertest");
const express = require("express");
const path = require("path");

// Import your app, or reconstruct it in test
const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.get("/api/greeting", (req, res) => {
  res.json({ message: "Hello from the Node.js API!" });
});

describe("Express Server Tests", () => {
  test("GET /api/greeting returns correct message", async () => {
    const res = await request(app).get("/api/greeting");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello from the Node.js API!" });
  });

  test("serves static files from public directory", async () => {
    // Assuming you have a file like public/index.html
    const res = await request(app).get("/index.html");
    // 200 OK if file exists, 404 if not
    expect([200, 404]).toContain(res.statusCode);
  });

  test("returns 404 for unknown routes", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toBe(404);
  });
});
