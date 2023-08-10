const Employee = require('../models/employee');
const Log = require('../models/log');

exports.getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find({ isDeleted: false });
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input data' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    const logEntry = new Log({
      action: 'Update',
      employeeId: req.params.id,
    });
    await logEntry.save();

    res.json(employee);
  } catch (error) {
    res.status(404).json({ error: 'Employee not found' });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, { isDeleted: true }, {
      new: true,
    });

    const logEntry = new Log({
      action: 'Delete',
      employeeId: req.params.id,
    });
    await logEntry.save();

    res.json(employee);
  } catch (error) {
    res.status(404).json({ error: 'Employee not found' });
  }
};
