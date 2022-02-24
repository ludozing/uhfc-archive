import React from 'react';

function UpdateMS(props) {
    const teamRef = useRef([])
    return (
        <div>
            <form>
                <div>
                    <h4>득점</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>득점</td><td>도움</td><td>isPK</td><td>isOG</td><td>URL</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* 시간 */}
                                    <input type={"text"} name={"recordedTime"}/>
                                </td>
                                <td>
                                    {/* 팀 */}
                                    <select name={"team"} ref={item => teamRef.current[0] = item}>
                                        <option value='울산'>울산</option>
                                        <option value='상대'>상대</option>
                                    </select>
                                </td>
                                <td>
                                    {/* 득점 */}
                                    <input type={"text"} name={teamRef.current[0].value!=='울산'? 'againstScorer':'ulsanScorer'}/>
                                </td>
                                <td>
                                    {/* 도움 */}
                                    <input type={"text"} name={teamRef.current[0].value!=='울산'? 'againstAssist':'ulsanAssist'}/>
                                </td>
                                <td>
                                    {/* PK */}
                                    <input type={"checkbox"} name={""}/>
                                </td>
                                <td>
                                    {/* OG */}
                                    <input type={"checkbox"} name={""}/>
                                </td>
                                <td>
                                    {/* URL */}
                                    <input type={"text"} name={""}/>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>교체</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>IN</td><td>OUT</td></tr>
                        </thead>
                        <tbody>
                            <tr></tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>경고</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td><td>is2nd</td></tr>
                        </thead>
                        <tbody>
                            <tr></tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>퇴장</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td></tr>
                        </thead>
                        <tbody>
                            <tr></tr>

                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default UpdateMS;