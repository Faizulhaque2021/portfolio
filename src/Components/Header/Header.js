import React from 'react';
import './Header.css'

const Header = () => {
    const downloadPdf = () => {
        fetch("Faizul_Haque-CV.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Faizul_Haque-CV.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className='navbar'> 
            <img src='/src/Images/jpeg-2.jpg' alt=''/>
            <ul className='navbar-nav'>
                    <li className='nav-item'><a href='#about'>About</a></li>
                    <li className='nav-item'><a href='#service'>Service</a></li>
                    <li className='nav-item'><a href='#education'>Education</a></li>
                    <li className='nav-item'><a href='#projects'>Projects</a></li>
                    <li className='nav-item'><a href='#skill'>Skill</a></li>
                    <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
            <button className='manuBtn' onClick={downloadPdf}>Resume</button>
        </div>  
    ); 
};




export default Header;
