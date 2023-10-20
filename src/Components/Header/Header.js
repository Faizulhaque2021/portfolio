import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'> 
            <img src='/Asstes/jpeg-2.jpg' alt=''/>
            <ul className='navbar-nav'>
                    <li className='nav-item'><a href='#about'>About</a></li>
                    <li className='nav-item'><a href='#service'>Service</a></li>
                    <li className='nav-item'><a href='#education'>Education</a></li>
                    <li className='nav-item'><a href='#projects'>Projects</a></li>
                    <li className='nav-item'><a href='#blog'>Blog</a></li>
                    <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
            <button className='manuBtn' onClick={downloadPdf}>Resume</button>
        </div>  
    ); 
};


const downloadPdf = () => {
    fetch("Md. Faizul-Haque-Resume.pdf").then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Md. Faizul-Haque-Resume.pdf";
            alink.click();
        });
    });
};

export default Header;
