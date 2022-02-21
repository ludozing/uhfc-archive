import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './MatchesPage.scss';
import Competitions from './Competitions';
import UpdateMatchResults from './UpdateMatchResults';

function MatchesPage(props) {
    return (
        <div className='matchesPage contentArea'>
            <h2 className='contentTitle'>MATCH RESULTS</h2>
            {sessionStorage.admin_pw? <Link to={"/main/matches/add"} className="forAdmin updateBtns" >UPDATE</Link>:""}
            <Routes>
                <Route path={"/*"} element={<Competitions />} />
                <Route path={"/add"} element={<UpdateMatchResults />} />
            </Routes>
            
        </div>
    );
}

export default MatchesPage;