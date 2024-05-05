import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTable } from 'react-table'
import { useNavigate } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([]);   //// usestate of len of employees and when it changes trigger useeffect
    
    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then(response =>{
            console.log(response.data.employees);
            setEmployees(response.data.employees);
         })
        .catch(err => console.log(err))
    },[])

    const navigate = useNavigate();

    async function handleDelete(email){
        try {
        const res = await axios.delete("http://localhost:3000/employees", {data: { email: email }})  
            console.log(res)
        } catch (error) {
            console.log(error)
        }        
    }
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
    // <div>
    //         <h1>Employee List</h1>
    //         <ul>
    //             {/* Render each employee as a list item */}
    //             {employees.map((employee, index) => (<>
    //                 <li key={index}>{employee.name}</li> 
    //                 <li key={index}>{employee.email}</li>
    //                 <li key={index}>{employee.mobile}</li>
    //                 <li key={index}>{employee.designation}</li>
    //                 <li key={index}>{employee.gender}</li>
    //                 {/* <li key={index}>{employee.course}</li> */}
    //                 <li key={index}>{employee.course.join(' ')}</li>

    //                 <li key={index}>{employee.createDate}</li> 
    //                 <button onClick={()=>navigate("/editEmployee")}>Edit</button>
    //                 <button onClick={handleDelete}>Delete</button>
    //                 </> 
    //             ))}
    //         </ul>
    //     </div>
    <div>
    <h1>Employee List</h1>
    <ul>
        {employees.map((employee, index) => (
            <React.Fragment key={index}>
                <li key={`name-${index}`}>{employee.name}</li>
                <li key={`email-${index}`}>{employee.email}</li>
                <li key={`mobile-${index}`}>{employee.mobile}</li>
                <li key={`designation-${index}`}>{employee.designation}</li>
                <li key={`gender-${index}`}>{employee.gender}</li>
                <li key={`course-${index}`}>{employee.course.join(' ')}</li>
                <li key={`date-${index}`}>{employee.createDate}</li> 
                <button onClick={() => navigate(`/editEmployee/${employee._id}`)}>Edit</button>
                <button onClick={()=>handleDelete(employee.email)}>Delete</button>
            </React.Fragment>
        ))}
    </ul>
</div>
  )
}

export default Employees;