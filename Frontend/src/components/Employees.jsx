import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTable } from 'react-table'

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then(response =>{
            console.log(response.data.employees);
            setEmployees(response.data.employees);
            console.log(employees)
         })
        .catch(err => console.log(err))
    },[])
    // const columns = [
    //     {
    //     Header:"Unique Id",
    //     Accessor:"id"
    //     },
    //     {
    //         Header:"Image",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Name",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Email",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Mobile No",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Designation",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Gender",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Course",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Create Date",
    //         Accessor:"id"
    //     },
    //     {
    //         Header:"Action",
    //         Accessor:"id"
    //     },
    // ]
    // const table = useTable({
    //     columns, data
    // });
  return (
    <div>
            <h1>Employee List</h1>
            <ul>
                {/* Render each employee as a list item */}
                {employees.map((employee, index) => (<>
                    <li key={index}>{employee.name}</li> 
                    <li key={index}>{employee.email}</li>
                    <li key={index}>{employee.mobile}</li>
                    <li key={index}>{employee.designation}</li>
                    <li key={index}>{employee.gender}</li>
                    {/* <li key={index}>{employee.course}</li> */}
                    <li key={index}>{employee.course.join(' ')}</li>

                    <li key={index}>{employee.createDate}</li> 
                    <button>Edit</button>
                    <button>Delete</button>
                    </> 
                ))}
            </ul>
        </div>
  )
}

export default Employees;