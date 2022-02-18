import React from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

function LeagueTable({round}) {
    async function getTable(){
        const response = await axios.get(
            `http://localhost:8080/leaguetable/kl1/${round}`
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
            <li>
                <p className='rank'></p>
                <div className='teamLogo'>
                    <img src={}/>
                </div>
                <p className='points'></p>
            </li>
        </ul>
    );
}

export default LeagueTable;{round}