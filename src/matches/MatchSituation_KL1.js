import React from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import StartPlyr from './StartPlyr';
import './MatchesPage.scss';
import { useParams } from 'react-router-dom';


function MatchSituation_KL1(props) {
    const param = useParams();
    const {id} = param;
    // 선택된 라운드 정보 불러오기
    async function getLineup(){
        const response = await axios.get(
            `http://localhost:8080/matchlineup/kl1/${id}`
        )
        return response.data;
    }

    const state = useAsync(getLineup);
    const {loading, error, data: lineup} = state;

    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!lineup) return null;
    return (
        <div>
            <div className='formationArea'>
                {/* 포메이션 */}
                <div className='pitch'>
                    <table className='formation' border={1}>
                        <tbody>
                            {/* 공격수 */}
                            <tr>
                                <td className='null' colSpan={2}></td>
                                <td className='LF'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LF_sta ? <StartPlyr b_no={lineup[0].LF_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='CF'><div className='positions'>
                                    <div className='startMem'>{lineup[0].CF_sta ? <StartPlyr b_no={lineup[0].CF_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='RF'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RF_sta ? <StartPlyr b_no={lineup[0].RF_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null' colSpan={2}></td>
                            </tr>
                            {/* 2선 */}
                            <tr>
                                <td className='LW'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LW_sta ? <StartPlyr b_no={lineup[0].LW_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='LAM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LAM_sta ? <StartPlyr b_no={lineup[0].LAM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='CAM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].CAM_sta ? <StartPlyr b_no={lineup[0].CAM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='RAM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RAM_sta ? <StartPlyr b_no={lineup[0].RAM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='RW'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RW_sta ? <StartPlyr b_no={lineup[0].RW_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                            </tr>
                            {/* 중앙 */}
                            <tr>
                                <td className='LM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LM_sta ? <StartPlyr b_no={lineup[0].LM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='LCM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LCM_sta ? <StartPlyr b_no={lineup[0].LCM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='CM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].CM_sta ? <StartPlyr b_no={lineup[0].CM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='RCM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RCM_sta ? <StartPlyr b_no={lineup[0].RCM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='RM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RM_sta ? <StartPlyr b_no={lineup[0].RM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                            </tr>
                            {/* 3선 */}
                            <tr>
                                <td className='LWB'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LWB_sta ? <StartPlyr b_no={lineup[0].LWB_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='LDM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LDM_sta ? <StartPlyr b_no={lineup[0].LDM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='CDM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].CDM_sta ? <StartPlyr b_no={lineup[0].CDM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='RDM'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RDM_sta ? <StartPlyr b_no={lineup[0].RDM_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='RWB'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RWB_sta ? <StartPlyr b_no={lineup[0].RWB_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                            </tr>
                            {/* 최후방 */}
                            <tr>
                                <td className='LB'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LB_sta ? <StartPlyr b_no={lineup[0].LB_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='LCD'><div className='positions'>
                                    <div className='startMem'>{lineup[0].LCD_sta ? <StartPlyr b_no={lineup[0].LCD_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='CD'><div className='positions'>
                                    <div className='startMem'>{lineup[0].CD_sta ? <StartPlyr b_no={lineup[0].CD_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='RCD'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RCD_sta ? <StartPlyr b_no={lineup[0].RCD_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null'></td>
                                <td className='RB'><div className='positions'>
                                    <div className='startMem'>{lineup[0].RB_sta ? <StartPlyr b_no={lineup[0].RB_sta}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                            </tr>
                            {/* 골키퍼 */}
                            <tr>
                                <td className='null' colSpan={3}></td>
                                <td className='GK'><div className='positions'>
                                    <div className='startMem'>{lineup[0].GK_sta ? <StartPlyr b_no={lineup[0].GK_sta} className={'forGk'}/>:""}</div>
                                    <div className='subMem'></div>
                                </div></td>
                                <td className='null' colSpan={3}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MatchSituation_KL1;