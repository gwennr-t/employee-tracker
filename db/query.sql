SELECT department.name AS department, role.department_id
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.name;

SELECT role.title AS role, employee.first_name.last_name
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
ORDER BY role.title;
