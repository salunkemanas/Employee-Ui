const express = require('express');

const router = express.Router();
const zod = require("zod");
const { Admin, Employee } = require("./db");
const  adminMiddleware  = require("./middleware");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
  });


router.post("/admin/signin", async (req,res)=>{
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).send('Admin not found');
        }
        if (admin.password !== password) {
            return res.status(401).send('Invalid credentials'); // Generic error message
        }
        const token = jwt.sign({username}, JWT_SECRET);
        res.send({message:'Admin signed in successfully', 
                  token:token, 
                  username: username});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

router.post('/admin/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        let existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).send('Admin already exists');
        }

        const admin = await Admin.create({
            username: username,
            password: password
        })

        res.status(201).send('Admin registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error during admin registration');
    }
});

router.get('/employees', adminMiddleware, async (req, res) =>{
    const employees = await Employee.find({})
    res.json({
        employees: employees
    })
})

router.post('/employees', adminMiddleware, async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, course } = req.body;
        const newEmployee = await Employee.create({
            
            name,
            email,
            mobile,
            designation,
            gender,
            course
        });
        res.status(201).send('Employee created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

router.put('/employees', adminMiddleware,async (req, res) => {
    try {
        const { id, name, email, mobile, designation, gender, course } = req.body;
        const updateResult = await Employee.updateOne({ _id: id }, {
            $set: {
                name: name,
                mobile: mobile,
                designation: designation,
                gender: gender,
                course: course,
                email: email,
            }
        },)
        res.status(201).send('Employee edited successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

router.delete('/employees', adminMiddleware,async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email must be provided to delete an employee.');
    }

    try {
        const result = await Employee.deleteOne({ email: email });

        if (result.deletedCount === 0) {
            return res.status(404).send('No employee found with the provided email.');
        }

        res.status(200).send('Employee deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error during employee deletion');
    }
});

module.exports = router;