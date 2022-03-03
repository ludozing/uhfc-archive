import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../../hooks/useAsync';
import LeagueTable from './LeagueTable';
import MatchFormation_KL1 from './MatchFormation_KL1';
import { VscLinkExternal } from 'react-icons/vsc';
import { API_URL } from '../../config/constants';

function MatchSituation_KL1() {
    const param = useParams();
    const {id} = param;
    // 선택된 라운드 정보 불러오기
    async function getResult(){
        const response = await axios.get(
            `${API_URL}/matches/kl1/${id}`
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
                <p>R{result[0].round}</p>
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
                        <iframe width="448" height="252" src={`https://www.youtube.com/embed/${result[0].vid_url.split('=')[1]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                <div className='againstTeam mrRight' style={{backgroundColor: result[0].color}}>
                                    <div className='teamArea'>
                                        <img className='teamLogo' src={result[0].logo_url} alt={result[0].against} />
                                        <h4 className='teamName'>{result[0].against}</h4>
                                    </div>
                                    <p className='score'>{result[0].ga}</p>
                                </div>
                            </div>
                        :
                            // 원정 경기일 때
                            <div className='matchResult'>
                                {/* 상대팀 */}
                                <div className='againstTeam mrLeft' style={{backgroundColor: result[0].color}}>
                                    <div className='teamArea'>
                                        <img className='teamLogo' src={result[0].logo_url} alt={result[0].against} />
                                        <h4 className='teamName'>{result[0].against}</h4>
                                    </div>
                                    <p className='score'>{result[0].ga}</p>
                                </div>
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
                    {/* 경기 상황 세부 기록 */}
                    <div className='matchSituationArea'>
                        <ul>
                            {
                                result.map(data => {
                                    // 하프타임
                                    if(data.HTline){
                                        return(
                                            <li className={'HT'} key={data.dataId}>
                                                HALF TIME
                                            </li>
                                        )
                                    }
                                    // 골 상황
                                    // 울산 선수의 골일 경우
                                    if(data.isUlsan && data.scorer) {
                                        // 득점 선수 정보 출력
                                        if(!data.isOG){
                                            return (
                                                <li className={!data.isAwaygame? 'gf atHome':'gf atAway'} key={data.dataId}>
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        {data.isPK ? <span className='isPK icons'></span>:''}
                                                        <span>{data.scorer}</span>
                                                        {data.assist ? <span className='assist'>(A: {data.assist})</span>:''}
                                                        {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
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
                                                        !data.isAwaygame ? {background: `linear-gradient(to left, ${result[0].color} 45%, transparent)`}:{background: `linear-gradient(to right, ${result[0].color} 45%, transparent)`}
                                                    }
                                                >
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        <span>{data.scorer}</span>
                                                        <span className='isOG'>(OG)</span>
                                                        {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    }
                                    // 상대 선수의 골일 경우
                                    if(!data.isUlsan && data.scorer) {
                                        // 득점 선수 정보 출력
                                        if(!data.isOG){
                                            return (
                                                <li
                                                    className={!data.isAwaygame? 'ga atAway':'ga atHome'}
                                                    key={data.dataId}
                                                    style={
                                                        !data.isAwaygame ? {background: `linear-gradient(to left, ${result[0].color} 45%, transparent)`}:{background: `linear-gradient(to right, ${result[0].color} 45%, transparent)`}
                                                    }
                                                >
                                                    <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                        <span className='recordedTime'>{data.recordedTime}</span>
                                                        {data.isPK ? <span className='isPK icons'></span>:''}
                                                        <span>{data.scorer}</span>
                                                        {data.assist ? <span className='assist'>(A: {data.assist})</span>:''}
                                                        {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
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
                                                        <span>{data.scorer}</span>
                                                        <span className='isOG'>(OG)</span>
                                                        {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    }
                                    // 골 취소 상황
                                    // 울산 선수의 골 취소
                                    if(data.isUlsan && data.isCanceled) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='isCanceled icons'>(골 취소)</span>
                                                    <span>{data.isCanceled}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 골 취소
                                    if(!data.isUlsan && data.isCanceled) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='isCanceled icons'></span>
                                                    <span>{data.isCanceled}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // PK실축 상황
                                    // 울산 선수의 PK 실축
                                    if(data.isUlsan && data.missedPK) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='isMissedPK icons'></span>
                                                    <span>{data.missedPK}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 PK 실축
                                    if(!data.isUlsan && data.missedPK) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='isMissedPK icons'></span>
                                                    <span>{data.missedPK}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 경고 상황
                                    // 울산 선수의 경고
                                    if(data.isUlsan && data.yellowcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    {!data.isSecond?
                                                        // 첫 번째 경고일 때
                                                        <span className='yellowcard icons'></span>
                                                        :
                                                        // 두 번째 경고일 때
                                                        <span className='secondYellowcard icons'></span>
                                                    }
                                                    <span>{data.yellowcard}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 울산 선수의 퇴장
                                    if(data.isUlsan && data.redcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='redcard icons'></span>
                                                    <span>{data.redcard}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 경고
                                    if(!data.isUlsan && data.yellowcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    {!data.isSecond?
                                                        // 첫 번째 경고일 때
                                                        <span className='yellowcard icons'></span>
                                                        :
                                                        // 두 번째 경고일 때
                                                        <span className='secondYellowcard icons'></span>
                                                    }
                                                    <span>{data.yellowcard}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 퇴장
                                    if(!data.isUlsan && data.redcard) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    <span className='redcard icons'></span>
                                                    <span>{data.redcard}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 교체 상황
                                    // 울산 선수의 교체
                                    if(data.isUlsan && data.subOut) {
                                        return(
                                            <li className={!data.isAwaygame? 'atHome':'atAway'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    {data.subIn? <span className='subIn'>IN: {data.subIn}</span>:''}
                                                    <span className='substitution icons'></span>
                                                    <span className='subOut'>OUT: {data.subOut}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
                                            </li>
                                        )
                                    }
                                    // 상대 선수의 교체
                                    if(!data.isUlsan && data.subOut) {
                                        return(
                                            <li className={!data.isAwaygame? 'atAway':'atHome'} key={data.dataId}>
                                                <a href={data.refer_vid} target="_blank" rel="noreferrer">
                                                    <span className='recordedTime'>{data.recordedTime}</span>
                                                    {data.subIn? <span className='subIn'>IN: {data.subIn}</span>:''}
                                                    <span className='substitution icons'></span>
                                                    <span className='subOut'>OUT: {data.subOut}</span>
                                                    {data.refer_vid? <span className='externalLinkIcon'><VscLinkExternal/></span>:''}
                                                </a>
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