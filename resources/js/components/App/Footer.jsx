import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';



export default function Footer(){

    return (
        <footer className="main-footer">

            <div className="float-right d-none d-sm-inline">
                Anything you want
            </div>

            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
    )
}

