import React, { Component } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myAxios from '../apis/axiosconfig';
import { number } from 'prop-types';
import Header from './Header';



function Login(): any {

    const [name, setName] = React.useState('');
    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const [pass, setPass] = React.useState('');
    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };

    const handleChangelogout = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value='';
    };

    const login = () => {
        console.log(name, pass);
        myAxios.post(`/panel/user/login`, {
            "password": pass,
            "phoneNumber": name
        }).then(res => {
            console.log(res.data);
        localStorage.setItem("token", res.data.access_token)
        })

        myAxios.get(`/panel/brand`)
        .then(res =>{
            const carData = res.data;
            console.log(res.data);
        }
          );

        
    }

    const logout = () => {
        localStorage.removeItem("token")
    }
    return (
        <div className='div-login'>
            <div className='Login'>Login Form</div>

            <Stack className='login-btn' spacing={2} direction="row">
                <Button variant="contained"
                    onClick={logout}>
                        <Link to='/' className='link-logout'>Log out</Link>
                </Button>
            </Stack>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="password"
                    label="password"
                    value={pass}
                    onChange={handleChangePass}
                />
                <TextField
                    id="phoneNumber"
                    label="phoneNumber"
                    value={name}
                    onChange={handleChangePhone}
                />
            </Box>
            <Stack className='login-btn' spacing={2} direction="row">
                <Button variant="contained"
                    onClick={login}>
                    <Link to='/car'>Login</Link>
                </Button>
            </Stack>
        </div>

    )
}



export default Login;