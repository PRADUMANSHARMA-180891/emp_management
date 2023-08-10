

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const employeeRoutes = require('./routes/EmpRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

const dbConnect =require('./config/DbConnection')


dbConnect()

app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
