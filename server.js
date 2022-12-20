// server setup
const express = require('express');
const app = express();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { response } = require('express');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// connects server to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected')
});

// CLI interface
function mainMenu(){
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: [
            'view departments',
            'view roles',
            'view employees',
            'add department'
        ]
    }).then(({task})=> {
        if (task === 'view departments') {
            viewDepartment()
        } else if (task === 'view roles') {
            viewRoles()
        } else if (task === 'view employees') {
            viewEmployees()
        } else if (task === 'add department') {
            addDepartment()
        }
    })
};

function viewDepartment () {
    db.promise().query('SELECT * FROM department').then(([response]) => {
        console.table(response)
    });
    mainMenu();
};

function viewRoles () {
    db.promise().query('SELECT * FROM role').then(([response]) => {
        console.table(response)
    });
    mainMenu();
};

function viewEmployees () {
    db.promise().query('SELECT * FROM employee').then(([response]) => {
        console.table(response)
    });
    mainMenu();
};

function addDepartment () {
    db.promise().query('INSERT INTO department(id,dept_name) VALUES(?,?)').then(([response]) => {
        console.table(response)
    });
    mainMenu();
};

mainMenu();