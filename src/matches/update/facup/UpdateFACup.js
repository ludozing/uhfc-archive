import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import UpdateMatchFormation_FAC from './UpdateMatchFormation';
import UpdateMatchSituation_FAC from './UpdateMatchSituation';
import UpdateLeagueTable_FAC from './UpdateLeagueTable';

function UpdateFACup(props) {
    const param = useParams();
    const {id} = param;
    return (
        <div className='contentArea'>
            <h3 className='deptTitle'>FA컵</h3>
            <Routes>
                <Route path='/' element={<UpdateMatchFormation_FAC round={id} />} />
                <Route path='/situation' element={<UpdateMatchSituation_FAC round={id} />} />
                <Route path='/leaguetable' element={<UpdateLeagueTable_FAC round={id} />} />
            </Routes>
        </div>
    );
}

export default UpdateFACup;