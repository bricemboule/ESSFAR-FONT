import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Active from './pages/Active';
import Home from './Home';


export default function Content(){

    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/user' element={<Admin/>}/>
            <Route exact path='/active' element={<Active/>}/>
        </Routes>
    )
}
