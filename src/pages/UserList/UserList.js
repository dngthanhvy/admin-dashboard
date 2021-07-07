import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

import './UserList.css'
import {userRows} from '../../data'

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        {field: "id", headerName: "ID", width: 70},
        {field: "user", headerName: "User", width: 200, renderCell: (params) => {
            return (
                <div className="userList__user">
                    <Avatar src={params.row.avatar} className="userList__userAvatar"/>
                    {params.row.username}
                </div>)
        }},
        {field: "email", headerName: "Email", width: 200},
        {field: "status", headerName: "Status", width: 120},
        {field: "transaction", headerName: "Transaction Volume", width: 160},
        {field: "action", headerName: "Action", width:150, renderCell: (params) => {
            return (
                <>
                    <Link to={`/user/${params.row.id}`}>
                        <button className="userList__edit"> Edit </button>
                    </Link>
                    <button className="userList__delete" onClick={() => handleDelete(params.row.id)}> Delete </button>
                </>
)
        }}
    ];
    
    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={100} checkboxSelection />
        </div>
    )
}
