USE employee_db;
INSERT INTO department(dept_name) VALUES('accounting'), ('sales'), ('hr');
INSERT INTO role(title, salary, dept_id) VALUES('accountant', 50000, 1), ('sales person', 34000, 2), ('manager', 60000, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('John', 'Bond', 3, null), ('Sally', 'Jones', 1, 1), ('Sue', 'Johnston', 2, 1);