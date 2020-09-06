1.  Write a query to find the first\_name, last\_name and salaries of
    the employees who have a higher salary than the employee whose
    last\_name is Bell.

SELECT FIRST\_NAME, LAST\_NAME, SALARY FROM employees WHERE SALARY \>
(SELECT salary FROM employees WHERE last\_name = 'Bell');

2.  Write a SQL subquery to find the first\_name and last\_name of all
    employees who works in the IT department.

SELECT first\_name, last\_name FROM employees WHERE department\_id IN
(SELECT department\_id FROM departments WHERE department\_name='IT');

3.  Write a SQL subquery to find the first\_name and last\_name of the
    employees under a manager who works for a department based in the
    United States. // manager =\> employee =\> department =\> US ; Where
    =\> bloc suivant

Hint : Write single-row and multiple-row subqueries

SELECT first\_name, last\_name FROM employees WHERE manager\_id in
(select employee\_id FROM employees WHERE department\_id IN (SELECT
department\_id FROM departments WHERE location\_id IN (select
location\_id from locations where country\_id='US')));

4.  Write a SQL subquery to find the first\_name and last\_name of the
    employees who are working as a manager.

SELECT first\_name, last\_name FROM employees WHERE (employee\_id IN
(SELECT manager\_id FROM employees));

5.  Write a SQL subquery to find the first\_name, last\_name and salary,
    which is greater than the average salary of the employees.

SELECT first\_name, last\_name, salary FROM employees WHERE salary \>
(SELECT AVG(salary) FROM employees);

6.  Write a SQL subquery to find the first\_name, last\_name and salary,
    which is equal to the minimum salary for this post, he/she is
    working on.

SELECT first\_name, last\_name, salary FROM employees WHERE
employees.salary = (SELECT min\_salary FROM jobs WHERE employees.job\_id
= jobs.job\_id);

7.  Write a SQL Subquery to find the first\_name, last\_name and salary
    of the employees who earn more than the average salary and works in
    any of the IT departments.

SELECT first\_name, last\_name, salary FROM employees WHERE
department\_id IN (SELECT department\_id FROM departments WHERE
department\_name LIKE 'IT%') AND salary \> (SELECT avg(salary) FROM
employees);

8.  Write a SQL subquery to find the first\_name, last\_name and salary
    of the employees who draw a more salary than the employee, which the
    last name is Bell.

SELECT first\_name, last\_name, salary FROM employees WHERE salary \>
(SELECT salary FROM employees WHERE last\_name = 'Bell') ORDER BY
first\_name;

9.  Write a SQL subquery to find all the information of the employees
    who draws the same salary as the minimum salary for all departments.

SELECT \* FROM employees WHERE salary =\> ALL(SELECT MIN(salary) FROM
employees);

10. Write a SQL subquery to find all the information of the employees
    whose salary greater than the average salary of all departments.

SELECT \* FROM employees WHERE salary \> ALL(SELECT avg(salary)FROM
employees GROUP BY department\_id);

11. Write a subquery to find the first\_name, last\_name, job\_id and
    salary of the employees who draws a salary that is higher than the
    salary of all the Shipping Clerk (JOB\_ID = 'SH\_CLERK'). Sort the
    results on salary from the lowest to highest.

SELECT first\_name,last\_name, job\_id, salary FROM employees WHERE
salary \> ALL (SELECT salary FROM employees WHERE job\_id = 'SH\_CLERK')
ORDER BY salary;

12. Write a query to find the names (first\_name, last\_name) of the
    employees who are not managers.

SELECT b.first\_name,b.last\_name // lettres pour interagir entre plsrs
tables FROM employees b WHERE NOT EXISTS (SELECT 'X' FROM employees a
WHERE a.manager\_id = b.employee\_id);

13. Write a SQL subquery to find the employee ID, first name, last name
    and department names of all employees.

SELECT employee\_id, first\_name, last\_name, (SELECT department\_name
FROM departments d WHERE e.department\_id = d.department\_id) department
FROM employees e ORDER BY department;

14. Write a SQL subquery to find the employee ID, first name, last name
    and salary of all employees whose salary is above the average salary
    for their departments.

SELECT employee\_id, first\_name, last\_name, salary FROM employees AS A
// AS : Rename column or table with Alias (exist only during query)
WHERE salary \> (SELECT AVG(salary) FROM employees WHERE department\_id
= A.department\_id);

15. Write a subquery to find the 5th maximum salary of all salaries.

SELECT DISTINCT salary FROM employees e1 // 5 (Top) WHERE 5 = (SELECT
COUNT(DISTINCT salary) FROM employees e2 // 1, 2, 3, 4 (Top) WHERE
e2.salary \>= e1.salary);

15. Write a query to fetch even numbered records from employees table.

SET @i = 0; // SET = déclarer ; @ = variable SELECT i, employee\_id FROM
(SELECT @i := @i + 1 AS i, employee\_id FROM employees) // := assignment
a WHERE MOD(a.i, 2) = 0;

16. Write a subquery to find the 4th minimum salary of all the salaries.

SELECT DISTINCT salary FROM employees e1 // 4 (Bottom) WHERE 4 = (SELECT
COUNT(DISTINCT salary) FROM employees e2 // 1, 2, 3 (Bottom) WHERE
e2.salary \<= e1.salary);

17. Write a subquery to select last 10 records from a table.

SELECT \* FROM ( SELECT \* FROM employees ORDER BY employee\_id DESC
LIMIT 10) sub ORDER BY employee\_id ASC;

18. Write a query to list department number, the name for all the
    departments in which there are no employees in the department.

SELECT \* FROM departments WHERE department\_id NOT IN (select
department\_id FROM employees);

19. Write a query to get three maximum salaries.

select salary from employee order by salary desc limit 3

20. Write a query to get three minimum salaries.

SELECT DISTINCT salary FROM employees a WHERE 3 \>= (SELECT
COUNT(DISTINCT salary) FROM employees b WHERE b.salary \<= a.salary)
ORDER BY a.salary DESC;

21. Write a query to get nth max salaries of employees.

SELECT \* FROM employees emp1 WHERE (1) = ( // 1 means 'always true' (so
no filtering) SELECT COUNT(DISTINCT(emp2.salary)) // Distinct =\> test
un à un (compare avec emp1) FROM employees emp2 WHERE emp2.salary \>
emp1.salary);
