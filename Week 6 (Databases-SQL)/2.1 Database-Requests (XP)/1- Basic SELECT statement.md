1. Write a query to display the names (first_name, last_name) using an alias name “First Name", "Last Name" from employee table.

SELECT first_name "First Name",  last_name "Last Name" 
	FROM employees;

2. Write a query to get a unique department ID from employee table.

SELECT DISTINCT department_id 
	FROM employees;

3. Write a query to get the details of all employees from the employee table in descending order by their first name.

SELECT * 
	FROM employees 
	ORDER BY first_name DESC;

4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF for all the employees.

SELECT first_name, last_name, salary, salary*.15 PF 
	FROM employees;

5. Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary.

SELECT employee_id, first_name, last_name, salary 
    FROM employees 
    ORDER BY salary;

6. Write a query to get the total salaries payable to employees.

SELECT SUM(salary) 
     FROM employees;

7. Write a query to get the maximum and minimum salary paid to the employees.

SELECT MAX(salary), MIN(salary) 
     FROM employees;

8. Write a query to get the average salary and number of employees are working.

SELECT AVG(salary), COUNT(*) 
     FROM employees;

9. Write a query to get the number of employees working with the company.

SELECT COUNT(*) 
    FROM employees;

10. Write a query to get the unique number of designations available in the employees table.

SELECT COUNT(DISTINCT job_id) 
    FROM employees;

11. Write a query to get all the first name from the employees table in upper case.

SELECT UPPER(first_name) 
   FROM employees;

12. Write a query to get the first three characters of the first name for all the employees in the employees table.

SELECT SUBSTRING(first_name,1,3) // From character 1 on 3 characters 
     FROM employees;

13. Write a query to calculate the expression 171*214+625.

SELECT 171*214+625 Result;

14. Write a query to get the name, including first name and last name of all the employees from employees table.

SELECT  CONCAT(first_name,' ', last_name) 'Employee Name' 
     FROM employees;

15. Write a query to get the first names after removing all the leading and trailing blanks of all the employees from employees table.

SELECT TRIM(first_name) 
    FROM employees;

16. Write a query to get the first name, last name and the length of the name, including first_name and last_name of all the employees from employees table.

SELECT first_name,last_name, LENGTH(first_name)+LENGTH(last_name)  "Length of  Names" 
    FROM employees;

17. Write a query to check whether the first_name column of the employees table containing any number.

SELECT * 
   FROM employees 
   WHERE  first_name REGEXP '[0-9]'; // REGEXP = wether string match 

   //*or

   select
	first_name
from
	employees
where
	first_name ~* '0123456789' // idem


18. Write a query to select first ten records from a table employees.

SELECT employee_id, first_name 
    FROM employees  LIMIT 10;

19. Write a query to get a monthly salary (rounded up to 2 decimal places) of each employee.
Note : Assume the salary field provides the 'annual salary' information.

SELECT first_name, last_name, round(salary/12,2) as 'Monthly Salary' 
   FROM employees;
