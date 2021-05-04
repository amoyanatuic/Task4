//Display the name of the department, average salary, and the number of employees 
//working in that department who got a commission.

const pool = require('./db');

pool.query(`SELECT department_name, AVG(salary), COUNT(commission_pct) 
            FROM departments 
            JOIN employees USING (department_id) 
            GROUP BY department_name;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();