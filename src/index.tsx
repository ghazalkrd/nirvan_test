import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataGridDemo from './component/carBrandCreateForm'
import AddCar from './component/addCar'
import { useParams } from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CarId = (): any => {
  const { id } = useParams();
}

if (localStorage.getItem("token") !== null) {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/App' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<DataGridDemo />} />
        <Route path='/car' element={<DataGridDemo />} />
        <Route path='/addCar/:id' element={<AddCar />} />
        <Route path='/addCar' element={<AddCar />} />
        
      </Routes>
    </BrowserRouter>
  );
}
if (localStorage.getItem("token") == null) {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/App' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/car' element={<Login />} />
        <Route path='/addCar' element={<Login />} />
        <Route path='/addCar/:id' element={<AddCar />} />
      </Routes>
    </BrowserRouter>
  );
}


