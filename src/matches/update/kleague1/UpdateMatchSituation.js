import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateMS from './UpdateMS';

function UpdateMatchSituation_KL1({round}) {
    const navigate = useNavigate();
    // 각 sitList의 dept를 관리해 sitList별 input의 disabled 여부를 결정
    const [ dept, setDept ] = useState({
        s0_dept: '', s1_dept: '', s2_dept: '', s3_dept: '', s4_dept: '', s5_dept: '', s6_dept: '', s7_dept: '', s8_dept: '', s9_dept: '', s10_dept: '', s11_dept: '', s12_dept: '', s13_dept: '', s14_dept: '', s15_dept: '', s16_dept: '', s17_dept: '', s18_dept: '', s19_dept: ''
    });
    // 구조분해할당으로 각 sitList의 dept들을 각각의 변수에 담음
    const {s0_dept, s1_dept, s2_dept, s3_dept, s4_dept, s5_dept, s6_dept, s7_dept, s8_dept, s9_dept, s10_dept, s11_dept, s12_dept, s13_dept, s14_dept, s15_dept, s16_dept, s17_dept, s18_dept, s19_dept} = dept;
    // dept를 담은 변수들을 deptArr라는 배열로 재구성해 for문 안에서 개별적으로 활용될 수 있도록 한다.
    const deptArr = [s0_dept, s1_dept, s2_dept, s3_dept, s4_dept, s5_dept, s6_dept, s7_dept, s8_dept, s9_dept, s10_dept, s11_dept, s12_dept, s13_dept, s14_dept, s15_dept, s16_dept, s17_dept, s18_dept, s19_dept];
    // for문으로 20개의 sitList를 생성
    function makeSitList(){
        let list_arr = [];
        for (let i=0; i<20; i++) {
            list_arr.push(
                <tr key={i}>
                    <td>
                        {/* 상황 종류 */}
                        <select name={`s${i}_dept`} onChange={(e)=>{setDept({
                            ...dept,
                            [e.target.name] : e.target.value
                            })}}>
                            <option value='' defaultValue hidden>선택</option>
                            <option value="득점">득점</option>
                            <option value="교체">교체</option>
                            <option value="경고">경고</option>
                            <option value="퇴장">퇴장</option>
                        </select>
                    </td>
                    <td>
                        {/* 상황 발생 시간 */}
                        <input type={"text"} name={`s${i}_time`} className='s_time'  disabled={!deptArr[i]? true:false}/>
                    </td>
                    <td>
                        {/* 소속 */}
                        <p>
                            <input type={"radio"} name={`s${i}_team`} value={"울산"} disabled={!deptArr[i]? true:false}/> 울산
                        </p>
                        <p>
                            <input type={"radio"} name={`s${i}_team`} value={"상대"} disabled={!deptArr[i]? true:false}/> 상대
                        </p>
                    </td>
                    <td>
                        {/* 선수A */}
                        <input type={"text"} name={`s${i}_plA`} className='s_plyrName' disabled={!deptArr[i]? true:false}/>
                    </td>
                    <td>
                        {/* 선수B */}
                        <input type={"text"} name={`s${i}_plB`} className='s_plyrName' disabled={deptArr[i] === '득점' || deptArr[i] === '교체' ? false:true}/>
                    </td>
                    <td>
                        {/* isPK */}
                        <input type={"checkbox"} name={`s${i}_pk`} disabled={deptArr[i]==='득점'?false:true}/>
                    </td>
                    <td>
                        {/* isOG */}
                        <input type={"checkbox"} name={`s${i}_og`} disabled={deptArr[i]==='득점'?false:true}/>
                    </td>
                    <td>
                        {/* 두번째 경고인지? */}
                        <input type={"checkbox"} name={`s${i}_2nd`} disabled={deptArr[i]==='경고'?false:true}/>
                    </td>
                    <td>
                        <input type={"text"} name={`s${i}_url`} disabled={!deptArr[i]? true:false}/>
                    </td>
                </tr>
            );
        }
        // console.log(list_arr);
        return list_arr;
    }
    // value를 입력받은 sitList(객체)들을 한 곳에 모아 전송하기 위한 배열 선언
    const sitListArr = [];
    // submit될 때 배열에 데이터들을 담아줄 함수 선언
    function pushSitList(form){
        // 1. for문으로 모든 sitList들을 확인해서
        for(let i=0; i<20; i++){
            // 2. 해당 sitList의 dept의 값에 따라
            // 3-1. 입력받은 value들을 객체의 정확한 속성에 배치해
            // 3-2. 그 객체를 sitListArr에 push
            if(deptArr[i]==="득점"){
                sitListArr.push({
                    
                })
            }
            else if(deptArr[i]==="교체"){
                sitListArr.push({
                    
                })
            }
            else if(deptArr[i]==="경고"){
                sitListArr.push({
                    
                })
            }
            else if(deptArr[i]==="퇴장"){
                sitListArr.push({
                    
                })
            }
            // dept에 값이 없다면 객체로 만들 필요 없음
        }
    }

    function insertSitList(){
        // axios.push로 전송
        
    }

    // form submit 시 메커니즘
    function onSubmit(e){
        e.preventDefault();
        // sitListArr에 각 value가 담긴 sitList들을 push해 배열을 만든다.
        pushSitList(e.target);
        // 배열을 post방식으로 서버에 전송한다.
        insertSitList();
        // UpdateLeagueTable 페이지로 넘어간다.
        navigate(`/main/matches/update/kleague1/${round}/leaguetable`)
    }
    return (
        <div className='matchResultArea'>
            <UpdateMS />
            <form onSubmit={onSubmit}>
                <div className='matchResult'>
                    경기 총 결과
                </div>
                <table className='matchDetail'>
                    <thead>
                        <tr>
                            <td>분류</td>
                            <td>시간</td>
                            <td>팀</td>
                            <td>선수A</td>
                            <td>선수B</td>
                            <td>isPK</td>
                            <td>isOG</td>
                            <td>is2ndY</td>
                            <td>URL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {makeSitList()}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default UpdateMatchSituation_KL1;