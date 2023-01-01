import React from 'react'
import Logo from '../Images/lightbulb.png'
const Header = () => {
  return (
    <>

    <header className="header-section">
        <div className="container header-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a  className="navbar-brand d-flex" href="/">
                    <img src={Logo} className="img-fluid" width="80px" alt="imageLogo"/>
                    <span><h4 className="mt-4">LightUp</h4></span>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav link mx-auto me-sm-2">
                      <li className="nav-item">
                        <a  className="nav-link" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" aria-current="page"  href="#skill-set">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" href="https://github.com/LightUpdev?tab=repositories">Project</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" href="#about">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>
    </header>
    </>
  )
}

export default Header