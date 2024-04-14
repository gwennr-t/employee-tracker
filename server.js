const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // Add MySQL password here
        password: 'insert password here',
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

// read all departments
app.get('/api/department', (req, res) => {
  const sql = `SELECT name AS title FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// read all roles
app.get('/api/role', (req, res) => {
  const sql = `SELECT title, salary, department_id AS title FROM role`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// read all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT first_name, last_name, role_id, manager_id AS title FROM employee`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// create a department
app.post('/api/new-department', ({ body }, res) => {
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = [body.name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Success!',
      data: body
    });
  });
});

// create a role
app.post('/api/new-role', ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?)`;
  const params = [body.title.salary.department_id.manager_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Success!',
      data: body
    });
  });
});

// create an employee
app.post('/api/new-employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?)`;
  const params = [body.first_name.last_name.role_id.manager_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Success!',
      data: body
    });
  });
});

// update an employee role
app.put('api/employee/:id', (req, res) => {
  const sql = `UPDATE employee SET employee = ? WHERE id = ?`;
  const params = [req.body.employee, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({error:err.message});
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'Success!',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

app.use((req, res) => {
  res.status(404).end();
});
  
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});