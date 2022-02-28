import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/constants';

function UpdateMS(props) {
    const [dataArr,setDataArr] = useState([]);
    let [count, setCount] = useState(0);
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
        let form = e.target
        let dataRow = {
            data_no: count,
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
        setDataArr([
            ...dataArr, dataRow
        ]);
        form.reset();
        setCount(count + 1)
    }
    const postData = () => {
        dataArr.sort((a,b)=>{return parseInt(a.recordedTime) - parseInt(b.recordedTime)})
        console.log(dataArr)
    }
    return (
        <div>
            <form name={'score'} ref={score} onSubmit={onSubmit}>
                <div>
                    <h4>득점</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>득점</td><td>도움</td><td>isPK</td><td>isOG</td><td>URL</td><td></td></tr>
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
                                <td>
                                    <input type={"submit"} value={"확인"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            <form name={'substitution'} ref={subs} onSubmit={onSubmit}>
                <div>
                    <h4>교체</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>IN</td><td>OUT</td><td>URL</td><td></td></tr>
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
                                <td>
                                    <input type={"submit"} value={"확인"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            <form name={'yc'} ref={yc} onSubmit={onSubmit}>
                <div>
                    <h4>경고</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td><td>누적</td><td>URL</td><td></td></tr>
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
                                <td>
                                    <input type={"submit"} value={"확인"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            <form name={'rc'} ref={rc} onSubmit={onSubmit}>
                <div>
                    <h4>퇴장</h4>
                    <table>
                        <thead>
                            <tr><td>시간</td><td>팀</td><td>선수</td><td>URL</td><td></td></tr>
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
                                <td>
                                    <input type={"submit"} value={"확인"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            <div>
                <ul>
                    {
                        dataArr.map(data => {
                            return(
                                <li key={data.data_no} className={"dataBoard"}>
                                    <p>
                                        {data.isUlsan? "울산":"상대"}
                                    </p>
                                    <p>
                                        {data.recordedTime}
                                    </p>
                                    {data.scorer? <p><span>(G)</span>{data.scorer}{data.isPK? <span>(PK)</span>:""}{data.isOG? <span>(OG)</span>:""}</p>:""}
                                    {data.assist? <p><span>(A)</span>{data.assist}</p>:""}
                                    {data.yellowcard? <p><span>(경고)</span>{data.yellowcard}{data.isSecond? <span style={{color:'red'}}>경고누적퇴장</span>:""}</p>:""}
                                    {data.redcard? <p><span>(퇴장)</span>{data.redcard}</p>:""}
                                    {data.subOut? <p>{data.subIn? <span>IN: <strong>{data.subIn}</strong></span>:""}<span>OUT: <strong>{data.subOut}</strong></span></p>:""}
                                    {data.refer_vid? <p>URL: {data.refer_vid}</p>:""}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={postData}>등록</button>
        </div>
    );
}

export default UpdateMS;