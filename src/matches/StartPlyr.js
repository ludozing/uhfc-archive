import React from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

function StartPlyr({b_no, className}) {
    async function getPlayer(){
        const response = await axios.get(
            `http://localhost:8080/players/${b_no}`
        )
        return response.data;
    }

    const state = useAsync(getPlayer);
    const {loading, error, data: player} = state;
    // if(loading) return <div className='sta'>로딩중...</div>
    // if(error) return <div className='sta'>Error</div>
    if(!player) return null;
    return (
        <a href={`/main/players/detail/${player[0].b_no}`}>
            <div className={`sta uniform ${className}`}>
                <p className='plyrNum'>{player[0].b_no}</p>
            </div>
                <p className='luPlyrName'>{player[0].k_name}</p>
        </a>
    );
}

StartPlyr.defaultProps = {
    className: "",
};

export default StartPlyr;