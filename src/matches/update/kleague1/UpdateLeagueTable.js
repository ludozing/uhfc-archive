import React from 'react';
import { API_URL } from '../../../config/constants';
import axios from 'axios';
import useAsync from '../../../hooks/useAsync';
import LeagueTableInput from './LeagueTableInput';

function UpdateLeagueTable_KL1({round}) {
    async function getTable(){
        const response = await axios.get(
            `${API_URL}/leaguetable/kl1/${round - 1}`
        )
        return response.data;
    }
    const state = useAsync(getTable);
    const {loading, error, data: table} = state;
    if(loading) return <span></span>
    if(error) return <span>ERROR!</span>
    if(!table) return null;
    return (
        <div className='leagueTableArea'>
            <LeagueTableInput table={table} round={round}/>
        </div>
    );
}

export default UpdateLeagueTable_KL1;