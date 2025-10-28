{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const mongoose = require('mongoose');\
const cors = require('cors');\
const InsuranceCase = require('./models/InsuranceCase');\
require('dotenv').config();\
\
const app = express();\
app.use(cors());\
app.use(express.json());\
\
mongoose.connect(process.env.MONGO_URL);\
\
// Add a new insurance case\
app.post('/api/cases', async (req, res) => \{\
  const newCase = new InsuranceCase(req.body);\
  await newCase.save();\
  res.json(newCase);\
\});\
\
// Get all insurance cases\
app.get('/api/cases', async (req, res) => \{\
  const cases = await InsuranceCase.find(\{\});\
  res.json(cases);\
\});\
\
app.listen(5000, () => console.log("API server started on port 5000"));\
}