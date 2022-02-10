import axios from 'axios';
import React from 'react';
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
        <div className='timeline contentArea'>
            <h2 className='contentTitle'>TIMELINE</h2>
            <ul className='timelinePageMenu subMenu'>
                <li>2021년 12월</li>
                <li>1월</li>
                <li>2월</li>
                <li>3월</li>
                <li>4월</li>
                <li>5월</li>
                <li>6월</li>
                <li>7월</li>
                <li>8월</li>
                <li>9월</li>
                <li>11월</li>
                <li>12월</li>
              
            </ul>
            <ul className='timelineUl'>
                {events.map(data => {
                    let k_date = new Date(+new Date(data.date) + 3240 * 10000).toISOString().split("T")[0];
                    let dateData = k_date.split("-");
                    let e_date = dateData[0]+"년 "+dateData[1]+"월 "+dateData[2]+"일"
                    if(data.dept=="video")
                        return(
                            <li key={data.no} className='timelineLi'>
                                <p className='e_date'>{e_date}</p>
                                <p className='e_dept e_video'>[VIDEO]</p>
                                <p className='e_title'>
                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                        {data.title}
                                    </a>
                                </p>
                            </li>
                        )
                    else if (data.dept=="article")
                        return(
                            <li key={data.no} className='timelineLi'>
                                <p className='e_date'>{e_date}</p>
                                <p className='e_dept e_article'>[ARTICLE]</p>
                                <p className='e_title'>
                                    <a href={data.refer_url} target="_blank" rel="noreferrer">
                                        {data.title}
                                    </a>
                                </p>
                            </li>
                        )
                    else if (data.dept=="notice")
                        return(
                            <li key={data.no} className='timelineLi'>
                                <p className='e_date'>{e_date}</p>
                                <p className='e_dept e_notice'>[NOTICE]</p>
                                <p className='e_title'>
                                    <a href={data.refer_url} target="_blank" rel="noreferrer">
                                        {data.title}
                                    </a>
                                </p>
                            </li>
                        )
                })}
            </ul>
        </div>
    );
}

export default TimelineList;