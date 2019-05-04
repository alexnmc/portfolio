import React, { Component } from 'react'
//import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'


class App extends Component {
    constructor() {
        super()
   
        this.state = {
         
         }
    }
    
    render(){
        return (
            <div>
                <Navbar/>
                <Home />
                <About/>
                <Projects/>
                <Contact/>
                
                
            </div>
        )
    }
}

export default App