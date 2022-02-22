import React from 'react';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import Sub_icon from '../images/sub_icon.jpg';

function SubPlyr({b_no, time}) {
    async function getPlayer(){
        const response = await axios.get(
            `http://localhost:8080/players/${b_no}`
        )
        return response.data;
    }

    const state = useAsync(getPlayer);
    const {loading, error, data: player} = state;
    if(loading) return <span></span>
    if(error) return <span>ERROR!</span>
    if(!player) return null;
    return (
        <a href={`/main/players/detail/${player[0].b_no}`}>
            <div className='nameTag'>
                <p className='sub luPlyrName'>{player[0].k_name}</p>
                <img src={Sub_icon} alt='교체' className='subIcon' />
                <span className='subTime'>{time}'</span>
                {player[0].u22player ? <span className='u22plyr'>U22</span>:""}
            </div>
        </a>
    );
}

export default SubPlyr;