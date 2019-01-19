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
         navbarP2 : { color: 'rgba(10, 15, 36, 0.851)'}
         }
    }
    

   
    changeColor = () => {
        if(this.state.navbarP2.color ===  'rgba(10, 15, 36, 0.851)') {
            this.setState(
                { 
                navbarP2: { color: 'white'}
                }
            )
        } else {
            this.setState(
                { 
                navbarP2: { color: 'rgba(10, 15, 36, 0.851)'}
                }
            )
        }
    }

    
   
   render(){
        return (
            <div>
                <Navbar />
                <Home  changeColor = {this.changeColor}
                        style = {this.state}
                />
                <About/>
                <Projects/>
                <Contact/>
                
                
            </div>
        )
    }
}

export default App