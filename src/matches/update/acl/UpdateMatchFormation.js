import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function UpdateMatchFormation_ACL({round}) {
    const navigate = useNavigate();
    const [lineup, setLineup] = useState({
        GK_sta: '', GK_sta_isCap: false, GK_sub_time: '', GK_sub: '',
        LB_sta: '', LB_sta_isCap: false, LB_sub_time: '', LB_sub: '',
        LCD_sta: '', LCD_sta_isCap: false, LCD_sub_time: '', LCD_sub: '',
        CD_sta: '', CD_sta_isCap: false, CD_sub_time: '', CD_sub: '',
        RCD_sta: '', RCD_sta_isCap: false, RCD_sub_time: '', RCD_sub: '',
        RB_sta: '', RB_sta_isCap: false, RB_sub_time: '', RB_sub: '',
        LWB_sta: '', LWB_sta_isCap: false, LWB_sub_time: '', LWB_sub: '',
        LDM_sta: '', LDM_sta_isCap: false, LDM_sub_time: '', LDM_sub: '',
        CDM_sta: '', CDM_sta_isCap: false, CDM_sub_time: '', CDM_sub: '',
        RDM_sta: '', RDM_sta_isCap: false, RDM_sub_time: '', RDM_sub: '',
        RWB_sta: '', RWB_sta_isCap: false, RWB_sub_time: '', RWB_sub: '',
        LM_sta: '', LM_sta_isCap: false, LM_sub_time: '', LM_sub: '',
        LCM_sta: '', LCM_sta_isCap: false, LCM_sub_time: '', LCM_sub: '',
        CM_sta: '', CM_sta_isCap: false, CM_sub_time: '', CM_sub: '',
        RCM_sta: '', RCM_sta_isCap: false, RCM_sub_time: '', RCM_sub: '',
        RM_sta: '', RM_sta_isCap: false, RM_sub_time: '', RM_sub: '',
        LW_sta: '', LW_sta_isCap: false, LW_sub_time: '', LW_sub: '',
        LAM_sta: '', LAM_sta_isCap: false, LAM_sub_time: '', LAM_sub: '',
        CAM_sta: '', CAM_sta_isCap: false, CAM_sub_time: '', CAM_sub: '',
        RAM_sta: '', RAM_sta_isCap: false, RAM_sub_time: '', RAM_sub: '',
        RW_sta: '', RW_sta_isCap: false, RW_sub_time: '', RW_sub: '',
        LF_sta: '', LF_sta_isCap: false, LF_sub_time: '', LF_sub: '',
        CF_sta: '', CF_sta_isCap: false, CF_sub_time: '', CF_sub: '',
        RF_sta: '', RF_sta_isCap: false, RF_sub_time: '', RF_sub: ''
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setLineup({
            ...lineup,
            [name]: value
        })
    }
    return (
        <div className='formationArea update'>
            <form>
                {/* 포메이션 */}
                <table className='formation'>
                    <tbody>
                        {/* 공격수 */}
                        <tr>
                            <td className='null'></td>
                            <td className='LF' style={lineup.LF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LF_sta">선발</label>
                                        <span>
                                            <input type="text" name="LF_sta" id="LF_sta" className='b_noInput' placeholder="LF" onChange={onChange} />
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
                                        <input type="text" name="LF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CF' style={lineup.CF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CF_sta">선발</label>
                                        <span>
                                            <input type="text" name="CF_sta" id="CF_sta" className='b_noInput' placeholder="CF" onChange={onChange} />
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
                                        <input type="text" name="CF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RF' style={lineup.RF_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RF_sta">선발</label>
                                        <span>
                                            <input type="text" name="RF_sta" id="RF_sta" className='b_noInput' placeholder="RF" onChange={onChange} />
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
                                        <input type="text" name="RF_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null'></td>
                        </tr>
                        {/* 2선 */}
                        <tr>
                            <td className='LW'  style={lineup.LW_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LW_sta">선발</label>
                                        <span>
                                            <input type="text" name="LW_sta" id="LW_sta" className='b_noInput' placeholder="LW" onChange={onChange} />
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
                                        <input type="text" name="LW_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='LAM'  style={lineup.LAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LAM_sta">선발</label>
                                        <span>
                                            <input type="text" name="LAM_sta" id="LAM_sta" className='b_noInput' placeholder="LAM" onChange={onChange} />
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
                                        <input type="text" name="LAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CAM'  style={lineup.CAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CAM_sta">선발</label>
                                        <span>
                                            <input type="text" name="CAM_sta" id="CAM_sta" className='b_noInput' placeholder="CAM" onChange={onChange} />
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
                                        <input type="text" name="CAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RAM'  style={lineup.RAM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RAM_sta">선발</label>
                                        <span>
                                            <input type="text" name="RAM_sta" id="RAM_sta" className='b_noInput' placeholder="RAM" onChange={onChange} />
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
                                        <input type="text" name="RAM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RW'  style={lineup.RW_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RW_sta">선발</label>
                                        <span>
                                            <input type="text" name="RW_sta" id="RW_sta" className='b_noInput' placeholder="RW" onChange={onChange} />
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
                                        <input type="text" name="RW_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
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
                                            <input type="text" name="LM_sta" id="LM_sta" className='b_noInput' placeholder="LM" onChange={onChange} />
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
                                        <input type="text" name="LM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='LCM' style={lineup.LCM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LCM_sta">선발</label>
                                        <span>
                                            <input type="text" name="LCM_sta" id="LCM_sta" className='b_noInput' placeholder="LCM" onChange={onChange} />
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
                                        <input type="text" name="LCM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CM' style={lineup.CM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CM_sta">선발</label>
                                        <span>
                                            <input type="text" name="CM_sta" id="CM_sta" className='b_noInput' placeholder="CM" onChange={onChange} />
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
                                        <input type="text" name="CM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RCM' style={lineup.RCM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RCM_sta">선발</label>
                                        <span>
                                            <input type="text" name="RCM_sta" id="RCM_sta" className='b_noInput' placeholder="RCM" onChange={onChange} />
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
                                        <input type="text" name="RCM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RM' style={lineup.RM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RM_sta">선발</label>
                                        <span>
                                            <input type="text" name="RM_sta" id="RM_sta" className='b_noInput' placeholder="RM" onChange={onChange} />
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
                                        <input type="text" name="RM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
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
                                            <input type="text" name="LWB_sta" id="LWB_sta" className='b_noInput' placeholder="LWB" onChange={onChange} />
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
                                        <input type="text" name="LWB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='LDM' style={lineup.LDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LDM_sta">선발</label>
                                        <span>
                                            <input type="text" name="LDM_sta" id="LDM_sta" className='b_noInput' placeholder="LDM" onChange={onChange} />
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
                                        <input type="text" name="LDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CDM' style={lineup.CDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CDM_sta">선발</label>
                                        <span>
                                            <input type="text" name="CDM_sta" id="CDM_sta" className='b_noInput' placeholder="CDM" onChange={onChange} />
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
                                        <input type="text" name="CDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RDM' style={lineup.RDM_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RDM_sta">선발</label>
                                        <span>
                                            <input type="text" name="RDM_sta" id="RDM_sta" className='b_noInput' placeholder="RDM" onChange={onChange} />
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
                                        <input type="text" name="RDM_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RWB' style={lineup.RWB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RWB_sta">선발</label>
                                        <span>
                                            <input type="text" name="RWB_sta" id="RWB_sta" className='b_noInput' placeholder="RWB" onChange={onChange} />
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
                                        <input type="text" name="RWB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
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
                                            <input type="text" name="LB_sta" id="LB_sta" className='b_noInput' placeholder="LB" onChange={onChange} />
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
                                        <input type="text" name="LB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='LCD' style={lineup.LCD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="LCD_sta">선발</label>
                                        <span>
                                            <input type="text" name="LCD_sta" id="LCD_sta" className='b_noInput' placeholder="LCD" onChange={onChange} />
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
                                        <input type="text" name="LCD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='CD' style={lineup.CD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="CD_sta">선발</label>
                                        <span>
                                            <input type="text" name="CD_sta" id="CD_sta" className='b_noInput' placeholder="CD" onChange={onChange} />
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
                                        <input type="text" name="CD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RCD' style={lineup.RCD_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RCD_sta">선발</label>
                                        <span>
                                            <input type="text" name="RCD_sta" id="RCD_sta" className='b_noInput' placeholder="RCD" onChange={onChange} />
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
                                        <input type="text" name="RCD_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='RB' style={lineup.RB_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="RB_sta">선발</label>
                                        <span>
                                            <input type="text" name="RB_sta" id="RB_sta" className='b_noInput' placeholder="RB" onChange={onChange} />
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
                                        <input type="text" name="RB_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                        </tr>
                        {/* 골키퍼 */}
                        <tr>
                            <td className='null' colSpan={2}></td>
                            <td className='GK' style={lineup.GK_sta?{backgroundColor:'var(--blue-color)', color:'#fff'}:{}}>
                                {/* 선발 */}
                                <div className='lineupInputs'>
                                    <p>
                                        <label htmlFor="GK_sta">선발</label>
                                        <span>
                                            <input type="text" name="GK_sta" id="GK_sta" className='b_noInput' placeholder="GK" onChange={onChange} />
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
                                        <input type="text" name="GK_sub" className='subB_noInput' placeholder="No." onChange={onChange} />
                                    </span>
                                </div>
                            </td>
                            <td className='null' colSpan={2}></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default UpdateMatchFormation_ACL;