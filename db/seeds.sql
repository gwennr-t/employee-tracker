INSERT INTO department (name),
VALUES ('Engineering'), 
       ('Finance'), 
       ('Legal'), 
       ('Sales');


INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 4), 
       ('Lead Engineer', 150000, 1), 
       ('Account Manager', 160000, 2), 
       ('Legal Team Lead', 250000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 4), 
       ('Jane', 'Doe', 2, 1), 
       ('Jacob', 'Dean', 3, 2), 
       ('Janet', 'Dear', 4, 3);