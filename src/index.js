import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
document.getElementById('root'))