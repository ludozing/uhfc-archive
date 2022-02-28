import React from 'react';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import StartPlyr from '../comps/StartPlyr';
import { useParams } from 'react-router-dom';
import SubPlyr from '../comps/SubPlyr';
import { API_URL } from '../../config/constants';

function MatchFormation_KL1() {
    const param = useParams();
    const {id} = param;
    // 선택된 라운드 라인업 정보 불러오기
    async function getLineup(){
        const response = await axios.get(
            `${API_URL}/matchlineup/kl1/${id}`
        )
        return response.data;
    }

    const state = useAsync(getLineup);
    const {loading, error, data: lineup} = state;

    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!lineup) return null;
    return (
        <div className='pitch'>
            {/* 포메이션 */}
            <table className='formation' border={1}>
                <tbody>
                    {/* 공격수 */}
                    <tr>
                        <td className='null' colSpan={2}></td>
                        <td className='LF'><div className='positions'>
                            <div className='startMem'>{lineup[0].LF_sta ? <StartPlyr b_no={lineup[0].LF_sta} isCap={lineup[0].LF_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LF_sub ? <SubPlyr b_no={lineup[0].LF_sub} time={lineup[0].LF_sub_time}/>:""}</div>
                        </div></td>
                        <td className='CF'><div className='positions'>
                            <div className='startMem'>{lineup[0].CF_sta ? <StartPlyr b_no={lineup[0].CF_sta} isCap={lineup[0].CF_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].CF_sub ? <SubPlyr b_no={lineup[0].CF_sub} time={lineup[0].CF_sub_time}/>:""}</div>
                        </div></td>
                        <td className='RF'><div className='positions'>
                            <div className='startMem'>{lineup[0].RF_sta ? <StartPlyr b_no={lineup[0].RF_sta} isCap={lineup[0].RF_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RF_sub ? <SubPlyr b_no={lineup[0].RF_sub} time={lineup[0].RF_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null' colSpan={2}></td>
                    </tr>
                    {/* 2선 */}
                    <tr>
                        <td className='LW'><div className='positions'>
                            <div className='startMem'>{lineup[0].LW_sta ? <StartPlyr b_no={lineup[0].LW_sta} isCap={lineup[0].LW_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LW_sub ? <SubPlyr b_no={lineup[0].LW_sub} time={lineup[0].LW_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='LAM'><div className='positions'>
                            <div className='startMem'>{lineup[0].LAM_sta ? <StartPlyr b_no={lineup[0].LAM_sta} isCap={lineup[0].LAM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LAM_sub ? <SubPlyr b_no={lineup[0].LAM_sub} time={lineup[0].LAM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='CAM'><div className='positions'>
                            <div className='startMem'>{lineup[0].CAM_sta ? <StartPlyr b_no={lineup[0].CAM_sta} isCap={lineup[0].CAM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].CAM_sub ? <SubPlyr b_no={lineup[0].CAM_sub} time={lineup[0].CAM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='RAM'><div className='positions'>
                            <div className='startMem'>{lineup[0].RAM_sta ? <StartPlyr b_no={lineup[0].RAM_sta} isCap={lineup[0].RAM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RAM_sub ? <SubPlyr b_no={lineup[0].RAM_sub} time={lineup[0].RAM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='RW'><div className='positions'>
                            <div className='startMem'>{lineup[0].RW_sta ? <StartPlyr b_no={lineup[0].RW_sta} isCap={lineup[0].RW_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RW_sub ? <SubPlyr b_no={lineup[0].RW_sub} time={lineup[0].RW_sub_time}/>:""}</div>
                        </div></td>
                    </tr>
                    {/* 중앙 */}
                    <tr>
                        <td className='LM'><div className='positions'>
                            <div className='startMem'>{lineup[0].LM_sta ? <StartPlyr b_no={lineup[0].LM_sta} isCap={lineup[0].LM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LM_sub ? <SubPlyr b_no={lineup[0].LM_sub} time={lineup[0].LM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='LCM'><div className='positions'>
                            <div className='startMem'>{lineup[0].LCM_sta ? <StartPlyr b_no={lineup[0].LCM_sta} isCap={lineup[0].LCM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LCM_sub ? <SubPlyr b_no={lineup[0].LCM_sub} time={lineup[0].LCM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='CM'><div className='positions'>
                            <div className='startMem'>{lineup[0].CM_sta ? <StartPlyr b_no={lineup[0].CM_sta} isCap={lineup[0].CM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].CM_sub ? <SubPlyr b_no={lineup[0].CM_sub} time={lineup[0].CM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='RCM'><div className='positions'>
                            <div className='startMem'>{lineup[0].RCM_sta ? <StartPlyr b_no={lineup[0].RCM_sta} isCap={lineup[0].RCM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RCM_sub ? <SubPlyr b_no={lineup[0].RCM_sub} time={lineup[0].RCM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='RM'><div className='positions'>
                            <div className='startMem'>{lineup[0].RM_sta ? <StartPlyr b_no={lineup[0].RM_sta} isCap={lineup[0].RM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RM_sub ? <SubPlyr b_no={lineup[0].RM_sub} time={lineup[0].RM_sub_time}/>:""}</div>
                        </div></td>
                    </tr>
                    {/* 3선 */}
                    <tr>
                        <td className='LWB'><div className='positions'>
                            <div className='startMem'>{lineup[0].LWB_sta ? <StartPlyr b_no={lineup[0].LWB_sta} isCap={lineup[0].LWB_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LWB_sub ? <SubPlyr b_no={lineup[0].LWB_sub} time={lineup[0].LWB_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='LDM'><div className='positions'>
                            <div className='startMem'>{lineup[0].LDM_sta ? <StartPlyr b_no={lineup[0].LDM_sta} isCap={lineup[0].LDM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LDM_sub ? <SubPlyr b_no={lineup[0].LDM_sub} time={lineup[0].LDM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='CDM'><div className='positions'>
                            <div className='startMem'>{lineup[0].CDM_sta ? <StartPlyr b_no={lineup[0].CDM_sta} isCap={lineup[0].CDM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].CDM_sub ? <SubPlyr b_no={lineup[0].CDM_sub} time={lineup[0].CDM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='RDM'><div className='positions'>
                            <div className='startMem'>{lineup[0].RDM_sta ? <StartPlyr b_no={lineup[0].RDM_sta} isCap={lineup[0].RDM_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RDM_sub ? <SubPlyr b_no={lineup[0].RDM_sub} time={lineup[0].RDM_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='RWB'><div className='positions'>
                            <div className='startMem'>{lineup[0].RWB_sta ? <StartPlyr b_no={lineup[0].RWB_sta} isCap={lineup[0].RWB_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RWB_sub ? <SubPlyr b_no={lineup[0].RWB_sub} time={lineup[0].RWB_sub_time}/>:""}</div>
                        </div></td>
                    </tr>
                    {/* 최후방 */}
                    <tr>
                        <td className='LB'><div className='positions'>
                            <div className='startMem'>{lineup[0].LB_sta ? <StartPlyr b_no={lineup[0].LB_sta} isCap={lineup[0].LB_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LB_sub ? <SubPlyr b_no={lineup[0].LB_sub} time={lineup[0].LB_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='LCD'><div className='positions'>
                            <div className='startMem'>{lineup[0].LCD_sta ? <StartPlyr b_no={lineup[0].LCD_sta} isCap={lineup[0].LCD_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].LCD_sub ? <SubPlyr b_no={lineup[0].LCD_sub} time={lineup[0].LCD_sub_time}/>:""}</div>
                        </div></td>
                        <td className='CD'><div className='positions'>
                            <div className='startMem'>{lineup[0].CD_sta ? <StartPlyr b_no={lineup[0].CD_sta} isCap={lineup[0].CD_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].CD_sub ? <SubPlyr b_no={lineup[0].CD_sub} time={lineup[0].CD_sub_time}/>:""}</div>
                        </div></td>
                        <td className='RCD'><div className='positions'>
                            <div className='startMem'>{lineup[0].RCD_sta ? <StartPlyr b_no={lineup[0].RCD_sta} isCap={lineup[0].RCD_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RCD_sub ? <SubPlyr b_no={lineup[0].RCD_sub} time={lineup[0].RCD_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null'></td>
                        <td className='RB'><div className='positions'>
                            <div className='startMem'>{lineup[0].RB_sta ? <StartPlyr b_no={lineup[0].RB_sta} isCap={lineup[0].RB_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].RB_sub ? <SubPlyr b_no={lineup[0].RB_sub} time={lineup[0].RB_sub_time}/>:""}</div>
                        </div></td>
                    </tr>
                    {/* 골키퍼 */}
                    <tr>
                        <td className='null' colSpan={3}></td>
                        <td className='GK'><div className='positions'>
                            <div className='startMem'>{lineup[0].GK_sta ? <StartPlyr b_no={lineup[0].GK_sta} className={'forGk'} isCap={lineup[0].GK_sta_isCap}/>:""}</div>
                            <div className='subMem'>{lineup[0].GK_sub ? <SubPlyr b_no={lineup[0].GK_sub} time={lineup[0].GK_sub_time}/>:""}</div>
                        </div></td>
                        <td className='null' colSpan={3}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MatchFormation_KL1;