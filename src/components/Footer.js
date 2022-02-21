import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='innerCon'>
                <h2 className='title'>UHFC ARCHIVE 2022</h2>
                <div className='contact'>
                    <a href="https://statelyblu.tistory.com" target="_blank" rel="noreferrer">BLOG</a>
                    <a href="https://instagram.com/statelyblu" target="_blank" rel="noreferrer">INSTAGRAM</a>
                    <a href="https://twitter.com/statelyblu" target="_blank" rel="noreferrer">TWITTER</a>
                    <a href="mailto:statelyblu@gmail.com">E-MAIL</a>
                </div>
                <div className='forAdmin'>
                    {sessionStorage.admin_pw?
                        <button className='admOut' onClick={()=>{sessionStorage.clear(); document.location.href = '/main'}}>ADM-OUT</button>
                        :
                        <Link to={"/main/admin"}>ADM-IN</Link>
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;