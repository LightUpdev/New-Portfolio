import React from 'react'

const Hero = () => {
  return (
    <>
    {/* HERO SECTION */}
    <main className="main-container">
        <div className="container">
            <div className="row pt-5">
                <div className="col-sm-6 col-md-6 row-col-info col-xs-12 hero-about-text">
                    <h1 className="text-dark display-3 fw-bold ">
                        Hello, <span className="h1-name">I'm stephen</span> 
                    </h1>
                    <span className="text-dark">
                        <p className="span-p mt-4"> A fullstack developer  with 5+ years of experience. <br/>
                            I build and maintain websites and web applications, using programming, design tools, and languages such as HTML, CSS, PHP and JavaScript to meet both client and end-user needs.
                        </p>
                    </span>
                </div>
            
            </div>
        </div>
    </main>
    </>
  )
}

export default Hero