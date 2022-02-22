import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../MatchesPage.scss'
import './UpdateMatchesPage.scss';
import SelectCompetition from './SelectCompetition';
import UpdateKleague1 from './kleague1/UpdateKleague1';
import UpdateACL from './acl/UpdateACL';
import UpdateFACup from './facup/UpdateFACup';

function UpdateMatchResults(props) {
    return (
        <Routes>
            <Route path='/' element={<SelectCompetition/>} />
            <Route path='/kleague1/:id/*' element={<UpdateKleague1/>} />
            <Route path='/acl/:id/*' element={<UpdateACL/>} />
            <Route path='/facup/:id/*' element={<UpdateFACup/>} />
        </Routes>
    );
}

export default UpdateMatchResults;