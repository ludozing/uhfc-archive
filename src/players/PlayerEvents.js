import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import axios from 'axios';
import './PlayerList.scss';
import { API_URL } from '../config/constants';

function PlayerEvents({plyr_b_no}) {
    
    // 이벤트 데이터 받아오기
    async function getEvents(){
        const response = await axios.get(
            `${API_URL}/events/${plyr_b_no}`
        )
        return response.data;
    }
    const state = useAsync(getEvents)
    const {loading, error, data: events} = state;
    if(loading) return <TableRow><TableCell colSpan={3}>로딩중...</TableCell></TableRow>
    if(error) return <TableRow><TableCell colSpan={3}>페이지를 나타낼 수 없습니다.</TableCell></TableRow>
    if(!events) return null;
    return(
        events.map(data => {
            let k_date = new Date(+new Date(data.date) + 3240 * 10000).toISOString().split("T")[0];
            let dateData = k_date.split("-");
            let e_year = dateData[0]+"년";
            let e_month = (dateData[1].charAt(0)==='0'? dateData[1].charAt(1):dateData[1])+"월";
            let e_day = (dateData[2].charAt(0)==='0'? dateData[2].charAt(1):dateData[2])+"일"
            let e_date = <p className='e_date'>
                <span className='e_year'>{e_year}</span>
                <span className='e_month'>{e_month}</span>
                <span className='e_day'>{e_day}</span>
            </p>
            switch(data.dept){
                case "video":
                    return(
                        <TableRow key={data.no}>
                            <TableCell>{e_date}</TableCell>
                            <TableCell className='pe_dept' style={{color: 'var(--red-color-td)'}}>[VIDEO]</TableCell>
                            <TableCell><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></TableCell>
                        </TableRow>
                    )
                case "article":
                    return(
                        <TableRow key={data.no}>
                            <TableCell>{e_date}</TableCell>
                            <TableCell className='pe_dept' style={{color: '#555'}}>[ARTICLE]</TableCell>
                            <TableCell><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></TableCell>
                        </TableRow>
                    )
                case "notice":
                    return(
                        <TableRow key={data.no}>
                            <TableCell>{e_date}</TableCell>
                            <TableCell className='pe_dept' style={{color: 'var(--yellow-color-td)'}}>[NOTICE]</TableCell>
                            <TableCell><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></TableCell>
                        </TableRow>
                    )
                case "match":
                    return(
                        <TableRow key={data.no}>
                            <TableCell>{e_date}</TableCell>
                            <TableCell className='pe_dept' style={{color: 'var(--blue-color-td)'}}>[MATCH]</TableCell>
                            <TableCell><a href={data.refer_url}>{data.title}</a></TableCell>
                        </TableRow>
                    )
                default:
                    return null;
            }    
        })
    )
}

export default PlayerEvents;