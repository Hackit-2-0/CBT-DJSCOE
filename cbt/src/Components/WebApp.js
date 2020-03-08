import React from 'react'
import Logo from  "../assets/images/chat.png";
import "../assets/css/main.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function WebApp() {
    return (
            <div>
            <header className="showcase">
                <div className="container">
                    <nav>
                        <h1 className="logo">My Sass Website</h1>
                        <ul>
                            
                            <li>  
                                <Router>
                                    <Link to="#">Home</Link>
                                </Router>
                            </li>
                            
                            <li>
                                <Router>
                                    <Link to="#">About</Link>
                                </Router>
                            </li>
                            
                            <li>
                                <Router>
                                        <Link to="#">Services</Link>
                                </Router>
                            </li>
                        </ul>
                    </nav>

                <div className="showcase-content">
                    <div>
                        <h1>Make Your Marketing Real</h1>
                        <p className="my-1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eligendi tempore atque laborum. Quisquam nemo at non. Corrupti, vitae dolore.
                        </p>
                        <Link to="#" className="btn-secondary">Learn More</Link>
                        <Link to="#" className="btn-secondary">Sign Up</Link>
                    </div>
                    <img src={Logo}/>
                    
                </div>
            </div>
        </header>
        </div>
    )
}

export default WebApp