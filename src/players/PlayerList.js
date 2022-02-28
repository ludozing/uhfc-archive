import axios from 'axios';
import React, { useState } from 'react';
import useAsync from '../hooks/useAsync';
import './PlayerList.scss'
import { API_URL } from '../config/constants';

async function getPlayers(){
    const response = await axios.get(
        `${API_URL}/players`
    )
    return response.data;
}
function PlayerList(props) {
    const state = useAsync(getPlayers);
    const {loading, error, data: players} = state;
    const defaultState = {
        GK: false,
        DF: false,
        MF: false,
        FW: false
    }
    const [ filtered, setFiltered] = useState(defaultState);
    function onFiltered(props){
        return(
            setFiltered({
                ...defaultState, [props]:true
            })
        )
    }
    let {GK,DF,MF,FW} = filtered;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!players) return null;
    return (
        <div className='contentArea'>
            <ul className='subMenu'>
                <li key={"ALL"} onClick={()=> setFiltered(defaultState)} className={
                    !GK&&!DF&&!MF&&!FW? "on":""
                    }>ALL</li>
                <li key="GK" onClick={()=> onFiltered("GK")} className={GK? "on":""}>GK</li>
                <li key="DF" onClick={()=> onFiltered("DF")} className={DF? "on":""}>DF</li>
                <li key="MF" onClick={()=> onFiltered("MF")} className={MF? "on":""}>MF</li>
                <li key="FW" onClick={()=> onFiltered("FW")} className={FW? "on":""}>FW</li>
            </ul>
            <ul className='playerListUl'>
                    {players.map(data => {
                        if(GK) {
                            if(data.position==='GK')
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forGk'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        }
                        else if(DF) {
                            if(data.position==='DF')
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forFp'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        }
                        else if(MF) {
                            if(data.position==='MF')
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forFp'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        }
                        else if(FW) {
                            if(data.position==='FW')
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forFp'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        }
                        else {
                            if(data.position==='GK')
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forGk'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                            else
                            return(
                                <li key={data.b_no}>
                                    <a href={`/main/players/detail/${data.b_no}`}>
                                        <div className='uniform forFp'>
                                            <p className='plyrName'>{data.k_name}</p>
                                            <p className='plyrNum'>{data.b_no}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        }
                    })}
            </ul>
        </div>
    );
}

export default PlayerList;