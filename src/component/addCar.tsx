import React, { Component, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';
import '../App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import myAxios from '../apis/axiosconfig';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

function AddCar() {
    const { id } = useParams()

    //const [id, setId] = React.useState('');
    //const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setId(event.target.value);
    //};

    const [name, setName] = React.useState('');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const [metaTitle, setMetaTitle] = React.useState('');
    const handleChangeMetaTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaTitle(event.target.value);
    };

    const [image, setImage] = React.useState('');
    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const [coverImage, setCoverImage] = React.useState('');
    const handleChangeCoverImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCoverImage(event.target.value);
    };

    const [checked, setChecked] = React.useState(true);
    const handleChangeDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [description, setDescription] = React.useState('');
    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const [seoDescription, setSeoDescription] = React.useState('');
    const handleChangeSeoDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeoDescription(event.target.value);
    };

    const [url, setUrl] = React.useState('');
    const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const [createDate, setCreateDate] = React.useState('');
    const handleChangeCreateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateDate(event.target.value);
    };

    const [updateDate, setUpdateDate] = React.useState('');
    const handleChangeUpdateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateDate(event.target.value);
    };

    const addCarBrand = () => {
        myAxios.post('/panel/brand', {
            name: name,
            metaTitle: metaTitle,
            image: image,
            coverImage: coverImage,
            disabled: checked,
            description: description,
            seoDescription: seoDescription,
            url: url,
            createDate: createDate,
            updateDate: updateDate
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const Update = () => {
        myAxios.get('/panel/brand/{id}')
            .then(res => {
                console.log(res.data)
            }
            );
    }

    useEffect(() =>{
        myAxios.get('/panel/brand/{id}')
        .then(res => {
            console.log(res.data)
        }
        );
    },[])

    return (
        <div>
            <div className='addingForm'>Adding Form</div>
            <div className='addCarForm'>
                <TextField className='textfieldAddCar' id="standard-basic" label="name" variant="standard" value={name} onChange={handleChangeName} />
                <TextField className='textfieldAddCar' id="standard-basic" label="metaTitle" variant="standard" value={metaTitle} onChange={handleChangeMetaTitle} />
                <TextField className='textfieldAddCar' id="standard-basic" label="image" variant="standard" value={image} onChange={handleChangeImage} />
                <TextField className='textfieldAddCar' id="standard-basic" label="coverImage" variant="standard" value={coverImage} onChange={handleChangeCoverImage} />
                <Switch checked={checked} onChange={handleChangeDisabled} inputProps={{ 'aria-label': 'controlled' }} />
                <TextField className='textfieldAddCar' id="standard-basic" label="description" variant="standard" value={description} onChange={handleChangeDescription} />
                <TextField className='textfieldAddCar' id="standard-basic" label="seoDescription" variant="standard" value={seoDescription} onChange={handleChangeSeoDescription} />
                <TextField className='textfieldAddCar' id="standard-basic" label="url" variant="standard" value={url} onChange={handleChangeUrl} />
                <TextField className='textfieldAddCar' id="standard-basic" label="createDate" variant="standard" value={createDate} onChange={handleChangeCreateDate} />
                <TextField className='textfieldAddCar' id="standard-basic" label="updateDate" variant="standard" value={updateDate} onChange={handleChangeUpdateDate} />
            </div>
            <Button className='addNew' variant="contained"
                onClick={addCarBrand}>
                Add
            </Button>
        </div>
    );
}

export default AddCar;