import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TimelineList from './TimelineList';
import UpdateTimeline from './UpdateTimeline';

function Timeline(props) {
    return (
            <Routes>
                <Route path={"/"} element={<TimelineList/>} />
                <Route path={"/add"} element={<UpdateTimeline/>} />
            </Routes>
    );
}

export default Timeline;