1.  Write a query to find the addresses (location\_id, street\_address,
    city, state\_province, country\_name) of all the departments. Hint :
    Use NATURAL JOIN.

SELECT location\_id, street\_address, city, state\_province,
country\_name FROM locations NATURAL JOIN countries; // Natural :
englobe

2.  Write a query to make a join with employees and departments table to
    find the name of the employee, including first\_name and last name,
    department ID and name of departments.

SELECT first\_name, last\_name, department\_id, department\_name FROM
employees JOIN departments USING (department\_id);

3.  Write a SQL query to make a join with three tables employees,
    departments and locations to find the name, including first\_name
    and last\_name, jobs, department name and ID, of the employees
    working in London.

SELECT e.first\_name, e.last\_name, e.job\_id, e.department\_id,
d.department\_name FROM employees e JOIN departments d ON
(e.department\_id = d.department\_id) // lien employees (e) avec
departments (d) JOIN locations l ON // ON Clause can be used to join
columns that have different names (d.location\_id = l.location\_id) //
lien departments (d) avec locations (l) WHERE LOWER(l.city) = 'London';

4.  Write a query to make a join with two tables employees and itself to
    find the employee id, last\_name as Employee along with their
    manager\_id and last name as Manager.

SELECT e.employee\_id 'Emp\_Id', e.last\_name 'Employee', m.employee\_id
'Mgr\_Id', m.last\_name 'Manager' FROM employees e join employees m ON
(e.manager\_id = m.employee\_id);

5.  Write a query to make a join with a table employees and itself to
    find the name, including first\_name and last\_name and hire date
    for those employees who were hired after the employee Jones.

SELECT e.first\_name, e.last\_name, e.hire\_date FROM employees e JOIN
employees jones ON (jones.last\_name = 'Jones') WHERE jones.hire\_date
\< e.hire\_date;

6.  Write a query to make a join with two tables employees and
    departments to get the department name and number of employees
    working in each department.

SELECT department\_name AS 'Department Name', COUNT(\*) AS 'No of
Employees' FROM departments INNER JOIN employees // INNER JOIN selects
records that have matching values in both tables ON
employees.department\_id = departments.department\_id GROUP BY
departments.department\_id, department\_name ORDER BY department\_name;

7.  Write a query to make a join to find the employee ID, job title and
    number of days an employee worked, for all the employees who worked
    in a department which ID is 90.

SELECT employee\_id, job\_title, end\_date-start\_date Days FROM
job\_history NATURAL JOIN jobs WHERE department\_id=90;

8.  Write a query to make a join with two tables employees and
    departments to display the department ID, department name and the
    first name of the manager. // make a join with n =\> n lettres
    différentes dans le SELECT + From n0 Join n1, n2...n

SELECT d.department\_id, d.department\_name, d.manager\_id,
e.first\_name FROM departments d INNER JOIN employees e ON
(d.manager\_id = e.employee\_id);

9.  Write a query to make a join with three tables departments,
    employees, and locations to display the department name, manager
    name, and city.

SELECT d.department\_name, e.first\_name, l.city FROM departments d JOIN
employees e ON (d.manager\_id = e.employee\_id) JOIN locations l USING
(location\_id);

10. Write a query to make a join with two tables employees and jobs to
    display the job title and average salary of employees.

SELECT job\_title, AVG(salary) FROM employees NATURAL JOIN jobs GROUP BY
job\_title;

11. Write a query to make a join with two tables employees and jobs to
    display the job title, employee name, and the difference between
    salary and the minimum salary of the employees.

SELECT job\_title, first\_name, salary-min\_salary 'Salary -
Min\_Salary' FROM employees NATURAL JOIN jobs;

12. Write a query to make a join with two tables job\_history and
    employees to display the status of employees who is currently
    drawing the salary above 10000.

SELECT jh.\* FROM job\_history jh JOIN employees e ON (jh.employee\_id =
e.employee\_id) WHERE salary \> 10000;

13. Write a query to make a join with two tables employees and
    departments to display department name, first\_name and last\_name,
    hire date and salary for all the managers who achieved a working
    experience is more than 15 years.

SELECT first\_name, last\_name, hire\_date, salary, (DATEDIFF(now(),
hire\_date))/365 Experience // DATEDIFF : Return the difference between
two date values, in years FROM departments d JOIN employees e ON
(d.manager\_id = e.employee\_id) // tjrs lettre déclarée en première qui
se retrouve en premier dans le ON WHERE (DATEDIFF(now(),
hire\_date))/365\>15;
