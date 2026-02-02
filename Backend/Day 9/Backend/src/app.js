const express = require("express");


const app = express();

app.use(express.json());

// app.post("/api/notes", async (req, res) => {});

module.exports = app;
