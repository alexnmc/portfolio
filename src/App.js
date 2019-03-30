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
         navbarP2 : { color: 'black'}
         }
    }
    

   
    changeColor = () => {
        if(this.state.navbarP2.color ===  'black') {
            this.setState(
                { 
                navbarP2: { color: 'blue'}
                }
            )
        } else {
            this.setState(
                { 
                navbarP2: { color: 'black'}
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