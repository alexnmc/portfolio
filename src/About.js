import React from 'react'
import resume from './Photos/resume.pdf'


const About = () => {
    
    return (
        <>
        <div className="about" id = '2'>
            <div className = "home3">
                <div className = "ID"></div>
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
                    <p className = "aboutP">
                        My name is Alexander Nemechek and I am a full stack software developer.
                        I enjoy being challenged and engaging in projects that require me to work outside my comfort and knowledge set, 
                        continuing to learn new languages and development techniques. 
                    </p>
                    <p className = "aboutP" > MY SKILLS ARE:</p>
            
                <div className = 'logos'>
                    <div className = 'javascript'></div>
                    <div className = 'react'></div>
                    <div className = 'html'></div>
                    <div className = 'css'></div>
                    <div className = 'node'></div>
                    <div className = 'mongo'></div>
                </div>

                <div className = "provide"> 
                    <ul>
                        <li>JavaScript (vanilla, React, React Native)</li>
                        <li>Responsive HTML/CSS</li>
                        <li>High-level user experience</li>
                        <li>Best practices</li>
                        <li>Performance</li>
                        <li>Animation</li>
                    </ul>

                    <ul>
                        <li>Node.js</li>
                        <li>Npm</li>
                        <li>API integration and development with Express</li>
                        <li>Mongoose</li>
                        <li>Database arhitecture in MongoDB</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className = 'home5'></div>
        </>
    )
}

export default About