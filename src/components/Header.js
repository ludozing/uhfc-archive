import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='innerCon'>
                <h1 id='mainTitle' className='title'><Link to={"/"}>UHFC <strong>ARCHIVE</strong> 2022</Link></h1>
                <ul className='topMenu'>
                    <li><Link to={"/main"}>HOME</Link></li>
                    <li><Link to={"/main/timeline"}>TIMELINE</Link></li>
                    <li>PLAYERS</li>
                    <li>MATCHES</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;