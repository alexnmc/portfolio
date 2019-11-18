import React, {Suspense, lazy } from 'react'
import LogoLoading from './LogoLoading'
import Navbar from './Navbar'
const Home  = lazy(() => import("./Home"))
const About  = lazy(() => import("./About"))
const Projects  = lazy(() => import("./Projects"))
const Contact  = lazy(() => import("./Contact"))



const App = ()  => {
        return (
            <div>
                <Navbar/>
                <Suspense fallback = {<LogoLoading/>}>
                    <Home/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </Suspense>
            </div>
        )
}

export default App