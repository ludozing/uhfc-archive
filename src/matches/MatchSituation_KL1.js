import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import LoadTeamLogo from './LoadTeamLogo';
import './MatchesPage.scss';
import MatchFormation_KL1 from './MatchFormation_KL1';


function MatchSituation_KL1() {
    const param = useParams();
    const {id} = param;
    // 선택된 라운드 정보 불러오기
    async function getResult(){
        const response = await axios.get(
            `http://localhost:8080/matches/kl1/${id}`
        )
        return response.data;
    }
    const state = useAsync(getResult);
    const {loading, error, data: result} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!result) return null;
    return (
        <div className='matchSituation'>
            <h4 className='matchTitle'>
                {!result[0].isAwaygame ? <p className='h_a home'>HOME</p> : <p className='h_a away'>AWAY</p>}
                <p>vs {result[0].against}</p>
            </h4>
            <div className='matchDetail'>                
                <div className='formationArea'>
                    <MatchFormation_KL1 />
                </div>
                <div className='matchResultArea'>
                {!result[0].isAwaygame ?
                        // 홈경기일 때
                        <div className='matchResult'>
                            {/* 울산 */}
                            <div className='uhfc'>
                                <img className='teamLogo' src='/images/teams/ulsanhyundai.svg' alt="울산 현대" />
                                <h4 className='teamName'>울산 현대</h4>
                            </div>
                            {/* 스코어 */}
                            <div className='score'>
                                <h4>
                                    {result[0].gf} : {result[0].ga}
                                </h4> 
                            </div>
                            {/* 상대팀 */}
                            <LoadTeamLogo teamName={result[0].against} />
                        </div>
                    :
                        // 원정 경기일 때
                        <div className='matchResult'>
                            {/* 상대팀 */}
                            <LoadTeamLogo teamName={result[0].against} />
                            {/* 스코어 */}
                            <div className='score'>
                                <h4>
                                    {result[0].ga} : {result[0].gf}
                                </h4> 
                            </div>
                            {/* 울산 */}
                            <div className='uhfc'>
                                <img className='teamLogo' src='/images/teams/ulsanhyundai.svg' alt="울산 현대" />
                                <h4 className='teamName'>울산 현대</h4>
                            </div>
                        </div>
                }
                    경기 결과 골, 어시스트
                </div>
                <div className='leagueTableArea'></div>
            </div>
        </div>
    )
}

export default MatchSituation_KL1;