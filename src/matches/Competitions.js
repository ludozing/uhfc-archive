import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import KLeague1Matches from './KLeague1Matches';
import ACLMatches from './ACLMatches';
import FACupMatches from './FACupMatches';
import './MatchesPage.scss';

function Competitions(props) {
    const defaultState = {
        KL1: false,
        ACL: false,
        FAC: false
    }
    const [ clicked, setClicked ] = useState(defaultState);
    function onClicked(props){
        return(
            setClicked({
                ...defaultState, [props]: true
            })
        )
    }
    let {KL1, ACL, FAC} = clicked;
    return (
        <div>
            <ul className='matchPageMenu subMenu'>
                <li onClick={() => onClicked("KL1")} className={KL1? "on":""}>
                    <Link to={"/main/matches/kleague1/1"}>K리그1</Link>
                </li>
                <li onClick={() => onClicked("ACL")} className={ACL? "on":""}>
                    <Link to={"/main/matches/acl"}>ACL</Link>
                </li>
                <li onClick={() => onClicked("FAC")} className={FAC? "on":""}>
                    <Link to={"/main/matches/facup"}>FA컵</Link>
                </li>
            </ul>
            <Routes>
                <Route path={"/kleague1/*"} element={<KLeague1Matches/>}/>
                <Route path={"/acl"} element={<ACLMatches/>}/>
                <Route path={"/facup"} element={<FACupMatches/>}/>
            </Routes>
        </div>
    );
}

export default Competitions;