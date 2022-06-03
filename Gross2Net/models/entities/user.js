const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    code: String,
    firstName: String,
    lastName: String,
    age: Number,
    grossSalary: Number,
    netSalary: Number
});

const User = mongoose.model("User", userSchema);
module.exports = User;
    