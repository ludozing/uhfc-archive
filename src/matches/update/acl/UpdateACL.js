import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import UpdateMatchFormation from './UpdateMatchFormation';
import UpdateMatchSituation from './UpdateMatchSituation';
import UpdateLeagueTable from './UpdateLeagueTable';

function UpdateACL(props) {
    const param = useParams();
    const {id} = param;
    return (
        <div className="contentArea">
            <h3 className='deptTitle'>ACL</h3>
            <Routes>
                <Route path='/' element={<UpdateMatchFormation round={id} />} />
                <Route path='/situation' element={<UpdateMatchSituation round={id} />} />
                <Route path='/leaguetable' element={<UpdateLeagueTable round={id} />} />
            </Routes>
        </div>
    );
}

export default UpdateACL;