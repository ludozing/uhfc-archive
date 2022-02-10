import axios from 'axios';
import React from 'react';
import useAsync from '../hooks/useAsync';
import './PlayerList.scss'

async function getPlayers(){
    const response = await axios.get(
        'http://localhost:8080/players'
    )
    return response.data;
}

function PlayerList(props) {
    const state = useAsync(getPlayers);
    const {loading, error, data: players} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!players) return null;
    return (
        <div className='contentArea'>
            <ul className='subMenu'>
                <li>ALL</li>
                <li>GK</li>
                <li>DF</li>
                <li>MF</li>
                <li>FW</li>
            </ul>
            <ul className='playerListUl'>
                    {players.map(data => {
                        if (data.position=='GK')
                        return(
                            <li>
                                <a href={`/main/player/detail/${data.b_no}`}>
                                    <div className='uniform forGk'>
                                        <p className='plyrName'>{data.k_name}</p>
                                        <p className='plyrNum'>{data.b_no}</p>
                                    </div>
                                </a>
                            </li>
                        )
                        else
                        return(
                            <li>
                                <a href={`/main/player/detail/${data.b_no}`}>
                                    <div className='uniform forFp'>
                                        <p className='plyrName'>{data.k_name}</p>
                                        <p className='plyrNum'>{data.b_no}</p>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
}

export default PlayerList;