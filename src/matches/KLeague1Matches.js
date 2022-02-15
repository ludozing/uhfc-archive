import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MatchSituation_KL1 from './MatchSituation_KL1';

const KLeague1Matches = () => {
    return (
        <div className='contentArea'>
            <h3 className='deptTitle'>K리그1</h3>
            <ul className='miniMenu'>
                {/* <li className="roundNum"><Link to={`/main/matches/${k리그테이블값의라운드}`}>k리그테이블값의라운드</Link></li> */}
            </ul>
            <Routes>
                <Route path={"/:id"} element={<MatchSituation_KL1/>} />
            </Routes>
        </div>
    );
};

export default KLeague1Matches;