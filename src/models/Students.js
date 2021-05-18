const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    regNo: Number,
    studentName: String,
    section: String,
    gender: String,
    city: String,
    district: String,
    state: String,
    address: String,
    mobileNo: Number,
    emailAddress: String,
    residentialStatus: String,
})

module.exports = mongoose.model('Students', studentsSchema);