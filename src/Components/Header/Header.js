import React from 'react';
import './Header.css'
import {Link}  from 'react-scroll'

const Header = () => {
    return (
        <div className='navbar'> 
            <img src='' alt=''/>
            <div className='desktopMenu'>
             <Link className='desktopMenuListItem'>About</Link>
             <Link className='desktopMenuListItem'>Service</Link>
             <Link className='desktopMenuListItem'>Education</Link>
             <Link className='desktopMenuListItem'>Projects</Link>
             <Link className='desktopMenuListItem'>Blog</Link>
             <Link className='desktopMenuListItem'>Contact</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src='' alt='' className='desktopMenuImg'/>Resume</button>
        </div>
    );
};

export default Header;