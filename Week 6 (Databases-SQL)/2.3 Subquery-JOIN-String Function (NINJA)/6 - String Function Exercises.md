1.  Write a query to get the job\_id and the ID(s) for those employees
    who is working in that post.

SELECT job\_id, GROUP\_CONCAT(employee\_id, ' ') 'Employees ID' FROM
employees GROUP BY job\_id;

2.  Write a query to update the phone\_number column with '999' where
    the substring '124' found in that column.

UPDATE employees SET phone\_number = REPLACE(phone\_number, '124',
'999') WHERE phone\_number LIKE '%124%'; // % string avant ou après

3.  Write a query to find the details of those employees who contain
    eight or more characters in their first name.

SELECT \* FROM employees WHERE LENGTH(first\_name) \>= 8;

4.  Write a query to fill the maximum and minimum salary with leading
    asterisks whether these two columns does not contain a seven digit
    number.

SELECT job\_id, LPAD( max\_salary, 7, '0') ' Max Salary', // fill with
zeros at the beggining while we are under 7 numbers LPAD( min\_salary,
7, '0') ' Min Salary' FROM jobs;

5.  Write a query to join the text '@example.com' with the email column.

Sample Output :

EMAIL --------------------

SKING@example.com

NKOCHHAR@example.com

LDEHAAN@example.com

AHUNOLD@example.com

BERNST@example.com

DAUSTIN@example.com

VPATABAL@example.com

DLORENTZ@example.com

NGREENBE@example.com

* * * * *

* * * * *

UPDATE employees SET email = CONCAT(email, '@example.com');

6.  Write a query to get the employee id, first name and hire month of
    an employee. // MID : Extract substring from a string

SELECT employee\_id, first\_name, MID(hire\_date, 6, 2) as hire\_month
FROM employees; // (start at position 6, extract 2)

7.  Write a query to get the employee id, email id to discard the last
    three characters.

SELECT employee\_id, REVERSE(SUBSTR(REVERSE(email), 3)) as Email\_ID //
Reverse : retourne le string from employees;

8.  Write a query to find all the employees which first name contains
    all the uppercase letter.

SELECT \* FROM employees WHERE first\_name = BINARY UPPER(first\_name);
// binary (if lower =\> upper and if upper =\> lower [0,1]) ; Upper =\>
All Upper

9.  Write a query to extract the last four character of phone numbers.

SELECT RIGHT(phone\_number, 4) as 'Ph.No.' FROM employees; // Right : à
partir de la droite

10. Write a query to get the information about those locations which
    contain the characters in its street address is on and below the
    minimum character length of street\_address.

SELECT location\_id, street\_address,
SUBSTRING\_INDEX(REPLACE(REPLACE(REPLACE(street\_address,',',' '),')','
'),'(',' '),' ',-1) // Rien compris AS 'Last--word-of-street\_address'
FROM locations;

11. Write a query to display the first word in the job title if the job
    title contains more than one words.

SELECT job\_title, SUBSTR(job\_title,1, INSTR(job\_title, ' ')-1) //
INSTR(n1, n2) retourne position de n2 dans n1 (0 si pas) FROM jobs;

12. Write a query to display the first name, last name for the
    employees, which contain a letter 'C' to their last name at 3rd or
    greater position.

SELECT first\_name, last\_name FROM employees WHERE
INSTR(last\_name,'C') \> 3;

13. Write a query that displays the first name and the length of the
    first name for all employees whose name starts with the letters 'A',
    'J' or 'M'. Give each column an appropriate label. Sort the results
    by the employees' first names.

SELECT first\_name "Name", // " " label (nom qui va apparaître dans
output) LENGTH(first\_name) "Length" FROM employees WHERE first\_name
LIKE 'J%' OR first\_name LIKE 'M%' OR first\_name LIKE 'A%' ORDER BY
first\_name ;

14. Write a query to display the first name and salary for all
    employees. Form the salary to be 10 characters long, left-padded
    with the \$ symbol. Label the column as SALARY.

SELECT first\_name, LPAD(salary, 10, '\$') SALARY FROM employees;
