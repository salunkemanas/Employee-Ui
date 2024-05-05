import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [designation, setDesignation] = useState('')
    const [gender, setGender] = useState('')
    const [course, setCourse] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

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
    async function handleEditEmployee(){
        try {
            const res = await axios.put("http://localhost:3000/employees", {id, name,email,mobile, designation, gender, course},{headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }})
            console.log(res)
            alert(res.data)
            navigate("/employees")
           
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    // <>

    // <label htmlFor="name">Name:</label>
    // <input
    //   type="text"
    //   id="name"
    //   value={name}
    //   onChange={(e) => setName(e.target.value)}
    //   required
    // /><br/>
    // <label htmlFor="email">Email:</label>
    // <input
    // type="text"
    // id="email"
    // value={email}
    // onChange={(e) => setEmail(e.target.value)}
    // required
    // /><br/>
    // <label htmlFor="mobile">Mobile No:</label>
    // <input
    // type="text"
    // id="mobile"
    // value={mobile}
    // onChange={(e) => setMobile(e.target.value)}
    // required
    // /><br/>
    // <label htmlFor="designation">Designation:</label>
    // <select
    //     id="designation"
    //     value={designation}
    //     onChange={(e) => setDesignation(e.target.value)}
    //     required
    // >
    //     <option value="">Select a designation</option>
    //     <option value="HR">HR</option>
    //     <option value="Manager">Manager</option>
    //     <option value="Sales">Sales</option>
    // </select><br />
    // {/* <label htmlFor="gender">Gender:</label>
    // <input
    // type="text"
    // id="gender"
    // value={gender}
    // onChange={(e) => setGender(e.target.value)}
    // required
    // /><br/> */}
    // <label htmlFor="gender">Gender:</label><br />
    //         <input
    //             type="radio"
    //             id="male"
    //             name="gender"
    //             value="Male"
    //             checked={gender === 'Male'}
    //             onChange={(e) => setGender(e.target.value)}
    //         />
    //         <label htmlFor="male">Male</label><br />

    //         <input
    //             type="radio"
    //             id="female"
    //             name="gender"
    //             value="Female"
    //             checked={gender === 'Female'}
    //             onChange={(e) => setGender(e.target.value)}
    //         />
    //         <label htmlFor="female">Female</label><br />
    // <label htmlFor="course">Course:</label><br/>
    //         <input
    //             type="checkbox"
    //             id="course-item1"
    //             value="MCA"
    //             checked={course.includes('MCA')}
    //             onChange={handleCheckboxChange}
    //         />
    //         <label htmlFor="course-item1">MCA</label><br/>

    //         <input
    //             type="checkbox"
    //             id="course-item2"
    //             value="BCA"
    //             checked={course.includes('BCA')}
    //             onChange={handleCheckboxChange}
    //         />
    //         <label htmlFor="course-item2">BCA</label><br/>

    //         <input
    //             type="checkbox"
    //             id="course-item3"
    //             value="BSC"
    //             checked={course.includes('BSC')}
    //             onChange={handleCheckboxChange}
    //         />
    //         <label htmlFor="course-item3">BSC</label><br/>
    // <button onClick={handleEditEmployee}>Submit</button>
    // <br />
    // </>
    <>
  <div className="max-w-md mx-auto mt-10">
    <div className="mb-6">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile No:</label>
      <input
        type="text"
        id="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900">Designation:</label>
      <select
        id="designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Select a designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
    </div>
    <fieldset className="mb-6">
      <legend className="block mb-2 text-sm font-medium text-gray-900">Gender:</legend>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(e) => setGender(e.target.value)}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900">Male</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={(e) => setGender(e.target.value)}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900">Female</label>
      </div>
    </fieldset>
    <fieldset className="mb-6">
      <legend className="block mb-2 text-sm font-medium text-gray-900">Course:</legend>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="course-item1"
          value="MCA"
          checked={course.includes('MCA')}
          onChange={handleCheckboxChange}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label htmlFor="course-item1" className="ml-2 text-sm font-medium text-gray-900">MCA</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="course-item2"
          value="BCA"
          checked={course.includes('BCA')}
          onChange={handleCheckboxChange}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label htmlFor="course-item2" className="ml-2 text-sm font-medium text-gray-900">BCA</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="course-item3"
          value="BSC"
          checked={course.includes('BSC')}
          onChange={handleCheckboxChange}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        />
        <label htmlFor="course-item3" className="ml-2 text-sm font-medium text-gray-900">BSC</label>
      </div>
    </fieldset>
    <button
      onClick={handleEditEmployee}
      className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </div>
</>


  )
}

export default EditEmployee