import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


export default function HelloWord(){

    return (

      <BrowserRouter>
            <h1>Mes debuts avec react dans laravel 10</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
      </BrowserRouter>
    )
}

