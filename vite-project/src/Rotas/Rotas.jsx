import React from 'react'
import { BrowserRouter , Routes ,Route, useParams } from 'react-router-dom';
// * Components
import { LoginPage } from '../components/LoginPage'
import { RegisterPage } from '../components/RegisterPage';
import { RecoveryPass } from '../components/RecoveryPass';
import { NotFound } from '../components/NotFound';
import { HomePage } from '../components/HomePage/Home.jsx'
import { Home } from '../components/Home'
import { Play } from '../components/Play';

export function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/register" element={<RegisterPage/>}/>
          <Route exact path="/recovery" element={<RecoveryPass/>}/>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/play/:movie" element={<Play/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    )
  }
