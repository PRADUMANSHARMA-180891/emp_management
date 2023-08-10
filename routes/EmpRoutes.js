const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/empController');

router.get('/get', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
router.put('/updateEmp/:id', employeeController.updateEmployee);
router.delete('/deleteEmp/:id', employeeController.deleteEmployee);

module.exports = router;
