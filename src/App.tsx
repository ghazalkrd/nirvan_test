import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import DataGridDemo from './component/carBrandCreateForm'
import AddCar from './component/addCar'

function App() {
  if (localStorage.getItem("token") !== null) {
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<DataGridDemo />} />
        <Route path='/car' element={<DataGridDemo />} />
        <Route path='/addCar' element={<AddCar />} />
        <Route path='/addCar/:Pageid' element={<AddCar />} />
      </Routes>
    </BrowserRouter>

  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>

  );
}

export default App;
