import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import Button from '@mui/material/Button';
import { useState } from 'react';
import login from './Login';
import axios from 'axios';
import myAxios from '../apis/axiosconfig';
import { useParams } from 'react-router-dom';
import AddCar from './addCar'
import TextField from '@mui/material/TextField';


const RenderUpdate = (props: GridRenderCellParams<Date>) => {
    const { hasFocus, id } = props;
    
    return (
        <strong>
            <Button id='btn-update'
                component="button"
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event: React.KeyboardEvent) => {
                    if (event.key === ' ') {
                        event.stopPropagation();
                    }
                }}
            >
                <Link to={`/addCar/${id}`}>update</Link>
            </Button>
        </strong>
    );
};


const RenderDelete = (props: GridRenderCellParams<Date>) => {
    const { hasFocus, id } = props;

    const Delete = () => { 
        alert('delete ' + id);
    }

    return (
        <strong>
            <Button id='btn-del'
                component="button"
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                tabIndex={hasFocus ? 0 : -1}
                onClick={Delete}
                onKeyDown={(event: React.KeyboardEvent) => {
                    if (event.key === ' ') {
                        event.stopPropagation();
                    }
                }}
            >
                Delete
            </Button>
        </strong>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        editable: true,
    },
    {
        field: 'metaTitle',
        headerName: 'metaTitle',
        width: 150,
        editable: true,
    },
    {
        field: 'image',
        headerName: 'image',
        width: 150,
        editable: true,
    },
    {
        field: 'coverImage',
        headerName: 'coverImage',
        width: 150,
        editable: true,
    },
    {
        field: 'disabled',
        headerName: 'disabled',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'description',
        width: 150,
        editable: true,
    },
    {
        field: 'seoDescription',
        headerName: 'seoDescription',
        width: 150,
        editable: true,
    },
    {
        field: 'url',
        headerName: 'url',
        width: 160,
        editable: true,
    },
    {
        field: 'createDate',
        headerName: 'createDate',
        width: 110,
        editable: true,
    },
    {
        field: 'updateDate',
        headerName: 'updateDate',
        width: 110,
        editable: true,
    },
    {
        field: 'Edit',
        headerName: '',
        type: 'button',
        width: 110,
        editable: true,
        renderCell: RenderUpdate,
    },
    {
        field: 'Delete',
        headerName: '',
        type: 'button',
        width: 110,
        editable: true,
        renderCell: RenderDelete,
    },
];

function DataGridDemo() {

    const [rows, setRows] = useState<Array<any>>([]);

    useEffect(() => {
        myAxios.get(`/panel/brand`)
            .then(res => {
                setRows(res.data)
            }
            );
    }, [])

    return (
        <div>
            <div className='div-carBrand'>Car Brand Table</div>
            <Box className='DataGridDemo' sx={{ height: 500, width: '90%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
            <div className='addCar'>
                <Link to='/addCar' className='link-header'>Add</Link>
            </div>
        </div>
    );
}
export default DataGridDemo;