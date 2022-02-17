import React, { useRef } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import MatchSituation_KL1 from './MatchSituation_KL1';
import './MatchesPage.scss';

// K리그 경기 결과를 받아와서 라운드 선택 li로 뿌려준다.
async function getMatches(){
    const response = await axios.get(
        'http://localhost:8080/matches/kl1'
    )
    return response.data;
}

const KLeague1Matches = () => {
    const state = useAsync(getMatches);
    const {loading, error, data: matches} = state;
    const navigate = useNavigate();
    const selectedValue = useRef();
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!matches) return null;
    return (
        <div className='contentArea MatchesPage_KL1'>
            <h3 className='deptTitle'>
                K리그1
            </h3>
            <div className='chooseR'>
                <form onSubmit={()=>{
                        navigate(`/main/matches/kleague1/${selectedValue.current.value}`);
                        // window.location.reload();
                        }}>
                    <select name='round' ref={selectedValue} defaultValue={window.location.pathname.substring(23)} >
                        <option value=""></option>
                        {matches.map(data => {
                            return(
                                <option value={data.round} key={data.round}>{data.round}</option>
                            )
                        })}
                    </select>
                    <span> 라운드</span>
                    <input type="submit" value={"조회"}></input>
                </form>
            </div>
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
                })}
            </ul>
            <Routes>
                <Route path={"/:id"} element={<MatchSituation_KL1 />} />
            </Routes>
        </div>
    );
};

export default KLeague1Matches;