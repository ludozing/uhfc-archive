import React from 'react';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import { API_URL } from '../../config/constants';

function LeagueTable({round}) {
    async function getTable(){
        const response = await axios.get(
            `${API_URL}/leaguetable/kl1/${round}`
        )
        return response.data;
    }

    const state = useAsync(getTable);
    const {loading, error, data: table} = state;
    if(loading) return <span></span>
    if(error) return <span>ERROR!</span>
    if(!table) return null;
    return (
        <ul className='leagueTable'>
            {
                table.map(data => {
                    if(data.team==="울산 현대"){
                        return(
                            <li key={data.dataId} className='uhfc' style={{backgroundColor: `${data.color}`}}>
                                <div className='teamLogo'>
                                    <img src={data.logo_url} alt={data.team}/>
                                </div>
                                <div className='pointsArea'>
                                    <p className='points'>{data.points}</p>
                                </div>
                            </li>
                        )
                    }else {
                        return(
                            <li key={data.dataId} style={{backgroundColor: `${data.color}`}}>
                                <div className='teamLogo'>
                                    <img src={data.logo_url} alt={data.team}/>
                                </div>
                                <div className='pointsArea'>
                                    <p className='points'>{data.points}</p>
                                </div>
                            </li>
                        )
                    }
                })

            }
        </ul>
    );
}

export default LeagueTable;