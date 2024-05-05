import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const Test = () => {
    const columns = useMemo(()=>[
        {
            Header:"Unique Id",
            accessor:"id"
        },
        {
            Header:"Name",
            accessor:"name"
        },
        {
            Header:"Email",
            accessor:"email"
        },
        {
            Header:"Mobile No",
            accessor:"mobile"
        },
        {
            Header:"Designation",
            accessor:"designation"
        },
        {
            Header:"Gender",
            accessor:"gender"
        },
        {
            Header:"Course",
            accessor:"course"
        },
        {
            Header:"Create Date",
            accessor:"createDate"
        },
        {
            Header:"Action",
            accessor:"action"
        },
    ],[])

    const data = [
        {
            id:1,
            name: "Manas",
            email: "123manasssalunke@gmail.com",
            mobile: 9887942066,
            designation:"HR",
            gender: "Male",
            course:"MCA",
            createDate:"05-05-2024",
            action: "Edit-Delete"
            
        },
        {
            id:2,
            name: "Manas",
            email: "123manasssalunke@gmail.com",
            mobile: 9887942066,
            designation:"HR",
            gender: "Male",
            course:"MCA",
            createDate:"05-05-2024",
            action: "Edit-Delete"
            
        },
    ];

    const {getTableProps, getTableBodyProps, headerGroups,rows, prepareRow, getCellProps } = useTable({columns, data});
  return (
    <div>
        <div>Employees</div>
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row)=>{
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell)=>(
                            <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                            </td>
                        ))}
                    </tr>
                )
            })}
        </tbody>
    </table>



    </div>
  )
}

export default Test