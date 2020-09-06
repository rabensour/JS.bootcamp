1. Write a query to find the number of jobs available in the employees table. // Unique or Available = Distinct

SELECT COUNT(DISTINCT job_id) 
FROM employees;


2. Write a query to get the total salaries payable to employees. // get => ds Select

SELECT SUM(salary) 
FROM employees;


3. Write a query to get the minimum salary from employees table.

SELECT MIN(salary) 
FROM employees;


4. Write a query to get the maximum salary of an employee working as a Programmer.

SELECT MAX(salary) 
FROM employees 
WHERE job_id = 'IT_PROG';

//or

SELECT MAX(salary) 
FROM employees 
WHERE job_id = 9;


5. Write a query to get the average salary and number of employees working in the department which ID is 90.

SELECT AVG(salary),count(*) 
FROM employees 
WHERE department_id = 90;


6. Write a query to get the highest, lowest, total, and average salary of all employees.

SELECT ROUND(MAX(salary),0) 'Maximum',
ROUND(MIN(salary),0) 'Minimum',
ROUND(SUM(salary),0) 'Sum',
ROUND(AVG(salary),0) 'Average'
FROM employees;


7. Write a query to get the number of employees with the same job.

SELECT job_id, COUNT(*)
FROM employees
GROUP BY job_id;


8. Write a query to get the difference between the highest and lowest salaries.

SELECT MAX(salary) - MIN(salary) DIFFERENCE
FROM employees;

 
9. Write a query to find the manager ID and the salary of the lowest-paid employee under that manager.

SELECT manager_id, MIN(salary)
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
ORDER BY MIN(salary) DESC;


10. Write a query to get the department ID and the total salary payable in each department.// total = Sum 
SELECT department_id, SUM(salary)
FROM employees 
GROUP BY department_id; // each/all = Group By



11. Write a query to get the average salary for each post excluding programmer. // exclude (<> ou !=)

SELECT job_id, AVG(salary) 
FROM employees 
WHERE job_id <> 'IT_PROG' 
GROUP BY job_id;

//or

SELECT job_id, AVG(salary) 
FROM employees 
WHERE job_id != 'IT_PROG' 
GROUP BY job_id;


12. Write a query to get the total salary, maximum, minimum and average salary of all posts for those departments which ID 90.

SELECT job_id, SUM(salary), AVG(salary), MAX(salary), MIN(salary)
FROM employees 
WHERE department_id = '90' 
GROUP BY job_id;


13. Write a query to get the job ID and maximum salary of each post for maximum salary is at or above $4000.

SELECT job_id, MAX(salary) 
FROM employees 
GROUP BY job_id 
HAVING MAX(salary) >=4000;


14. Write a query to get the average salary for all departments working more than 10 employees.

SELECT department_id, AVG(salary), COUNT(*) 
FROM employees 
GROUP BY department_id
HAVING COUNT(*) > 10; // 'Having' replace 'Where' when we use Aggregate Functions (here : 'count')
