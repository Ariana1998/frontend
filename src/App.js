import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import LoginUser from './components/LoginComponents/LoginUser';
import RegisterUser from './components/LoginComponents/RegisterUser';
import Pokemones from './components/MainComponents/Pokemones';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import Navigator from './components/MainComponents/Navigator';
function App() {
  const [isLogged, setLogged] = useState(false)
  const navigate = useNavigate();
  return (
    <div> 
      <Routes>
        <Route index element={<div><LoginUser isLogged={isLogged} setLogged={setLogged} navigate={navigate}/></div>}/>
        <Route path='/registro' element={<div><RegisterUser/></div>}/>
        <Route element={<ProtectedRoutes isLogged={localStorage.getItem('isLogged')}/>}>
          <Route element={<Navigator setLogged={setLogged} navigate={navigate}/>}>
            <Route path='/pokemones' element={<div><Pokemones/></div>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
