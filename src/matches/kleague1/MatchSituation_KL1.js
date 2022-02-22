import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../../hooks/useAsync';
import LeagueTable from './LeagueTable';
import LoadAgainstTeam from '../comps/LoadAgainstTeam';
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

    // 하위 컴포넌트 LoadAgainstTeam에서 teamColor 받아오기
    const [teamColor, setTeamColor] = useState('#fff');
    const getTeamColor = (color) => setTeamColor(color);
    
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
                    <h4 className='sectionTitle'>Starting XI</h4>
                    <MatchFormation_KL1 />
                </div>
                <div className='matchResultArea'>
                    <h4 className='sectionTitle'>Match Result</h4>
                    <div className='videoArea'>
                        <iframe width="448" height="252" src={result[0].vid_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    {!result[0].isAwaygame ?
                            // 홈경기일 때
                            <div className='matchResult'>
                                {/* 울산 */}
                                <div className='uhfc mrLeft'>
                                    <div className='teamArea'>
                                        <img className='teamLogo' src='/images/teams/ulsanhyundai.svg' alt="울산 현대" />
                                        <h4 className='teamName'>울산 현대</h4>
                                    </div>
                                    <p className='score'>{result[0].gf}</p>
                                </div>
                                {/* 상대팀 */}
                                <LoadAgainstTeam teamName={result[0].against} goal={result[0].ga} l_r={"mrRight"} getTeamColor={getTeamColor} />
                            </div>
                        :
                            // 원정 경기일 때
                            <div className='matchResult'>
                                {/* 상대팀 */}
                                <LoadAgainstTeam teamName={result[0].against} goal={result[0].ga} l_r={"mrLeft"} getTeamColor={getTeamColor} />
                                {/* 울산 */}
                                <div className='uhfc mrRight'>
                                    <div className='teamArea'>
                                        <img className='teamLogo' src='/images/teams/ulsanhyundai.svg' alt="울산 현대" />
                                        <h4 className='teamName'>울산 현대</h4>
                                    </div>
                                    <p className='score'>{result[0].gf}</p>
                                </div>
                            </div>
                    }
                    {/* 경기 결과 골, 어시스트 */}
                    <div className='matchSituationArea'>
                        <ul>
                            {
                                result.map(data => {
                                    // 골 상황
                                    // 울산 선수의 골일 경우
                                    if(data.ulsanScorer) {
                                        // 득점 선수 정보 출력
                                        if(!data.isOG){
                                            return (
                                                <li className={!data.isAwaygame? 'gf atHome':'gf atAway'} key={data.dataId}>
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        <span>{data.ulsanScorer}</span>
                                                        {data.ulsanAssist ? <span className='assist'>(A: {data.ulsanAssist})</span>:''}
                                                        {data.isPK ? <span className='isPK icons'></span>:''}
                                                    </a>
                                                </li>
                                            )
                                        }
                                        // 울산 선수의 골이지만 자책골일 경우
                                        else if(data.isOG){
                                            return (
                                                <li
                                                    className={!data.isAwaygame? 'ga atAway':'ga atHome'}
                                                    key={data.dataId}
                                                    style={
                                                        !data.isAwaygame ? {background: `linear-gradient(to left, ${teamColor} 45%, transparent)`}:{background: `linear-gradient(to right, ${teamColor} 45%, transparent)`}
                                                    }
                                                >
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        <span>{data.ulsanScorer}</span>
                                                        <span className='isOG'>(OG)</span>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    }
                                    // 상대 선수의 골일 경우
                                    if(data.againstScorer) {
                                        // 득점 선수 정보 출력
                                        if(!data.isOG){
                                            return (
                                                <li
                                                    className={!data.isAwaygame? 'ga atAway':'ga atHome'}
                                                    key={data.dataId}
                                                    style={
                                                        !data.isAwaygame ? {background: `linear-gradient(to left, ${teamColor} 45%, transparent)`}:{background: `linear-gradient(to right, ${teamColor} 45%, transparent)`}
                                                    }
                                                >
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        <span>{data.againstScorer}</span>
                                                        {data.againstAssist ? <span className='assist'>(A: {data.againstAssist})</span>:''}
                                                        {data.isPK ? <span className='isPK icons'></span>:''}
                                                    </a>
                                                </li>
                                            )
                                        }
                                        // 상대 선수의 골이지만 자책골일 경우
                                        else if(data.isOG){
                                            return(
                                                <li className={!data.isAwaygame? 'gf atHome':'gf atAway'} key={data.dataId}>
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        <span>{data.againstScorer}</span>
                                                        <span className='isOG'>(OG)</span>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    }
                                    // 경고 상황
                                    // 울산 선수의 경고
                                    if(data.ulsanYellowcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                {!data.isSecondYellow?
                                                    // 첫 번째 경고일 때
                                                    <span className='yellowcard icons'></span>
                                                    :
                                                    // 두 번째 경고일 때
                                                    <span className='secondYellowcard icons'></span>
                                                }
                                                <span>{data.ulsanYellowcard}</span>
                                            </li>
                                        )
                                    }
                                    // 울산 선수의 퇴장
                                    if(data.ulsanRedcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                <span className='redcard icons'></span>
                                                <span>{data.ulsanRedcard}</span>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 경고
                                    if(data.againstYellowcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                {!data.isSecondYellow?
                                                    // 첫 번째 경고일 때
                                                    <span className='yellowcard icons'></span>
                                                    :
                                                    // 두 번째 경고일 때
                                                    <span className='secondYellowcard icons'></span>
                                                }
                                                <span>{data.againstYellowcard}</span>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 퇴장
                                    if(data.againstRedcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                <span className='redcard icons'></span>
                                                <span>{data.againstRedcard}</span>
                                            </li>
                                        )
                                    }
                                    // 교체 상황
                                    // 울산 선수의 교체
                                    if(data.ulsanSubIn) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                {data.ulsanSubIn? <span className='subIn'>IN: {data.ulsanSubIn}</span>:''}
                                                <span className='substitution icons'></span>
                                                <span className='subOut'>OUT: {data.ulsanSubOut}</span>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 교체
                                    if(data.againstSubIn) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <span className='recordedTime'>{data.recordedTime}</span>
                                                {data.againstSubIn? <span className='subIn'>IN: {data.againstSubIn}</span>:''}
                                                <span className='substitution icons'></span>
                                                <span className='subOut'>OUT: {data.againstSubOut}</span>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='leagueTableArea'>
                    <h4 className='sectionTitle'>League Table</h4>
                    <LeagueTable round={result[0].round}/>
                </div>
            </div>
        </div>
    )
}

export default MatchSituation_KL1;