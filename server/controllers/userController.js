const mysql = require("mysql2");

// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    //host : process.env.DB_HOST,
    user: "root",
    password: "Password1",
    database: "user_management_db"
});


// View Users
exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connect
        console.log("connected as ID " + connection.threadId);

        connection.query('SELECT * FROM Users WHERE status = "active"', (err, rows) => {
            //when done with the connection, release it
            connection.release();
            if(!err) {
                res.render("home", { rows });
            } else {
                res.send(err)
            }

            console.log("User table data: \n", rows)
        })
    })
};

exports.find = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connect
        console.log("connected as ID " + connection.threadId);

        let searchTerm = req.body.search //search comes from the name of the <form> in main.hbs

        connection.query('SELECT * FROM Users WHERE first_name LIKE ? OR last_name LIKE ?', ["%" + searchTerm + "%", "%" + searchTerm + "%"], (err, rows) => {
            //when done with the connection, release it
            connection.release();
            if(!err) {
                res.render("home", { rows });
            } else {
                res.send(err)
            }

            console.log("User table data: \n", rows)
        })
    })
}