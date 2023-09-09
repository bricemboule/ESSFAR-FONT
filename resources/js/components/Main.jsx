import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';

import Header from './App/Header';
import Footer from './App/Footer';
import Sidebar from './App/Sidebar';
import Content from './Content';

export default function MyApp(){

    return (

        <BrowserRouter>
             <Header/>
             <Sidebar/>
             <Content/>
             <Footer/>
        </BrowserRouter>
    )
}

