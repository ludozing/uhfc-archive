import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import './TimelineList.scss'
import { API_URL } from '../config/constants';

async function getEvents(){
    const response = await axios.get(
        `${API_URL}/events`
    )
    return response.data;
}

function TimelineList(props) {
    const state = useAsync(getEvents);
    const {loading, error, data: events} = state;
    const defaultState = {
        ALL: true, laDEC: false, JAN: false, FEB: false, MAR: false, APR: false, MAY: false, JUN: false, JUL: false, AUG: false, SEP: false, OCT:false, NOV: false, DEC: false
    }
    const [ filtered, setFiltered ] = useState(defaultState);
    function onFiltered(props){
        return(
            setFiltered({
                ...defaultState, ALL:false, [props]:true
            })
        )
    }
    let { ALL, laDEC, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } = filtered;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!events) return null;
    return (
        <div className='timeline contentArea'>
            <h2 className='contentTitle'>TIMELINE</h2>
            {sessionStorage.admin_pw? <Link to={"/main/timeline/add"} className="forAdmin updateBtns" >UPDATE</Link>:""}
            <ul className='timelinePageMenu subMenu'>
                <li key="ALL" onClick={()=>onFiltered("ALL")} className={ALL?"on":""}>전체</li>
                <li key="laDEC" onClick={()=>onFiltered("laDEC")} className={laDEC?"on":""}>2021년 12월</li>
                <li key="JAN" onClick={()=>onFiltered("JAN")} className={JAN?"on":""}>1월</li>
                <li key="FEB" onClick={()=>onFiltered("FEB")} className={FEB?"on":""}>2월</li>
                <li key="MAR" onClick={()=>onFiltered("MAR")} className={MAR?"on":""}>3월</li>
                <li key="APR" onClick={()=>onFiltered("APR")} className={APR?"on":""}>4월</li>
                <li key="MAY" onClick={()=>onFiltered("MAY")} className={MAY?"on":""}>5월</li>
                <li key="JUN" onClick={()=>onFiltered("JUN")} className={JUN?"on":""}>6월</li>
                <li key="JUL" onClick={()=>onFiltered("JUL")} className={JUL?"on":""}>7월</li>
                <li key="AUG" onClick={()=>onFiltered("AUG")} className={AUG?"on":""}>8월</li>
                <li key="SEP" onClick={()=>onFiltered("SEP")} className={SEP?"on":""}>9월</li>
                <li key="OCT" onClick={()=>onFiltered("OCT")} className={OCT?"on":""}>10월</li>
                <li key="NOV" onClick={()=>onFiltered("NOV")} className={NOV?"on":""}>11월</li>
                <li key="DEC" onClick={()=>onFiltered("DEC")} className={DEC?"on":""}>12월</li>
            </ul>
            <ul className='timelineUl'>
                {events.map(data => {
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
                    if(ALL){
                        switch(data.dept){
                            case "video":
                                return(
                                    <li key={data.no} className='timelineLi'>
                                        {e_date}
                                        <p className='e_dept e_video'>[VIDEO]</p>
                                        <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                    </li>
                                )
                            case "article":
                                return(
                                    <li key={data.no} className='timelineLi'>
                                        {e_date}
                                        <p className='e_dept e_article'>[ARTICLE]</p>
                                        <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                    </li>
                                )
                            case "notice":
                                return(
                                    <li key={data.no} className='timelineLi'>
                                        {e_date}
                                        <p className='e_dept e_notice'>[NOTICE]</p>
                                        <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                    </li>
                                )
                            case "match":
                                return(
                                    <li key={data.no} className='timelineLi'>
                                        {e_date}
                                        <p className='e_dept e_match'>[MATCH]</p>
                                        <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                    </li>
                                )
                            default:
                                break;
                        }
                    }
                    else if(laDEC){
                        if(dateData[0]==='2021' && dateData[1]==='12'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(JAN){
                        if(dateData[0]==='2022' && dateData[1]==='01'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(FEB){
                        if(dateData[0]==='2022' && dateData[1]==='02'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(MAR){
                        if(dateData[0]==='2022' && dateData[1]==='03'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(APR){
                        if(dateData[0]==='2022' && dateData[1]==='04'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(MAY){
                        if(dateData[0]==='2022' && dateData[1]==='05'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(JUN){
                        if(dateData[0]==='2022' && dateData[1]==='06'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(JUL){
                        if(dateData[0]==='2022' && dateData[1]==='07'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(AUG){
                        if(dateData[0]==='2022' && dateData[1]==='08'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(SEP){
                        if(dateData[0]==='2022' && dateData[1]==='09'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(OCT){
                        if(dateData[0]==='2022' && dateData[1]==='10'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(NOV){
                        if(dateData[0]==='2022' && dateData[1]==='11'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }
                    else if(DEC){
                        if(dateData[0]==='2022' && dateData[1]==='12'){
                            switch(data.dept){
                                case "video":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_video'>[VIDEO]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "article":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_article'>[ARTICLE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "notice":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_notice'>[NOTICE]</p>
                                            <p className='e_title'><a href={data.refer_url} target="_blank" rel="noreferrer">{data.title}</a></p>
                                        </li>
                                    )
                                case "match":
                                    return(
                                        <li key={data.no} className='timelineLi'>
                                            {e_date}
                                            <p className='e_dept e_match'>[MATCH]</p>
                                            <p className='e_title'><a href={data.refer_url}>{data.title}</a></p>
                                        </li>
                                    )
                                default:
                                    break;
                            }    
                        }
                    }

                })}
            </ul>
        </div>
    );
}

export default TimelineList;