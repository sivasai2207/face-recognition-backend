const Students = require('../models/Students')

//Get All StudentDetails
exports.getStudents = async (req, reply) => {
    try {
        const student = await Students.find()
        return student
    } catch (error) {
        throw error
    }
    
}

// Get a Single Student Details

exports.getSingleStudent = async (req, reply) => {
    try {
        const studentId = req.params.id
        const student = await Students.findById(studentId)
        return student
    } catch (error) {
        throw error
    }
}

//Add new student details

exports.addStudent = async (req, reply) => {
    try {
        const student = new Students(req.body)
        return student.save()
    } catch (error) {
        throw error
    }
}

// Update an existing studentDetails

exports.updateStudent = async (req, reply) => {
    try {
        const studentId = req.params.id
        const student = req.body
        const { ...updateStudent } = student
        const update = await Students.findByIdAndUpdate(studentId, updateStudent, { new: true })
        return update
    } catch (error) {
        throw error
    }
}

//Delete an existing student details

exports.deleteStudent = async (req, reply) => {
    try {
        const studentId = req.params.id
        const student = Students.findByIdAndDelete(studentId)
        return student
    } catch (error) {
        throw error
    }
}