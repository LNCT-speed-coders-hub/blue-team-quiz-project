import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
              <header>
            <div className="header">
              <div className="logo-container">
                <a href="/"><img src="/img/NTA_logo.png" alt="Quiz Website" /></a>
              </div>
              <div className="nav-container">
                <ul>
                <li>  <Link to="/">Home</Link></li>
              
                  <li>  <Link to="/login">Login</Link></li>
                  
                  <li><a href="#">Help(FAQs)</a></li>
                </ul>
              </div>
            </div>
          </header>
        </div>
    )
}
