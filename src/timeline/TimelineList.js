import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import './TimelineList.scss'

async function getEvents(){
    const response = await axios.get(
        'http://localhost:8080/events'
    )
    return response.data;
}

function TimelineList(props) {
    const state = useAsync(getEvents);
    const {loading, error, data: events} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!events) return null;
    return (
        <div className='timeline innerCon'>
            <h2 className='contentTitle'>TIMELINE</h2>
            <ul>
                {events.map(data => {
                    console.log(typeof data.date)
                    let e_date = new Date(+new Date(data.date) + 3240 * 10000).toISOString().split("T")[0];
                    return(
                        <li key={data.no} className='timelineLi'>
                            <p className='e_date'>{e_date}</p>
                            <p className='e_title'>{data.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TimelineList;