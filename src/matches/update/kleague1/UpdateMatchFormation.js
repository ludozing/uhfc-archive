import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateMatchFormation_KL1({round}) {
    const param = useParams();
    const {id} = param;
    const navigate = useNavigate();
    const [lineup, setLineup] = useState({
        GK_sta: null, GK_sta_isCap: false, GK_sub_time: null, GK_sub: null,
        LB_sta: null, LB_sta_isCap: false, LB_sub_time: null, LB_sub: null,
        LCD_sta: null, LCD_sta_isCap: false, LCD_sub_time: null, LCD_sub: null,
        CD_sta: null, CD_sta_isCap: false, CD_sub_time: null, CD_sub: null,
        RCD_sta: null, RCD_sta_isCap: false, RCD_sub_time: null, RCD_sub: null,
        RB_sta: null, RB_sta_isCap: false, RB_sub_time: null, RB_sub: null,
        LWB_sta: null, LWB_sta_isCap: false, LWB_sub_time: null, LWB_sub: null,
        LDM_sta: null, LDM_sta_isCap: false, LDM_sub_time: null, LDM_sub: null,
        CDM_sta: null, CDM_sta_isCap: false, CDM_sub_time: null, CDM_sub: null,
        RDM_sta: null, RDM_sta_isCap: false, RDM_sub_time: null, RDM_sub: null,
        RWB_sta: null, RWB_sta_isCap: false, RWB_sub_time: null, RWB_sub: null,
        LM_sta: null, LM_sta_isCap: false, LM_sub_time: null, LM_sub: null,
        LCM_sta: null, LCM_sta_isCap: false, LCM_sub_time: null, LCM_sub: null,
        CM_sta: null, CM_sta_isCap: false, CM_sub_time: null, CM_sub: null,
        RCM_sta: null, RCM_sta_isCap: false, RCM_sub_time: null, RCM_sub: null,
        RM_sta: null, RM_sta_isCap: false, RM_sub_time: null, RM_sub: null,
        LW_sta: null, LW_sta_isCap: false, LW_sub_time: null, LW_sub: null,
        LAM_sta: null, LAM_sta_isCap: false, LAM_sub_time: null, LAM_sub: null,
        CAM_sta: null, CAM_sta_isCap: false, CAM_sub_time: null, CAM_sub: null,
        RAM_sta: null, RAM_sta_isCap: false, RAM_sub_time: null, RAM_sub: null,
        RW_sta: null, RW_sta_isCap: false, RW_sub_time: null, RW_sub: null,
        LF_sta: null, LF_sta_isCap: false, LF_sub_time: null, LF_sub: null,
        CF_sta: null, CF_sta_isCap: false, CF_sub_time: null, CF_sub: null,
        RF_sta: null, RF_sta_isCap: false, RF_sub_time: null, RF_sub: null
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setLineup({
            ...lineup,
            [name]: value
        })
    }
    function uploadFormation (){
        axios.post(`http://localhost:8080/matchlineup/kl1/${id}/update`,lineup)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    function onSubmit(e) {
        e.preventDefault();
        uploadFormation();
        navigate(`/main/matches/update/kleague1/${round}/situation`);
    }
    return (
        <div className='formationArea update'>
            <form onSubmit={onSubmit}>
                {/* 포메이션 */}
                <table className='formation'>
                    <tbody>
                        {/* 공격수 */}
                        <tr>
                            <td className='null' colSpan={2}></td>
                            <td className='LF' style={lineup.LF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LF_sta">선발</label>
                                        <span>
                                            <input type="number" name="LF_sta" id="LF_sta" className='b_noInput' placeholder="LF" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LF_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LF_sta_isCap" id="LF_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LF_sub">교체</label>
                                    <span>
                                        <input type="text" name="LF_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CF' style={lineup.CF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CF_sta">선발</label>
                                        <span>
                                            <input type="number" name="CF_sta" id="CF_sta" className='b_noInput' placeholder="CF" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="CF_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="CF_sta_isCap" id="CF_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="CF_sub">교체</label>
                                    <span>
                                        <input type="text" name="CF_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="CF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RF' style={lineup.RF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RF_sta">선발</label>
                                        <span>
                                            <input type="number" name="RF_sta" id="RF_sta" className='b_noInput' placeholder="RF" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RF_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RF_sta_isCap" id="RF_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RF_sub">교체</label>
                                    <span>
                                        <input type="text" name="RF_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null' colSpan={2}></td>
                        </tr>
                        {/* 2선 */}
                        <tr>
                            <td className='LW'  style={lineup.LW_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LW_sta">선발</label>
                                        <span>
                                            <input type="number" name="LW_sta" id="LW_sta" className='b_noInput' placeholder="LW" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LW_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LW_sta_isCap" id="LW_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LW_sub">교체</label>
                                    <span>
                                        <input type="text" name="LW_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LW_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='LAM'  style={lineup.LAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LAM_sta">선발</label>
                                        <span>
                                            <input type="number" name="LAM_sta" id="LAM_sta" className='b_noInput' placeholder="LAM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LAM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LAM_sta_isCap" id="LAM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LAM_sub">교체</label>
                                    <span>
                                        <input type="text" name="LAM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CAM'  style={lineup.CAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CAM_sta">선발</label>
                                        <span>
                                            <input type="number" name="CAM_sta" id="CAM_sta" className='b_noInput' placeholder="CAM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="CAM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="CAM_sta_isCap" id="CAM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="CAM_sub">교체</label>
                                    <span>
                                        <input type="text" name="CAM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="CAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RAM'  style={lineup.RAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RAM_sta">선발</label>
                                        <span>
                                            <input type="number" name="RAM_sta" id="RAM_sta" className='b_noInput' placeholder="RAM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RAM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RAM_sta_isCap" id="RAM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RAM_sub">교체</label>
                                    <span>
                                        <input type="text" name="RAM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='RW'  style={lineup.RW_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RW_sta">선발</label>
                                        <span>
                                            <input type="number" name="RW_sta" id="RW_sta" className='b_noInput' placeholder="RW" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RW_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RW_sta_isCap" id="RW_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RW_sub">교체</label>
                                    <span>
                                        <input type="text" name="RW_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RW_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                        </tr>
                        {/* 중앙 */}
                        <tr>
                            <td className='LM' style={lineup.LM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LM_sta">선발</label>
                                        <span>
                                            <input type="number" name="LM_sta" id="LM_sta" className='b_noInput' placeholder="LM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LM_sta_isCap" id="LM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LM_sub">교체</label>
                                    <span>
                                        <input type="text" name="LM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='LCM' style={lineup.LCM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LCM_sta">선발</label>
                                        <span>
                                            <input type="number" name="LCM_sta" id="LCM_sta" className='b_noInput' placeholder="LCM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LCM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LCM_sta_isCap" id="LCM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LCM_sub">교체</label>
                                    <span>
                                        <input type="text" name="LCM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LCM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CM' style={lineup.CM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CM_sta">선발</label>
                                        <span>
                                            <input type="number" name="CM_sta" id="CM_sta" className='b_noInput' placeholder="CM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="CM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="CM_sta_isCap" id="CM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="CM_sub">교체</label>
                                    <span>
                                        <input type="text" name="CM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="CM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RCM' style={lineup.RCM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RCM_sta">선발</label>
                                        <span>
                                            <input type="number" name="RCM_sta" id="RCM_sta" className='b_noInput' placeholder="RCM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RCM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RCM_sta_isCap" id="RCM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RCM_sub">교체</label>
                                    <span>
                                        <input type="text" name="RCM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RCM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='RM' style={lineup.RM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RM_sta">선발</label>
                                        <span>
                                            <input type="number" name="RM_sta" id="RM_sta" className='b_noInput' placeholder="RM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RM_sta_isCap" id="RM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RM_sub">교체</label>
                                    <span>
                                        <input type="text" name="RM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                        </tr>
                        {/* 3선 */}
                        <tr>
                            <td className='LWB' style={lineup.LWB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LWB_sta">선발</label>
                                        <span>
                                            <input type="number" name="LWB_sta" id="LWB_sta" className='b_noInput' placeholder="LWB" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LWB_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LWB_sta_isCap" id="LWB_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LWB_sub">교체</label>
                                    <span>
                                        <input type="text" name="LWB_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LWB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='LDM' style={lineup.LDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LDM_sta">선발</label>
                                        <span>
                                            <input type="number" name="LDM_sta" id="LDM_sta" className='b_noInput' placeholder="LDM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LDM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LDM_sta_isCap" id="LDM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LDM_sub">교체</label>
                                    <span>
                                        <input type="text" name="LDM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CDM' style={lineup.CDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CDM_sta">선발</label>
                                        <span>
                                            <input type="number" name="CDM_sta" id="CDM_sta" className='b_noInput' placeholder="CDM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="CDM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="CDM_sta_isCap" id="CDM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="CDM_sub">교체</label>
                                    <span>
                                        <input type="text" name="CDM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="CDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RDM' style={lineup.RDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RDM_sta">선발</label>
                                        <span>
                                            <input type="number" name="RDM_sta" id="RDM_sta" className='b_noInput' placeholder="RDM" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RDM_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RDM_sta_isCap" id="RDM_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RDM_sub">교체</label>
                                    <span>
                                        <input type="text" name="RDM_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='RWB' style={lineup.RWB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RWB_sta">선발</label>
                                        <span>
                                            <input type="number" name="RWB_sta" id="RWB_sta" className='b_noInput' placeholder="RWB" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RWB_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RWB_sta_isCap" id="RWB_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RWB_sub">교체</label>
                                    <span>
                                        <input type="text" name="RWB_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RWB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                        </tr>
                        {/* 최후방 */}
                        <tr>
                            <td className='LB' style={lineup.LB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LB_sta">선발</label>
                                        <span>
                                            <input type="number" name="LB_sta" id="LB_sta" className='b_noInput' placeholder="LB" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LB_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LB_sta_isCap" id="LB_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LB_sub">교체</label>
                                    <span>
                                        <input type="text" name="LB_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='LCD' style={lineup.LCD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LCD_sta">선발</label>
                                        <span>
                                            <input type="number" name="LCD_sta" id="LCD_sta" className='b_noInput' placeholder="LCD" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="LCD_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="LCD_sta_isCap" id="LCD_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="LCD_sub">교체</label>
                                    <span>
                                        <input type="text" name="LCD_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="LCD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CD' style={lineup.CD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CD_sta">선발</label>
                                        <span>
                                            <input type="number" name="CD_sta" id="CD_sta" className='b_noInput' placeholder="CD" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="CD_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="CD_sta_isCap" id="CD_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="CD_sub">교체</label>
                                    <span>
                                        <input type="text" name="CD_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="CD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RCD' style={lineup.RCD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RCD_sta">선발</label>
                                        <span>
                                            <input type="number" name="RCD_sta" id="RCD_sta" className='b_noInput' placeholder="RCD" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RCD_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RCD_sta_isCap" id="RCD_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RCD_sub">교체</label>
                                    <span>
                                        <input type="text" name="RCD_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RCD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                            <td className='RB' style={lineup.RB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RB_sta">선발</label>
                                        <span>
                                            <input type="number" name="RB_sta" id="RB_sta" className='b_noInput' placeholder="RB" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="RB_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="RB_sta_isCap" id="RB_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="RB_sub">교체</label>
                                    <span>
                                        <input type="text" name="RB_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="RB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                        </tr>
                        {/* 골키퍼 */}
                        <tr>
                            <td className='null' colSpan={3}></td>
                            <td className='GK' style={lineup.GK_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="GK_sta">선발</label>
                                        <span>
                                            <input type="number" name="GK_sta" id="GK_sta" className='b_noInput' placeholder="GK" onChange={onChange} />
                                        </span>
                                    </p>
                                    <p>
                                        <label htmlFor="GK_sta_isCap">주장</label>
                                        <span>
                                            <input type="checkbox" name="GK_sta_isCap" id="GK_sta_isCap" value="true" className='capCheckbox' onChange={onChange} />
                                        </span>
                                    </p>
                                </div>
                                {/* 후보 */}
                                <div className='subInputs'>
                                    <label htmlFor="GK_sub">교체</label>
                                    <span>
                                        <input type="text" name="GK_sub_time" className='subTimeInput' placeholder="T" onChange={onChange} />
                                        <input type="number" name="GK_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null' colSpan={3}></td>
                        </tr>
                    </tbody>
                </table>
                <div className='formBtns'>
                    {/* <button className="formBtn" onClick={()=>navigate(-1)}>뒤로</button> */}
                    <input type={"reset"} className="formBtn" value="초기화"/>
                    <input type={"submit"} className="formBtn" value="다음"/>
                </div>
            </form>
        </div>
    );
}

export default UpdateMatchFormation_KL1;