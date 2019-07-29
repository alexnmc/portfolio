import React, { Component } from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'
import group from './Photos/group.png'
import write from './Photos/write.png'
import pharma from './Photos/pharma.png'
import news from './Photos/news.png'
import newPic from './Photos/news2.png'
import Loading from './Loading'



class Projects extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           loading:  'off',
           loading1: 'off',
           loading2: 'off',
           loading3: 'off',
           loading4: 'off',
           loading5: 'off'
        }
    }

    
    animation = () =>{
        this.setState({
            loading: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off'
        })
    }
    
    animation1 = () =>{
        this.setState({
            loading1: 'on',
            loading: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off'
        })
    }
    
    animation2 = () =>{
        this.setState({
            loading2: 'on',
            loading1: 'off',
            loading: 'off',
            loading3: 'off',
            loading4: 'off',
            loading5: 'off'
        })
    }
    
    animation3 = () =>{
        this.setState({
            loading3: 'on',
            loading1: 'off',
            loading2: 'off',
            loading: 'off',
            loading4: 'off',
            loading5: 'off'
        })
    }
    
    animation4 = () =>{
        this.setState({
            loading4: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading: 'off',
            loading5: 'off'
        })
    }
    
    animation5 = () =>{
        this.setState({
            loading5: 'on',
            loading1: 'off',
            loading2: 'off',
            loading3: 'off',
            loading4: 'off',
            loading: 'off'
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
                    <a href = "https://farmacie-app.herokuapp.com/" >
                    <div className = 'imgWrap' onClick = {() => this.animation6()}>
                        { this.state.loading === 'off' ?
                            <img className ="shell" alt = '' src = {pharma}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'> The pharmacy-app helps users find the medication they are looking for by connecting them to all the pharmacies in the area.</p>
                    <a className = 'git1' href = " https://github.com/alexnmc/Farma-app">
                        <div className = "git2"></div>
                    </a>
            </div>

            
            <div className = 'excDiv'>
                    <a href = "https://www.news-foryou.com" >
                    <div className = 'imgWrap' onClick = {() => this.animation()}>
                        { this.state.loading === 'off' ?
                            <img className ="shell" alt = '' src = {news}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'>News for You, a fully responsive, compact, single page REACT website displaying the latest news articles from over 50 countries and live streaming news channels.</p>
                    <a className = 'git1' href = "https://github.com/alexnmc/daily-news ">
                        <div className = "git2"></div>
                    </a>
            </div>

            <div className = 'excDiv'>
                    <a href = "https://news-for-you.herokuapp.com/" >
                    <div className = 'imgWrap' onClick = {() => this.animation1()}>
                        { this.state.loading1 === 'off' ?
                            <img className ="shell" alt = '' src = {newPic}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'> The full-stack version of the NewsForYou application with user registration and authentication and RESTful full stack CRUD functionaity for saving user info and news articles in MongoDB.</p>
                    <a className = 'git1' href = " https://github.com/alexnmc/news-for-you">
                        <div className = "git2"></div>
                    </a>
            </div>
            
            <div className = 'excDiv'>
                    <a href = "https://app-booking.herokuapp.com/" >
                    <div className = 'imgWrap' onClick = {() => this.animation2()}>
                        { this.state.loading2 === 'off' ?
                            <img className ="shell" alt = '' src = {group}/>
                            :
                            <Loading/>
                        }
                    </div>
                    </a>
                    <p className = 'exchangeText'>Jet Ski Rental, a full-stack application with user authentication, password encryption, protected routes, RESTful APIs built in Node.js and Express providing
                     endpoints for both routing and for post/get/put/delete CRUD functionality to save bookings and display available booking times and jet-skis.</p>
                    <a className = 'git1' href = " https://github.com/alexnmc/appointment-booking">
                        <div className = "git2"></div>
                    </a>
            </div>
            
            <div className = 'excDiv'>
                <a href = "https://write-some.herokuapp.com/" >
                <div className = 'imgWrap' onClick = {() => this.animation4()}>
                    { this.state.loading4 === 'off' ?
                        <img className ="shell" alt = '' src = {write}/>
                        :
                        <Loading/>
                    }
                </div>
                </a>
                <p className = 'exchangeText'>A full-stack MERN journal with user registration and authentication and complete CRUD functionality for saving, deleting or editing entries. </p>
                <a className = 'git1' href = " https://github.com/alexnmc/write-something">
                    <div className = "git2"></div>
                </a>
            </div>
            
            <div className = 'excDiv'>
                <a href = "http://exrates.surge.sh">
                <div className = 'imgWrap' onClick = {() => this.animation5()}>
                    { this.state.loading5 === 'off' ?
                        <img className ="shell" alt = '' src = {exchange}/>
                        :
                        <Loading/>
                    }
                    </div>
                </a>
                <p className = 'exchangeText'>React website displaying and converting all the foreign currencies including Bitcoin, having Euro as base currency. The app gets the data from the Fixer API using Axios.</p>
                <a className = 'git1' href = "https://github.com/alexnmc/Api-project ">
                    <div className = "git2"></div>
                </a>
            </div>
            
            <div className = ' shellDiv'>
                <a href= "https://shell-game.herokuapp.com/body">
                <div className = 'imgWrap' onClick = {() => this.animation3()}>
                    { this.state.loading3 === 'off' ?
                        <img className ="shell" alt = '' src = {shell}/>
                        :
                        <Loading/>
                    }
                </div>
                </a>
                <p className = 'shellText'>Shell Game, a fullstack game created in React with CSS animations and JavaScript. Custom API routes built with Mongoose and Express to save player info in MongoDB.
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