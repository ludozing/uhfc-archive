import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailPlayer from './DetailPlayer';
import PlayerList from './PlayerList';

function PlayersPage(props) {
    return (
        <div className='playersPage contentArea'>
            <h2 className='contentTitle'>PLAYERS</h2>
            <Routes>
                <Route path={"/"} element={<PlayerList/>}/>
                <Route path={"/detail/:id"} element={<DetailPlayer/>}/>
            </Routes>
        </div>
    );
}

export default PlayersPage;