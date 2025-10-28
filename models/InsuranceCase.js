const mongoose = require('mongoose');

const InsuranceCaseSchema = new mongoose.Schema({
  buyerType: String,
  name: String,
  mobile: String,
  email: String,
  insuranceCategory: String,
  assignedTo: String,
  vehicle: {
    city: String,
    registrationNo: String,
    makeMonthYear: String,
    make: String,
    model: String,
    variant: String,
    engineNo: String,
    chassisNo: String,
    registrationMonthYear: String
  },
  quotes: [{
    zone: String,
    company: String,
    odDiscount: Number,
    idv: Number,
    zeroDepAmount: Number,
    premium: Number
  }],
  docs: [{ url: String, type: String, uploadedOn: Date }],
  payment: {
    amount: Number,
    mode: String,
    date: Date,
    receiptNumber: String,
    bank: String
  },
  status: { type: String, default: "New" }
}, { timestamps: true });

module.exports = mongoose.model('InsuranceCase', InsuranceCaseSchema);
