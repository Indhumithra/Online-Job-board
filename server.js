const express = require("express");
const cors = require("cors");
const jobs = require("./jobs.json");

const app = express();
app.use(cors());

app.get("/jobs", (req, res) => {
  const { q, location, type } = req.query;

  let results = jobs;

  if (q) {
    results = results.filter(j =>
      j.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (location) {
    results = results.filter(j =>
      j.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (type && type !== "All") {
    results = results.filter(j => j.type === type);
  }

  res.json(results);
});

app.listen(5000, () => {
  console.log("API running on http://localhost:5000");
});
