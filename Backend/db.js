const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://123cactusjuice:YVwRE8Fcd3Iiutjd@cluster0.gfnwyso.mongodb.net/Assignment")
// Create a Schema for Users
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    }
});

const employeeSchema = new mongoose.Schema({
    
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    mobile: { 
        type: String, 
        required: true 
    },
    designation: { 
        type: String, 
        required: true 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    course: { 
        type: [String], 
        required: true 
    },
    createDate: { 
        type: Date, 
        default: Date.now
    }
});

const Admin = mongoose.model('Admin', adminSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
	Admin,
    Employee
};