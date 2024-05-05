import React, { useEffect, useMemo, useState, useCallback} from 'react'
import axios from 'axios'
import { useTable, useSortBy } from 'react-table'
import { useNavigate } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([]);   
    useEffect(()=>{
        axios.get("http://localhost:3000/employees",{headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
        .then(response =>{
            console.log(response.data.employees);
            setEmployees(response.data.employees);
            setLenEmployees(employees.length);
         })
        .catch(err => console.log(err))
    },[employees.length])

    const navigate = useNavigate();

    const handleDelete = useCallback(async (email) => {
      try {
          const res = await axios.delete("http://localhost:3000/employees", {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
              data: {
                  email: email
              }
          });
          console.log(res);
          // Update state immediately on successful delete
          setEmployees(currentEmployees => currentEmployees.filter(emp => emp.email !== email));
      } catch (error) {
          console.log(error);
      }
  }, []);
    const columns = useMemo(
      () => [
            {
            Header: "Unique Id",
            accessor: "id",
            Cell: ({ row }) => {
                return <span>{row.index + 1}</span>;
              }
            },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Mobile No",
          accessor: "mobile",
        },
        {
          Header: "Designation",
          accessor: "designation",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Course",
          accessor: "course",
        },
        {
          Header: "Create Date",
          accessor: "createDate",
          Cell: ({row}) => { return <span>{row.values.createDate.slice(0, 10)}</span>;}
        },
        {
          Header: "Actions",
          accessor: "actions",
          Cell: ({ row }) => (
            <div className="flex items-center justify-start space-x-2">
              <button
                onClick={() => navigate(`/editEmployee/${row.original._id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(row.original.email)}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Delete
              </button>
            </div>
          ),
        },
      ],
      []
    );

    const data = useMemo(()=>employees,[employees])

    const {getTableProps, getTableBodyProps, headerGroups,rows, prepareRow, getCellProps,getSortByToggleProps } = useTable({columns, data}, useSortBy);

  return (

<div className="max-w-full mx-auto my-10 shadow-lg rounded-lg overflow-hidden">
    <h1 className="text-2xl font-semibold text-center text-gray-800 bg-gray-100 py-4">Employee List</h1>
    <table {...getTableProps()} className="w-full leading-normal">
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="text-left bg-gray-200">
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-gray-800 text-sm font-semibold uppercase tracking-wider">
                            {column.render("Header")}
                            {column.isSorted && (
                             <span>{column.isSortedDesc ? "🔽" : "🔼"}</span>)}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-gray-700">
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-50">
                        {row.cells.map((cell) => (
                            <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                                {cell.render("Cell")}
                            </td>
                        ))}
                    </tr>
                )
            })}
        </tbody>
    </table>
    <div className='flex justify-center mt-4 mb-4'>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
 onClick={()=>navigate("/createEmployee")}>Create Employee</button>
    </div>
</div>


  )
}

export default Employees;


