import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import KLeague1Matches from './KLeague1Matches';
import ACLMatches from './ACLMatches';
import FACupMatches from './FACupMatches';

function MatchesPage(props) {
    return (
        <div className='matchesPage innerCon'>
            <h2 className='contentTitle'>MATCH RESULTS</h2>
            <ul className='matchPageMenu'>
                <li><Link to={"/"}>K리그1</Link></li>
                <li><Link to={"/acl"}>ACL</Link></li>
                <li><Link to={"/facup"}>FA컵</Link></li>
            </ul>
            <Routes>
                <Route path={"/"} element={<KLeague1Matches/>}/>
                <Route path={"/acl"} element={<ACLMatches/>}/>
                <Route path={"/facup"} element={<FACupMatches/>}/>
            </Routes>
        </div>
    );
}

export default MatchesPage;