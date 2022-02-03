import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='innerCon'>
                <h2 className='title'>UHFC ARCHIVE 2022</h2>
                <div className='contact'>
                    <a href="https://statelyblu.tistory.com" target="_blank">BLOG</a>
                    <a href="https://instagram.com/statelyblu" target="_blank">INSTAGRAM</a>
                    <a href="https://twitter.com/statelyblu" target="_blank">TWITTER</a>
                    <a href="mailto:statelyblu@gmail.com">E-MAIL</a>
                </div>
                <div className='forAdmin'>
                    <Link to={"/main/admin"}>ADMIN</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;