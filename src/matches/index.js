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
                <li><Link to={"/main/matches/kleague1"}>K리그1</Link></li>
                <li><Link to={"/main/matches/acl"}>ACL</Link></li>
                <li><Link to={"/main/matches/facup"}>FA컵</Link></li>
            </ul>
            <Routes>
                <Route path={"/kleague1/:id"} element={<KLeague1Matches/>}/>
                <Route path={"/acl/:id"} element={<ACLMatches/>}/>
                <Route path={"/facup/:id"} element={<FACupMatches/>}/>
            </Routes>
        </div>
    );
}

export default MatchesPage;