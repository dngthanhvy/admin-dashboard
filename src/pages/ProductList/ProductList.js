import {useState} from 'react';
import { Avatar } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

import "./ProductList.css"
import { productRows } from '../../data'

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        {field: "id", headerName: "ID", width: 70},
        {field: "product", headerName: "Product", width: 200, renderCell: (params) => {
            return (
                <div className="productList__product">
                    <Avatar src={params.row.img} className="productList__productAvatar"/>
                    {params.row.name}
                </div>)
        }},
        {field: "stock", headerName: "Stock", width: 150},
        {field: "status", headerName: "Status", width: 120},
        {field: "price", headerName: "Price", width: 160},
        {field: "action", headerName: "Action", width:150, renderCell: (params) => {
            return (
                <>
                    <Link to={`/product/${params.row.id}`}>
                        <button className="productList__edit"> Edit </button>
                    </Link>
                    <button className="productList__delete" onClick={() => handleDelete(params.row.id)}> Delete </button>
                </>
)
        }}
    ];

    return (
        <div className="productList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={100} checkboxSelection />
        </div>
    )
}
