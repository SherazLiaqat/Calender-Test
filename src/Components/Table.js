import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TableBody, TableRow } from "@mui/material";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function Table() {
  const [users, setUser] = useState([]);
  const handleDelete = (id) => {
    setUser(users.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "username", headerName: "User name", width: "200" },
    { field: "name", headerName: "Name", width: "200" },
    { field: "email", headerName: "Email", width: "200" },
    { field: "phone", headerName: "Phone", width: "200" },
    { field: "website", headerName: "Web Link", width: "200" },
    {
      field: "option",
      headerName: "Option",
      width: "200",
      renderCell: (params) => {
        return (
          <>
            <EditIcon style={{ color: "green", marginLeft: "5px",cursor:'pointer' }} />

            <DeleteIcon style={{ color: "red",cursor:'pointer' }} onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        setUser(resp);
      });
    });
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        title="Crud Operation"
        rows={users}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Table;
