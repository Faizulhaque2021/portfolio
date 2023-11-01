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
        <div className='navbar p-2 flex justify-between items-center bg-opacity-40 transition-all case-in border-x-2 rounded-full bg-grey-700 backdrop-blur-md text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-200 dark:bg-neutral-400 lg:rounded-lg border-[#889200]'> 
            <img src='/src/Images/jpeg-2.jpg' alt=''/>
            <ul className='navbar-nav'>
                    <li className='nav-item'><a href='#intro'>About</a></li>
                    <li className='nav-item'><a href='#services'>Services</a></li>
                    <li className='nav-item'><a href='#education'>Education</a></li>
                    <li className='nav-item'><a href='#projects'>Projects</a></li>
                    <li className='nav-item'><a href='#skill'>Skill</a></li>
                    <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
            <button className='manuBtn flex items-center' onClick={downloadPdf}>Resume</button>
        </div>  
    ); 
};




export default Header;
