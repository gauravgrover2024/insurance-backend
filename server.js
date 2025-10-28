const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const InsuranceCase = require('./models/InsuranceCase');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

// Add a new insurance case
app.post('/api/cases', async (req, res) => {
  const newCase = new InsuranceCase(req.body);
  await newCase.save();
  res.json(newCase);
});

// Get all insurance cases
app.get('/api/cases', async (req, res) => {
  const cases = await InsuranceCase.find({});
  res.json(cases);
});

app.listen(5000, () => console.log("API server started on port 5000"));
