import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTimeline from './DetailTimeline';
import TimelineList from './TimelineList';

function Timeline(props) {
    return (
            <Routes>
                <Route path={"/"} element={<TimelineList/>} />
                <Route path={"/:id"} element={<DetailTimeline/>} />
            </Routes>
    );
}

export default Timeline;