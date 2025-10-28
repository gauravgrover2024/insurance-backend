{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const mongoose = require('mongoose');\
const InsuranceCaseSchema = new mongoose.Schema(\{\
  buyerType: String,\
  name: String,\
  mobile: String,\
  email: String,\
  insuranceCategory: String,\
  assignedTo: String,\
  vehicle: \{\
    city: String,\
    registrationNo: String,\
    makeMonthYear: String,\
    make: String,\
    model: String,\
    variant: String,\
    engineNo: String,\
    chassisNo: String,\
    registrationMonthYear: String\
  \},\
  quotes: [\{\
    zone: String,\
    company: String,\
    odDiscount: Number,\
    idv: Number,\
    zeroDepAmount: Number,\
    premium: Number\
  \}],\
  docs: [\{ url: String, type: String, uploadedOn: Date \}],\
  payment: \{\
    amount: Number,\
    mode: String,\
    date: Date,\
    receiptNumber: String,\
    bank: String\
  \},\
  status: \{ type: String, default: "New" \}\
\}, \{ timestamps: true \});\
module.exports = mongoose.model('InsuranceCase', InsuranceCaseSchema);\
}