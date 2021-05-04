//Display the first name of all employees and the first name of their manager 
//including those who do not work under any manager.

const pool = require('./db');

pool.query(`SELECT E.first_name AS "Employee Name",
            M.first_name AS "Manager"
            FROM employees E 
            LEFT OUTER JOIN employees M
            ON E.manager_id = M.employee_id;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();