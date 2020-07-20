const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  title: { type: String, required: true},
  department: { type: Date, default: Date.now },
  image: { type: String, required: true}
});

const Post = mongoose.model("employee", employeeSchema);

module.exports = Employee;
