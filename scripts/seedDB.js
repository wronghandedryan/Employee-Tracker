const mongoose = require("mongoose");
const db = require("../models");
const data = require("../db/employee.schema.json")

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeePortal");

const employeeSeedSchema = [
  {
    "id": 249076,
    "num_rows": 1000,
    "file_format": "json",
    "name": "employee",
    "array": true,
    "columns": [
      {
        "name": "id",
        "null_percentage": 0,
        "type": "EIN",
        "formula": ""
      },
      {
        "name": "first_name",
        "null_percentage": 0,
        "type": "First Name",
        "formula": ""
      },
      {
        "name": "last_name",
        "null_percentage": 0,
        "type": "Last Name",
        "formula": ""
      },
      {
        "name": "title",
        "null_percentage": 0,
        "type": "Job Title",
        "formula": ""
      },
      {
        "name": "department",
        "null_percentage": 0,
        "type": "Department (Corporate)",
        "formula": ""
      },
      {
        "name": "image",
        "null_percentage": 0,
        "type": "Avatar",
        "height": 50,
        "width": 50,
        "formula": ""
      }
    ]
  }
];

db(employeeSeedSchema).employee.remove({})
   db.then(() => db.employee.collection.insertMany(employeeSeedSchema)); 
   db.then(() => db.use('../db/employee.schema.json'));
   db.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
