import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TimelineList from './TimelineList';
import UpdateTimeline from './UpdateTimeline';

function Timeline(props) {
    return (
        <div className='timeline contentArea'>
            <h2 className='contentTitle'>TIMELINE</h2>
            <Routes>
                <Route path={"/"} element={<TimelineList/>} />
                <Route path={"/add"} element={<UpdateTimeline/>} />
            </Routes>
        </div>
    );
}

export default Timeline;