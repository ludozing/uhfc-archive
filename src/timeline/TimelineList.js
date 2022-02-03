import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import './TimelineList.scss'

async function getCases(){
    const response = await axios.get(
        'http://localhost:8080/cases'
    )
    return response.data;
}
function dateCoordination(d){
    return (
        new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString()
    )
}

function TimelineList(props) {
    const state = useAsync(getCases);
    const {loading, error, data: cases} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!cases) return null;
    return (
        <div className='timeline innerCon'>
            <h2>TIMELINE</h2>
            <ul>
                {cases.map(data => {
                    console.log(typeof data.date)
                    let c_date = new Date(+new Date(data.date) + 3240 * 10000).toISOString().split("T")[0];
                    return(
                        <li key={data.no} className='timelineLi'>
                            <p className='c_date'>{c_date}</p>
                            <p className='c_title'>{data.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TimelineList;