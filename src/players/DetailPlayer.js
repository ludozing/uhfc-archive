import React from 'react';
import { Table, TableBody, TableCell, TableRow, Button, TableHead } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import axios from 'axios';
import {FaUndoAlt} from 'react-icons/fa';
import './PlayerList.scss'
import PlayerEvents from './PlayerEvents';
import { API_URL } from '../config/constants';

function dateFormat (k_date) {
    let dateData = k_date.split("-");
    let e_year = dateData[0]+"년";
    let e_month = (dateData[1].charAt(0)==='0'? dateData[1].charAt(1):dateData[1])+"월";
    let e_day = (dateData[2].charAt(0)==='0'? dateData[2].charAt(1):dateData[2])+"일"        
    let e_date = e_year+' '+e_month+' '+e_day;
    return e_date;
}

function DetailPlayer(props) {
    const navigate = useNavigate();
    const param = useParams();
    const {id} = param;

    // 선택된 선수 정보 불러오기
    async function getPlayer(){
        const response = await axios.get(
            `${API_URL}/players/${id}`
        )
        return response.data;
    }


    const state = useAsync(getPlayer);
    const {loading, error, data: player} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!player) return null;
    return (
        <div className='contentArea playerDetail'>
            <Button className='backToList' onClick={()=>navigate('..')}>
                <FaUndoAlt style={{paddingRight: '4px'}}/> 목록으로
            </Button>
            <h3 className='deptTitle'>
                <span className='status'>
                    {player[0].from_youth? <img src='/images/players/youth.png' alt="현대고 출신"/>:""}
                    {player[0].u22player? <span className='u22'>U22</span>:""}
                    {player[0].b_no === 72? <span className='captain'>주장</span>:""}
                    {player[0].b_no === 16||player[0].b_no === 20||player[0].b_no === 23? <span className='captain'>부주장</span>:""}
                </span>
                {player[0].real_name? player[0].real_name:player[0].k_name}
            </h3>
            <div className='playerInfoArea'>
                <div className='picArea'>
                    {player[0].pic_url? <img src={player[0].pic_url} alt="선수 사진"/>:<img src='/images/players/preparing.png' alt="사진 준비 중"/>}
                </div>
                <div className='descArea'>
                    <Table className='dpTable'>
                        <TableBody>
                            <TableRow>
                                <TableCell className='dp_dept'>등번호</TableCell>
                                <TableCell className='dp_value double'>{player[0].b_no}</TableCell>
                                <TableCell className='dp_dept'>포지션</TableCell>
                                <TableCell className='dp_value double'>{player[0].position}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='dp_dept'>등록명</TableCell>
                                <TableCell className='dp_value' colSpan={3}>{player[0].k_name} / {player[0].e_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='dp_dept'>생년월일</TableCell>
                                <TableCell className='dp_value' colSpan={3}>{
                                    dateFormat(new Date(+new Date(player[0].b_day) + 3240 * 10000).toISOString().split("T")[0])
                                }</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='dp_dept'>국적</TableCell>
                                <TableCell className='dp_value' colSpan={3}>{player[0].nationality}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='dp_dept'>신장</TableCell>
                                <TableCell className='dp_value double'>{player[0].height}cm</TableCell>
                                <TableCell className='dp_dept'>체중</TableCell>
                                <TableCell className='dp_value double'>{player[0].weight}kg</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='dp_dept'>등록기간</TableCell>
                                <TableCell className='dp_value' colSpan={3}>{player[0].reg_season}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className='playerEventsArea'>
                <h3 className='deptTitle'>RELATED EVENTS</h3>
                <Table>
                    <TableHead className='peTh'>
                        <TableRow>
                            <TableCell className='pe_date'>날짜</TableCell>
                            <TableCell className='pe_dept'>분류</TableCell>
                            <TableCell className='pe_title'>제목</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='peTb'>
                        <PlayerEvents plyr_b_no={id}/>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default DetailPlayer;