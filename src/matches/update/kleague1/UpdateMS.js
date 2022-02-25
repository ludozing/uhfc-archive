import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateMS(props) {
    const dataArr = [];
    const score = useRef();
    const subs = useRef();
    const yc = useRef();
    const rc = useRef();
    const [ booleanData, setBooleanData ] = useState({
        isPK: false,
        isOG: false,
        isSecond: false
    })
    const onChange = (e) => {
        const {name, checked} = e.target;
        if(checked){
            setBooleanData({
                ...booleanData,
                [name]: true
            })
        }else {
            setBooleanData({
                ...booleanData,
                [name]: false
            })
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('aaaaa');
        let form = e.target
        let dataRow = {
            isUlsan: form.isUlsan.value==="울산"? true:false, //
            recordedTime: form.recordedTime.value,
            scorer: form.scorer? form.scorer.value:null,
            assist: form.assist? form.assist.value:null,
            isPK: booleanData.isPK, //
            isOG: booleanData.isOG, //
            yellowcard: form.yellowcard? form.yellowcard.value:null,
            redcard: form.redcard? form.redcard.value:null,
            isSecond: booleanData.isSecond, //
            subIn: form.subIn? form.subIn.value:null,
            subOut: form.subOut? form.subOut.value:null,
            refer_vid: form.refer_vid.value
        }
        dataArr.push(dataRow);

        console.log(dataArr);
    }
    const postData = (e) => {
        e.preventDefault();
        onSubmit(score.current);
        onSubmit(subs.current);
        onSubmit(yc.current);
        onSubmit(rc.current);
        dataArr.sort((a,b)=>{return a.recordedTime*1 - b.recordedTime*1})
        console.log(dataArr)
    }
    return (
        <div>
            <form name={'score'} ref={score} onSubmit={onSubmit}>
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
                                    <select name={"isUlsan"} >
                                        <option value={"울산"}>울산</option>
                                        <option value={"상대"}>상대</option>
                                    </select>
                                </td>
                                <td>
                                    {/* 득점 */}
                                    <input type={"text"} name={'scorer'}/>
                                </td>
                                <td>
                                    {/* 도움 */}
                                    <input type={"text"} name={'assist'}/>
                                </td>
                                <td>
                                    {/* PK */}
                                    <input type={"checkbox"} name={'isPK'} onChange={onChange}/>
                                </td>
                                <td>
                                    {/* OG */}
                                    <input type={"checkbox"} name={'isOG'} onChange={onChange}/>
                                </td>
                                <td>
                                    {/* URL */}
                                    <input type={"text"} name={'refer_vid'}/>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <input type={"submit"} value={"확인"} />
                </div>
            </form>
            <form name={'substitution'} ref={subs} onSubmit={onSubmit}>
                <div>
                    <h4>교체</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>IN</td><td>OUT</td><td>URL</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* 시간 */}
                                    <input type={"text"} name={"recordedTime"}/>
                                </td>
                                <td>
                                    {/* 팀 */}
                                    <select name={"isUlsan"} >
                                        <option value={true}>울산</option>
                                        <option value={false}>상대</option>
                                    </select>
                                </td>
                                <td>
                                    {/* IN */}
                                    <input type={"text"} name={'subIn'}/>
                                </td>
                                <td>
                                    {/* OUT */}
                                    <input type={"text"} name={'subOut'}/>
                                </td>
                                <td>
                                    {/* URL */}
                                    <input type={"text"} name={'refer_vid'}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <input type={"submit"} value={"확인"} />
                </div>
            </form>
            <form name={'yc'} ref={yc} onSubmit={onSubmit}>
                <div>
                    <h4>경고</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td><td>누적</td><td>URL</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* 시간 */}
                                    <input type={"text"} name={"recordedTime"}/>
                                </td>
                                <td>
                                    {/* 팀 */}
                                    <select name={"isUlsan"} >
                                        <option value={true}>울산</option>
                                        <option value={false}>상대</option>
                                    </select>
                                </td>
                                <td>
                                    {/* 선수 */}
                                    <input type={"text"} name={'yellowcard'}/>
                                </td>
                                <td>
                                    {/* 누적 */}
                                    <input type={"checkbox"} name={'isSecond'} onChange={onChange}/>
                                </td>
                                <td>
                                    {/* URL */}
                                    <input type={"text"} name={'refer_vid'}/>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <input type={"submit"} value={"확인"} />
                </div>
            </form>
            <form name={'rc'} ref={rc} onSubmit={onSubmit}>
                <div>
                    <h4>퇴장</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td><td>URL</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* 시간 */}
                                    <input type={"text"} name={"recordedTime"}/>
                                </td>
                                <td>
                                    {/* 팀 */}
                                    <select name={"isUlsan"} >
                                        <option value={true}>울산</option>
                                        <option value={false}>상대</option>
                                    </select>
                                </td>
                                <td>
                                    {/* 선수 */}
                                    <input type={"text"} name={'redcard'}/>
                                </td>
                                <td>
                                    {/* URL */}
                                    <input type={"text"} name={'refer_vid'}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type={"submit"} value={"확인"} />
                </div>
            </form>
            <button onClick={postData}>등록</button>
        </div>
    );
}

export default UpdateMS;