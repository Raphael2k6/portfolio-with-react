import React from 'react';


const About = () => {
    return (
        <div>
            <div className="about-me">
                <div id="section1"> 
                    <h1 id="about">About me</h1>
                    <p className='dib grow bw2'>My name is Raphael Donanu, I am a front-end engineer based in Lagos, Nigeria. I work in a team of experienced engineers at a large E-commerce firm and employ modern technologies, tools and best practices to profer 
                    business solutions. I am creative, innovative, and a good team player. 
                    I have experience working with technologies such as Javascript, React, next.js and Node.js with a good knowledge of databases.
                    I enjoy solving problems and creating business solutions, which may be anything from basic websites to rich interactive web applications. 
                    If you seek that web presence for your business or you are an employer looking to hire, you can get in touch with me.
                    </p>   
                </div>
            <div className="contact" id="section2">
                <div className="contact-icons">
                    <h1 id="contact">Contact Me</h1>
                    <h5><i className="fas fa-envelope-square"></i> raphaeldonanu@gmail.com </h5>
                    <h5><i className="fas fa-mobile-alt"></i> +2348168993327 </h5>
                    <address><i className="fas fa-map-marker-alt"></i> 3b Cocoa Industries Road, Off Akilo Road, Ogba, Lagos State.</address>
                </div>
            </div>
            <div className="sm-handles">
                <h2>Subscribe To My Newsletter</h2>
                <form className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="email" placeholder="Enter Your Email" name="email" />
                    <button type="submit" className="btn--color">Subscribe</button>
                </form>
                <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/raphaeldonanu/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
            </div>
            </div>
        </div>
    )
}


export default About;