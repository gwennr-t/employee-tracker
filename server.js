const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'insert password here',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

function userPrompt() {
  inquirer
  .prompt([
    {
      type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
    }
  ])
  .then(function(result) {
    console.log("Your choice:" = result.choices);

    switch(result.choices) {
      case "View All Employees":
        viewEmployees();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update Employee Role":
        updateEmployee();
        break;
      case "View all Roles":
        viewRoles();
        break;
      case "Add Role":
        addRole();
        break;
      case "View all Departments":
        viewDepartments();
        break;
      case "Add Department":
        addDepartment();
        break;
      default:
        quit();
    }
  });
}

function viewEmployees() {
  
}

function addEmployee() {
  
}

function updateEmployee() {
  
}

function viewRoles() {
  
}

function addRole() {
  
}

function viewDepartments() {
  
}

function addDepartment() {
  
}

function quit() {
  
}

app.use((req, res) => {
  res.status(404).end();
});
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
