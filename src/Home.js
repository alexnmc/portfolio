import React from 'react'
import resume from './Photos/resume.pdf'




const Home = props => {
    return (
        <div className="home"  id = '1'>
            <div className = "home1"> 
                <div className = "home2">
                    <h1 className = 'navbarP2'>Alexander Nemechek</h1>
                    <div className = 'inline'>
                        <div className = "fixed">
                        <a className = 'git1' href = "https://github.com/alexnmc ">
                            <div className = "git"></div>
                        </a>
                        </div>

                        <div className = "fixed">
                        <a className = 'linkedin1' href = "https://www.linkedin.com/in/alexander-nemechek-10240a167">
                            <div className = "linkedin"></div>
                        </a>
                        </div>
                        
                        <div className = "fixed">
                        <a className = 'resume1' href = {resume} >
                            <div className = "resume"></div>
                        </a>
                        </div>
                    </div>
                    
                    
                    <p  className = 'welcomeP'>Welcome to my portfolio website</p>
                    <h5>this site was made with REACT</h5>
                    <div className = "react1"></div>
                </div>

                    
                        
            </div>
            <div className = "home5">
            </div>
        </div>
    )
}

    export default Home