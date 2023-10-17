import React from 'react';
import './Intro.css'
import {Link}  from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
    return (
        <section id='intro'>
             <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>I'm <span className="introName">Faizul Haque</span><br/> 
              <Typewriter words={[
                                 "(.Net)Developer", 
                                 "Web Application Developer",]}
                                    loop={"auto"}
                                    cursor
                                    cursorStyle=""
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1000}/></span>
              <p className='introPara'>Junior Dotnet Developer with a passion for Web Applications <br/>
                 Development. Passionate about learning new technologies.<br/> Seeking
                 opportunities and challanges that will improve my skill set.
              </p>
              <Link><button className='btn'><img src='{btnImg}' alt=''/>About Me</button></Link>
            </div>
            <img src='{bg}' alt='Profile' className='bg'/>
        </section>
    );
};

export default Intro;