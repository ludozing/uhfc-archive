import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectCompetition(props) {
    // 대회 선택에 따라 상태 관리하기
    const allFalse = {kl1: false, acl: false, fac: false}
    const [competition, setCompetition] = useState(allFalse)
    // 라디오 버튼이 전환되면 상태값도 변화
    const radioChange = (e) => {
        const {value} = e.target;
        setCompetition({
            ...allFalse,
            [value]: true
        })
    }
    const {kl1, acl, fac} = competition;

    // K리그 세부 선택지로 1~38라운드 콤보박스 생성
    const printKl1Rounds = () => {
        const result = [];
        for(let i = 1; i <= 38; i++){
            result.push(<option value={i} key={i}>{i}</option>);
        }
        return result;
    }
    
    // 세부 선택지 상태 관리
    const [kl1Round, setKl1Round] = useState('');
    const [aclRound, setAclRound] = useState('');
    const [facRound, setFacRound] = useState('');
    const kl1RoundChange = (e) => {
        const {value} = e.target;
        setAclRound('');
        setFacRound('');
        setKl1Round(value);
    }
    const aclRoundChange = (e) => {
        const {value} = e.target;
        setKl1Round('');
        setFacRound('');
        setAclRound(value);
    }
    const facRoundChange = (e) => {
        const {value} = e.target;
        setKl1Round('');
        setAclRound('');
        setFacRound(value);
    }

    // 다음 단계로 넘어가기
    const navigate = useNavigate();
    function onSubmit(e){
        e.preventDefault();
        if(kl1){
            navigate(`/main/matches/update/kleague1/${kl1Round}`);
        }
        if(acl){
            navigate(`/main/matches/update/acl/${aclRound}`);
        }
        if(fac){
            navigate(`/main/matches/update/facup/${facRound}`);
        }
    }

    return (
        <div className='contentArea'>
            <form onSubmit={onSubmit}>
                <div className='competitions'>
                    <div className='competitionArea'>
                        <div className='competSelectArea'>
                            <input type="radio" id="updateKl1" name="competition" value="kl1" onChange={radioChange} /> 
                            <label htmlFor="updateKl1">K리그1</label>
                        </div>
                        <div className='competDetailArea'>
                            <label htmlFor='kl1_round'>라운드: </label>
                            <select name='kl1_round' id='kl1_round' disabled={!kl1? true:false} onChange={kl1RoundChange}>
                                <option value="" key="0" defaultChecked>=선택=</option>
                                {printKl1Rounds()}
                            </select>
                        </div>
                    </div>
                    <div className='competitionArea'>
                        <div className='competSelectArea'>
                            <input type="radio" id="updateAcl" name="competition" value="acl" onChange={radioChange}/> 
                            <label htmlFor="updateAcl">ACL</label>
                        </div>
                        <div className='competDetailArea'>
                            <label htmlFor='acl_round'>라운드: </label>
                            <select name='acl_round' id='acl_round' disabled={!acl? true:false} onChange={aclRoundChange}>
                                <option value="" key="0" defaultChecked>====선택====</option>
                                <option value="po" key="1">PLAYOFF</option>
                                <option value="gs1" key="2">Group Stage R1</option>
                                <option value="gs2" key="3">Group Stage R2</option>
                                <option value="gs3" key="4">Group Stage R3</option>
                                <option value="gs4" key="5">Group Stage R4</option>
                                <option value="gs5" key="6">Group Stage R5</option>
                                <option value="gs6" key="7">Group Stage R6</option>
                            </select>
                        </div>
                    </div>
                    <div className='competitionArea'>
                        <div className='competSelectArea'>
                            <input type="radio" id="updateFac" name="competition" value="fac" onChange={radioChange}/> 
                            <label htmlFor="updateFac">FA컵</label>
                        </div>
                        <div className='competDetailArea'>
                            <input type="radio" id="fac_round" disabled={!fac? true:false} value='Ro16' onChange={facRoundChange} />
                            <label htmlFor='fac_round'>16강전</label>
                        </div>
                    </div>
                </div>
                <div className='formBtns'>
                    <input type={"reset"} className="formBtn" value="초기화"/>
                    <input type={"submit"} className="formBtn" value="다음"/>
                </div>
            </form>
        </div>
    );
}

export default SelectCompetition;