// server setup
const express = require('express');
const app = express();
const mysql = requre('mysql12');
    // I'm not sure if I need to include the '12' or not
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;

// connects server to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Lobsters2maine',
    database: 'employee_db'
});
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected')
});

// middleware for database creation
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE employee_db';
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send('Database created');
    });
});
app.get('/createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send('Employee table created');
    });
});

// middleware to add employee

// middleware to update employee

// middleware to  delete emplpoyee