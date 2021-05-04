//Display the first name, last name, department number, and department name, for all employees for departments 80 or 40.

const pool = require('./db');

pool.query(`SELECT e.first_name , e.last_name , 
            e.department_id ,  d.department_name 
            FROM employees e 
            JOIN departments d 
            ON e.department_id = d.department_id 
            AND e.department_id IN (80 , 40)
            ORDER BY e.last_name;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();