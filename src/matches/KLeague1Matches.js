import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import MatchSituation from './kleague1/MatchSituation';
import { API_URL } from '../config/constants';
import Loading from '../components/Loading';

// K리그 경기 결과를 받아와서 라운드 선택 li로 뿌려준다.
async function getMatches(){
    const response = await axios.get(
        `${API_URL}/matches/kl1`
    )
    return response.data;
}

const KLeague1Matches = () => {
    const state = useAsync(getMatches);
    const {loading, error, data: matches} = state;
    if(loading) return <Loading />
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!matches) return null;
    return (
        <div className='contentArea MatchesPage_KL1'>
            <h3 className='deptTitle'>
                K리그1
            </h3>
            <ul className='roundNav'>
                {matches.map(data => {
                    if(!data.isPlayed){
                        return <li className="roundNum preMatch" key={data.round}>{data.round}</li>
                    }
                    else if(data.gf > data.ga) {
                        return <li className="roundNum win" key={data.round}><a href={`/main/matches/kleague1/${data.round}`}>{data.round}</a></li>
                    }
                    else if(data.gf === data.ga) {
                        return <li className="roundNum draw" key={data.round}><a href={`/main/matches/kleague1/${data.round}`}>{data.round}</a></li>
                    }
                    else if(data.gf < data.ga) {
                        return <li className="roundNum lose" key={data.round}><a href={`/main/matches/kleague1/${data.round}`}>{data.round}</a></li>
                    }
                    else return null;
                })}
            </ul>
            <Routes>
                <Route path={"/:id"} element={<MatchSituation />} />
            </Routes>
        </div>
    );
};

export default KLeague1Matches;