import React from 'react';
import './MatchesPage.scss';

function MatchSituation_KL1(props) {
    return (
        <div>
            <div className='formationArea'>
                <h4>n라운드 출전명단</h4>
                {/* 포메이션 */}
                <div className='pitch'>
                    <table className='formation' border={1}>
                        <tbody>
                            {/* 공격수 */}
                            <tr>
                                <td className='null' colSpan={2}></td>
                                <td className='LF'><div>1</div><div>2</div></td>
                                <td className='CF'></td>
                                <td className='RF'></td>
                                <td className='null' colSpan={2}></td>
                            </tr>
                            {/* 2선 */}
                            <tr>
                                <td className='LW'></td>
                                <td className='null'></td>
                                <td className='LAM'></td>
                                <td className='CAM'></td>
                                <td className='RAM'></td>
                                <td className='null'></td>
                                <td className='RW'></td>
                            </tr>
                            {/* 중앙 */}
                            <tr>
                                <td className='LM'></td>
                                <td className='null'></td>
                                <td className='LCM'></td>
                                <td className='CM'></td>
                                <td className='RCM'></td>
                                <td className='null'></td>
                                <td className='RM'></td>
                            </tr>
                            {/* 3선 */}
                            <tr>
                                <td className='LWB'></td>
                                <td className='null'></td>
                                <td className='LDM'></td>
                                <td className='CDM'></td>
                                <td className='RDM'></td>
                                <td className='null'></td>
                                <td className='RWB'></td>
                            </tr>
                            {/* 최후방 */}
                            <tr>
                                <td className='LB'></td>
                                <td className='null'></td>
                                <td className='LCD'></td>
                                <td className='CD'></td>
                                <td className='RCD'></td>
                                <td className='null'></td>
                                <td className='RB'></td>
                            </tr>
                            {/* 골키퍼 */}
                            <tr>
                                <td className='null' colSpan={3}></td>
                                <td className='GK'></td>
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