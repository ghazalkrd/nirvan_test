import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Header() {
    const logout = () => {
        localStorage.removeItem("token")
    }
    return (<>
        <Button onClick={logout}>
            Logout
        </Button>
        <div className='div-header'>
            <Link to='/Login' className='link-header'>Login</Link>
        </div>
    </>
    )

}