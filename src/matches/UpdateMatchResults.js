import React from 'react';
import './MatchesPage.scss'

function UpdateMatchResults(props) {
    return (
        <div className='contentArea'>
            {/* 포메이션 */}
            <table className='formation'>
                {/* 공격수 */}
                <tr>
                    <td className='null' rowSpan={2}></td>
                    <td className='LF sta'></td>
                    <td className='CF sta'></td>
                    <td className='RF sta'></td>
                    <td className='null' rowSpan={2}></td>
                </tr>
                <tr>
                    <td className='LF sub'></td>
                    <td className='CF sub'></td>
                    <td className='RF sub'></td>
                </tr>
                {/* 2선 */}
                <tr>
                    <td className='LW sta'></td>
                    <td className='LAM sta'></td>
                    <td className='CAM sta'></td>
                    <td className='RAM sta'></td>
                    <td className='RW sta'></td>
                </tr>
                <tr>
                    <td className='LW sub'></td>
                    <td className='LAM sub'></td>
                    <td className='CAM sub'></td>
                    <td className='RAM sub'></td>
                    <td className='RW sub'></td>
                </tr>
                {/* 중앙 */}
                <tr>
                    <td className='LM sta'></td>
                    <td className='LCM sta'></td>
                    <td className='CM sta'></td>
                    <td className='RCM sta'></td>
                    <td className='RM sta'></td>
                </tr>
                <tr>
                    <td className='LM sub'></td>
                    <td className='LCM sub'></td>
                    <td className='CM sub'></td>
                    <td className='RCM sub'></td>
                    <td className='RM sub'></td>
                </tr>
                {/* 3선 */}
                <tr>
                    <td className='LWB sta'></td>
                    <td className='LDM sta'></td>
                    <td className='CDM sta'></td>
                    <td className='RDM sta'></td>
                    <td className='RWB sta'></td>
                </tr>
                <tr>
                    <td className='LWB sub'></td>
                    <td className='LDM sub'></td>
                    <td className='CDM sub'></td>
                    <td className='RDM sub'></td>
                    <td className='RWB sub'></td>
                </tr>
                {/* 최후방 */}
                <tr>
                    <td className='LB sta'></td>
                    <td className='LCD sta'></td>
                    <td className='CD sta'></td>
                    <td className='RCD sta'></td>
                    <td className='RB sta'></td>
                </tr>
                <tr>
                    <td className='LB sub'></td>
                    <td className='LCD sub'></td>
                    <td className='CD sub'></td>
                    <td className='RCD sub'></td>
                    <td className='RB sub'></td>
                </tr>
                {/* 골키퍼 */}
                <tr>
                    <td className='null' rowSpan={2} colSpan={2}></td>
                    <td className='GK sta'></td>
                    <td className='null' rowSpan={2} colSpan={2}></td>
                </tr>
                <tr>
                    <td className='GK sub'></td>
                </tr>

            </table>
        </div>
    );
}

export default UpdateMatchResults;