import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../../config/constants';
import axios from 'axios';

function UpdateMS(props) {
    const navigate = useNavigate();
    const param = useParams();
    const {id} = param;
    const [dataArr,setDataArr] = useState([]);
    let [count, setCount] = useState(0);
    const [matchResultObj, setMatchResultObj] = useState({r_gf:0, r_ga:0, r_vid_url:''});
    const {r_gf, r_ga, r_vid_url} = matchResultObj;

    const [ booleanData, setBooleanData ] = useState({
        isPK: false,
        isOG: false,
        isSecond: false
    })
    const [ isUlsan, setIsUlsan ] = useState(true);
    const onSelect = (e) => {
        e.target.value === "울산"? setIsUlsan(true):setIsUlsan(false);
    }
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
        let form = e.target;
        let dataRow = {
            data_no: count,
            isUlsan: isUlsan, //
            recordedTime: form.recordedTime.value,
            scorer: form.scorer? (form.scorer.value? form.scorer.value:null):null,
            assist: form.assist? (form.assist.value? form.assist.value:null):null,
            isPK: booleanData.isPK, //
            missedPK: form.missedPK? (form.missedPK.value? form.missedPK.value:null):null,
            isOG: booleanData.isOG, //
            isCanceled: form.isCanceled? (form.isCanceled.value? form.isCanceled.value:null):null,
            yellowcard: form.yellowcard? (form.yellowcard.value? form.yellowcard.value:null):null,
            isSecond: booleanData.isSecond, //
            redcard: form.redcard? (form.redcard.value? form.redcard.value:null):null,
            subIn: form.subIn? (form.subIn.value? form.subIn.value:null):null,
            subOut: form.subOut? (form.subOut.value? form.subOut.value:null):null,
            refer_vid: form.refer_vid? (form.refer_vid.value? form.refer_vid.value:null):null
        }
        setDataArr([
            ...dataArr, dataRow
        ]);
        form.reset();
        setIsUlsan(true);
        setCount(count + 1);
    }
    function uploadAll(){
        axios.post(`${API_URL}/situation/kl1/${id}/update`,[matchResultObj,dataArr])
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
    }
    const postData = () => {
        dataArr.sort((a,b)=>{return parseInt(a.recordedTime) - parseInt(b.recordedTime)})
        console.log(dataArr)
        console.log(matchResultObj)
        // uploadAll()
    }
    return (
        <div className='matchResultArea'>
            <div className='matchResult'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let form = e.target;
                    setMatchResultObj({
                        r_gf: form.gf.value,
                        r_ga: form.ga.value,
                        r_vid_url: form.vid_url.value? form.vid_url.value:null
                    })
                    console.log(matchResultObj)
                }}>
                    <p><span>울산</span><span><input type={"number"} name={"gf"} placeholder={"점수"}/></span></p>
                    <p><span>상대</span><span><input type={"number"} name={"ga"} placeholder={"점수"}/></span></p>
                    <p><span>하이라이트</span><span><input type={"text"} name={"vid_url"} placeholder={"URL"}/></span></p>
                    <p><input type={"submit"} value={"확인"}/></p>
                </form>                
            </div>
            <div className='matchSituationArea'>
                <div className='dataInputArea'>
                    {/* 하프타임 */}
                    <form onSubmit={e=>{
                        e.preventDefault();
                        let dataRow = {
                            data_no: count,
                            recordedTime: "45.5",
                            HTline: true
                        }
                        setDataArr([
                            ...dataArr, dataRow
                        ]);
                        setCount(count + 1)        
                    }} className={"htlineform"}>
                        <div>
                            <h4>
                                하프 타임
                            </h4>
                            <input type={"submit"} value={"삽입"} />
                        </div>
                    </form>
                    <form name={'score'} onSubmit={onSubmit} className={"dataRowForm"}>
                        <div>
                            <h4>득점</h4>
                            <div>
                                <p>
                                    <span>시간</span>
                                    <span>
                                        <input type={"text"} name={"recordedTime"} placeholder={"RT'"}/>
                                    </span>
                                </p>
                                <p>
                                    <span>팀</span>
                                    <span>
                                        <select name={"isUlsan"} onChange={onSelect} >
                                            <option value={"울산"}>울산</option>
                                            <option value={"상대"}>상대</option>
                                        </select>
                                    </span>
                                </p>
                                <p>
                                    <span>득점</span>
                                    <span>
                                        <input type={"text"} name={'scorer'}/>
                                        
                                    </span>
                                </p>
                                <p>
                                    <span>도움</span>
                                    <span>
                                        <input type={"text"} name={'assist'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>득점 취소</span>
                                    <span>
                                        <input type={"text"} name={'isCanceled'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>PK 실축</span>
                                    <span>
                                        <input type={"text"} name={'missedPK'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>isPK</span>
                                    <span>
                                        <input type={"checkbox"} name={'isPK'} onChange={onChange}/>                            
                                    </span>
                                </p>
                                <p>
                                    <span>isOG</span>
                                    <span>
                                        <input type={"checkbox"} name={'isOG'} onChange={onChange}/>
                                    </span>
                                </p>
                                <p>
                                    <span>URL</span>
                                    <span>
                                        <input type={"text"} name={'refer_vid'}/>
                                    </span>
                                </p>
                            </div>
                            <p>
                                <input type={"submit"} value={"확인"} />
                            </p>
                        </div>
                    </form>
                    <form name={'substitution'} onSubmit={onSubmit} className={"dataRowForm"}>
                        <div>
                            <h4>교체</h4>
                            <div>
                                <p>
                                    <span>시간</span>
                                    <span>
                                        <input type={"text"} name={"recordedTime"} placeholder={"RT'"}/>
                                    </span>
                                </p>
                                <p>
                                    <span>팀</span>
                                    <span>
                                        <select name={"isUlsan"} onChange={onSelect} >
                                            <option value={true}>울산</option>
                                            <option value={false}>상대</option>
                                        </select>
                                    </span>
                                </p>
                                <p>
                                    <span>IN</span>
                                    <span>
                                        <input type={"text"} name={'subIn'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>OUT</span>
                                    <span>
                                        <input type={"text"} name={'subOut'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>URL</span>
                                    <span>
                                        <input type={"text"} name={'refer_vid'}/>
                                    </span>
                                </p>
                            </div>
                            <p>
                                <input type={"submit"} value={"확인"} />
                            </p>
                        </div>
                    </form>
                    <form name={'yr'} onSubmit={onSubmit} className={"dataRowForm"}>
                        <div>
                            <h4>경고 및 퇴장</h4>
                            <div>

                                <p>
                                    <span>시간</span>
                                    <span>
                                        <input type={"text"} name={"recordedTime"} placeholder={"RT'"}/>
                                    </span>
                                </p>
                                <p>
                                    <span>팀</span>
                                    <span>
                                        <select name={"isUlsan"} onChange={onSelect} >
                                            <option value={true}>울산</option>
                                            <option value={false}>상대</option>
                                        </select>
                                    </span>
                                </p>
                                <p>
                                    <span>경고</span>
                                    <span>
                                        <input type={"text"} name={'yellowcard'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>퇴장</span>
                                    <span>
                                        <input type={"text"} name={'redcard'}/>
                                    </span>
                                </p>
                                <p>
                                    <span>누적</span>
                                    <span>
                                        <input type={"checkbox"} name={'isSecond'} onChange={onChange}/>
                                    </span>
                                </p>
                                <p>
                                    <span>URL</span>
                                    <span>
                                        <input type={"text"} name={'refer_vid'}/>
                                    </span>
                                </p>
                            </div>
                            <p>
                                <input type={"submit"} value={"확인"} />
                            </p>
                        </div>
                    </form>
                </div>
                <div className='dataBoardArea'>
                    <div className='dataBoard'>
                        <h4>-등록 예정 레코드-</h4>
                        {
                            <h4><span>울산</span> {r_gf} : {r_ga} <span>상대</span></h4>
                        }
                        <ul>
                            {
                                dataArr.map(data => {
                                    if(data.HTline) return <li key={data.data_no} className={"dataRow"}><p style={{textAlign:'center', width:'100%', padding:'8px 0'}}>====하프 타임====</p></li>
                                    else return(
                                        <li key={data.data_no} className={"dataRow"}>
                                            <p style={{width: '50px', textAlign: 'center'}}>{data.recordedTime}</p>
                                            <p>{data.isUlsan? "울산":"상대"}</p>
                                            {data.scorer? <p><span>(G)</span>{data.scorer}{data.isPK? <span>(PK)</span>:""}{data.isOG? <span>(OG)</span>:""}</p>:""}
                                            {data.assist? <p><span>(A)</span>{data.assist}</p>:""}
                                            {data.missedPK? <p><span>(PK실축)</span>{data.missedPK}</p>:""}
                                            {data.isCanceled? <p><span>(골 취소)</span>{data.isCanceled}</p>:""}
                                            {data.yellowcard? <p><span>(경고)</span>{data.yellowcard}{data.isSecond? <span style={{color:'red'}}>경고누적퇴장</span>:""}</p>:""}
                                            {data.redcard? <p><span>(퇴장)</span>{data.redcard}</p>:""}
                                            {data.subOut? <p>{data.subIn? <span>IN: <strong>{data.subIn}</strong></span>:""}<span>OUT: <strong>{data.subOut}</strong></span></p>:""}
                                            {data.refer_vid? <p>링크 있음</p>:""}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div><button onClick={postData}>등록</button></div>
                </div>
            </div>
        </div>
    );
}

export default UpdateMS;