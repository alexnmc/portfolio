import React, { Component } from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'
import group from './Photos/group.png'
import write from './Photos/write.png'
import pharma from './Photos/farma.png'
import news from './Photos/news.png'
import newPic from './Photos/news2.png'
import Loading from './Loading'
import native from './Photos/native.png'
import lhc from './Photos/lhc.png'



class Projects extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           loading:  'off',
           loading1: 'off',
           loading2: 'off',
           loading3: 'off',
           loading4: 'off',
           loading5: 'off',
           loading6: 'off'
        }
    }

    componentDidMount(){
        this.setState({
            loading3: 'off',
            loading1: 'off',
            loading2: 'off',
            loading: 'off',
            loading4: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }

    
    animation = () =>{
        this.setState({
            loading: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }
    
    animation1 = () =>{
        this.setState({
            loading1: 'on',
            loading: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }
    
    animation2 = () =>{
        this.setState({
            loading2: 'on',
            loading1: 'off',
            loading: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }
    
    animation3 = () =>{
        this.setState({
            loading3: 'on',
            loading1: 'off',
            loading2: 'off',
            loading: 'off',
            loading4: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }
    
    animation4 = () =>{
        this.setState({
            loading4: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading: 'off',
            loading5: 'off',
            loading6: 'off'
        })
    }
    
    animation5 = () =>{
        this.setState({
            loading5: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading: 'off',
            loading6: 'off'
        })
    }

    animation6 = () =>{
        this.setState({
            loading6: 'on',
            loading5: 'off',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading: 'off'
        })
    }
    
   
render(){ 
    return (
    <div className="block" id = '3'>
        <div className = "projects1">
            <p className = "work">Projects:</p>
        <div className="projects">

            <div className = 'excDiv'>
                    <div className = 'imgWrap2'>
                       <img className ="native" alt = '' src = {lhc}/>
                    </div>
                    <p className = 'exchangeText2'>Caregiver schedulng app built for Family Directed using React Native and GraphQL.</p>
            </div>
            
            <div className = 'excDiv'>
                    <p>Farmaapp.eu:</p>
                    <a href = "https://www.farmaapp.eu/" >
                    <div className = 'imgWrap' onClick = {() => this.animation6()}>
                        { this.state.loading6 === 'off' ?
                            <img className ="shell" alt = '' src = {pharma}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'> 
                        Built for Romania, Farmaap helps users find the medication they need by sending a message and an email with their details and prescription to all the pharmacies in their range.
                        It has user authentication, password encryption and protected routes, built custom RESTful API in Node.js and Express providing endpoints for both routing and for get/post/put/delete CRUD functionality.
                        <span className = "click"> click on img</span>
                    </p>
                    <a className = 'git1' href = " https://github.com/alexnmc/Farma-app">
                        <div className = "git2"></div>
                    </a>
            </div>

            
            <div className = 'excDiv'>
                    <p>News for You:</p>
                    <a href = "https://newsforyou.surge.sh">
                    <div className = 'imgWrap' onClick = {() => this.animation()}>
                        { this.state.loading === 'off' ?
                            <img className ="shell" alt = '' src = {news}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'>News for You, a fully responsive, compact, 
                        single page REACT website displaying the latest news articles from over 50 countries 
                        and live streaming news channels.This project is also available as a React Native mobile app.
                        <span className = "click"> click on img</span>
                    </p>
                    <a className = 'git1' href = "https://github.com/alexnmc/daily-news ">
                        <div className = "git2"></div>
                    </a>
            </div>

            <div className = 'excDiv'>
                    <div className = 'imgWrap2'>
                       <img className = "native" alt = '' src = {native}/>
                    </div>
                    <p className = 'exchangeText2'> News for You - React Native App</p>
                    <a className = 'git1' href = " https://github.com/alexnmc/react-native-app1">
                        <div className = "git2"></div>
                    </a>
            </div>

            <div className = 'excDiv'>
                    <p>News for You,  full-stack:</p>
                    <a href = "https://news-for-you.herokuapp.com/" >
                    <div className = 'imgWrap' onClick = {() => this.animation1()}>
                        { this.state.loading1 === 'off' ?
                            <img className ="shell" alt = '' src = {newPic}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'> The full-stack version of News for You with JWT user authentication 
                        and RESTful full stack CRUD functionaity for saving user info and news articles in MongoDB.
                        <span className = "click"> click on img</span>
                    </p>
                    <a className = 'git1' href = " https://github.com/alexnmc/news-for-you">
                        <div className = "git2"></div>
                    </a>
            </div>

            <div className = 'excDiv'>
                    <p>Jet Ski Rental booking:</p>
                    <a href = "https://app-booking.herokuapp.com/" >
                    <div className = 'imgWrap' onClick = {() => this.animation2()}>
                        { this.state.loading2 === 'off' ?
                            <img className ="shell" alt = '' src = {group}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'>Jet Ski Rental, a full-stack application with JWT user authentication, password encryption, protected routes, 
                        RESTful APIs built in Node.js and Express providing
                        endpoints for both routing and for post/get/put/delete CRUD functionality to save bookings 
                        and display available booking times and jet-skis.
                        <span className = "click"> click on img</span>
                    </p>
                    <a className = 'git1' href = " https://github.com/alexnmc/appointment-booking">
                        <div className = "git2"></div>
                    </a>
            </div>
            
            <div className = 'excDiv'>
                <p>Write Something:</p>
                <a href = "https://write-some.herokuapp.com/" >
                <div className = 'imgWrap' onClick = {() => this.animation4()}>
                    { this.state.loading4 === 'off' ?
                        <img className ="shell" alt = '' src = {write}/>
                        :
                        <Loading/>
                    }
                </div>
                </a>
                <p className = 'exchangeText'>A full-stack MERN journal with user registration and authentication 
                    using JWT and Bcrypt and complete CRUD functionality for saving, deleting or editing entries. 
                    <span className = "click"> click on img</span>
                </p>
                <a className = 'git1' href = " https://github.com/alexnmc/write-something">
                    <div className = "git2"></div>
                </a>
            </div>
            
            <div className = 'excDiv'>
                <p>My first API project:</p>
                <a href = "http://exrates.surge.sh">
                <div className = 'imgWrap' onClick = {() => this.animation5()}>
                    { this.state.loading5 === 'off' ?
                        <img className ="shell" alt = '' src = {exchange}/>
                        :
                        <Loading/>
                    }
                    </div>
                </a>
                <p className = 'exchangeText'>React website displaying and converting all the foreign currencies including Bitcoin, 
                    having Euro as base currency. The app gets the data from the Fixer API using Axios.
                    <span className = "click"> click on img</span>
                </p>
                <a className = 'git1' href = "https://github.com/alexnmc/Api-project ">
                    <div className = "git2"></div>
                </a>
            </div>
            
            <div className = 'excDiv'>
                <p>My first full-stack project:</p>
                <a href= "https://shell-game.herokuapp.com/body">
                <div className = 'imgWrap' onClick = {() => this.animation3()}>
                    { this.state.loading3 === 'off' ?
                        <img className ="shell" alt = '' src = {shell}/>
                        :
                        <Loading/>
                    }
                </div>
                </a>
                <p className = 'exchangeText'>Shell Game, a fullstack game created in React with CSS animations and JavaScript. 
                    Custom API routes built with Mongoose and Express to save player info in MongoDB.
                    <span className = "click"> click on img</span>
                </p>
                <a className = 'git1' href = "https://github.com/alexnmc/shell-game ">
                    <div className = "git2"></div>
                </a>
            </div>
        </div>
       </div>
        <div className = 'home5'></div>
    </div>
    )
}
}

export default Projects