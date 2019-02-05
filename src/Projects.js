import React from 'react'
import exchange from  './Photos/exchange.png'
import shell from  './Photos/shellgame.png'
import group from './Photos/group.png'
import realestate from './Photos/realestate.png'
import news from './Photos/news.png'



const Projects = () => {
    return (
        <div className="block" id = '3'>
        <div className = "projects1">
            
            <p className = "work">Projects:</p>
        
        <div className="projects">
            
        <div className = 'excDiv'>
                <a href = "https://app-booking.herokuapp.com/" >
                <img className ="shell" alt = '' src = {group}/>
                </a>
                <p className = 'exchangeText'> User friendly appointment booking platform, a full-stack application with user authentication, login and signup with password encryption and protected routes. Bookings are stored in MongoDB.</p>
                <a className = 'git1' href = " https://github.com/alexnmc/appointment-booking">
                    <div className = "git2"></div>
                </a>
        </div>


            <div className = 'excDiv'>
                <a href = "http://exrates.surge.sh">
                <img className ="exchange" alt = '' src = {exchange}/>
                </a>
                <p className = 'exchangeText'>React website displaying and converting all the foreign currencies including Bitcoin, having Euro as base currency. The app gets the data from the Fixer API using Axios.</p>
                <a className = 'git1' href = "https://github.com/alexnmc/Api-project ">
                    <div className = "git2"></div>
                </a>
            </div>

            <div className = ' shellDiv'>
                <a href= "https://shell-game.herokuapp.com/body">
                <img className = "shell" alt = '' src = {shell}/>
                </a>
                <p className = 'shellText'>Shell Game, a fullstack game created in React with CSS animations and lots of JavaScript. Custom API routes built with Mongoose and Express to save player info in MongoDB.
                </p>
                <a className = 'git1' href = "https://github.com/alexnmc/shell-game ">
                    <div className = "git2"></div>
                </a>
            </div>

            
            <div className = 'excDiv2'>
                <a href = "https://www.valentinapan.com" >
                <img className ="shell" alt = '' src = {realestate}/>
                </a>
                <p className = 'exchangeText'>Freelance project:  real-estate agent website made with React.</p>
                <a className = 'git1' href = " https://github.com/alexnmc/real-estate">
                    <div className = "git2"></div>
                </a>
            </div>
            
            <div className = 'excDiv2'>
                <a href = "https://newschannel.netlify.com/" >
                <img className ="shell" alt = '' src = {news}/>
                </a>
                <p className = 'exchangeText'>A compact, single page REACT application displaying articles through Axios requests made to over 30 news APIs updated live.</p>
                <a className = 'git1' href = "https://github.com/alexnmc/daily-news ">
                    <div className = "git2"></div>
                </a>
            </div>

        </div>
       
        </div>
        <div className = 'home5'></div>
        
           
        </div>
    )
}

export default Projects