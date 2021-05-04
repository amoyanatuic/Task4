//Display the first name, last name, salary, and job grade for all employees.

const pool = require('./db');

pool.query(`SELECT e.first_name, e.last_name, e.salary, j.grade_level
            FROM employees e 
            JOIN job_grades j
            ON e.salary BETWEEN j.lowest_sal AND j.highest_sal;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();