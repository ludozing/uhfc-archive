import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import UpdateMatchFormation_ACL from './UpdateMatchFormation';
import UpdateMatchSituation_ACL from './UpdateMatchSituation';
import UpdateLeagueTable_ACL from './UpdateLeagueTable';

function UpdateACL(props) {
    const param = useParams();
    const {id} = param;
    return (
        <div className="contentArea">
            <h3 className='deptTitle'>ACL</h3>
            <Routes>
                <Route path='/' element={<UpdateMatchFormation_ACL round={id} />} />
                <Route path='/situation' element={<UpdateMatchSituation_ACL round={id} />} />
                <Route path='/leaguetable' element={<UpdateLeagueTable_ACL round={id} />} />
            </Routes>
        </div>
    );
}

export default UpdateACL;