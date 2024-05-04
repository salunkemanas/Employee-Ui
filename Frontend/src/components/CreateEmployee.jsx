import React, { useState } from 'react'
import axios from 'axios'

const CreateEmployee = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [designation, setDesignation] = useState('')
    const [gender, setGender] = useState('')
    const [course, setCourse] = useState('')

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            // Add the value to the array
            setCourse([...course, value]);
            
        } else {
            // Remove the value from the array
            setCourse(course.filter(course => course !== value));
        }
        
    };
    async function handleCreateEmployee(){
        try {
            const res = await axios.post("http://localhost:3000/employees", {name,email,mobile, designation, gender, course})
            console.log(res)
            alert(res.data)
            // console.log(designation)
            // console.log(name)
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <>

    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    /><br/>
    <label htmlFor="email">Email:</label>
    <input
    type="text"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    /><br/>
    <label htmlFor="mobile">Mobile No:</label>
    <input
    type="text"
    id="mobile"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    required
    /><br/>
    <label htmlFor="designation">Designation:</label>
    <select
        id="designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        required
    >
        <option value="">Select a designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
    </select><br />
    {/* <label htmlFor="gender">Gender:</label>
    <input
    type="text"
    id="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    required
    /><br/> */}
    <label htmlFor="gender">Gender:</label><br />
            <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label><br />

            <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label><br />
    <label htmlFor="course">Course:</label><br/>
            <input
                type="checkbox"
                id="course-item1"
                value="MCA"
                checked={course.includes('MCA')}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="course-item1">MCA</label><br/>

            <input
                type="checkbox"
                id="course-item2"
                value="BCA"
                checked={course.includes('BCA')}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="course-item2">BCA</label><br/>

            <input
                type="checkbox"
                id="course-item3"
                value="BSC"
                checked={course.includes('BSC')}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="course-item3">BSC</label><br/>
    <button onClick={handleCreateEmployee}>Submit</button>
    <br />
    </>

  )
}

export default CreateEmployee