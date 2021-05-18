const studentsController = require('../controllers/studentsController')


const routes = [
  {
    method: 'GET',
    url: '/api/students',
    handler: studentsController.getStudents,
  },
  {
    method: 'GET',
    url: '/api/students/:id',
    handler: studentsController.getSingleStudent,
  },
  {
    method: 'POST',
    url: '/api/students',
    handler: studentsController.addStudent,
  },
  {
    method: 'PUT',
    url: '/api/students/:id',
    handler: studentsController.updateStudent,
  },
  {
    method: 'DELETE',
    url: '/api/students/:id',
    handler: studentsController.deleteStudent,
  },
];

module.exports = routes