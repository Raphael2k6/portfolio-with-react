import React from 'react';


const Main = () => {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <img className="photo" src={require("../Components.js/img.jpg")} alt="A photograph of a man in an office."/>
                    <p className=" animated bounce large-text">Raphael Donanu</p>
                    <div>
                        <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/raphaeldonanu/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
                    </div>
                    <div className="my-motto">
                        <p className=" animated bounceInRight small">Software Engineer, Frontend Web Developer, Javascript Programmer.</p>
                        <p className=" animated bounceInLeft small">Solving practical problems using technology.</p> 
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Main