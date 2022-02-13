import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import axios from 'axios';
import {FaUndoAlt} from 'react-icons/fa';

function DetailPlayer(props) {
    const param = useParams();
    const {id} = param;
    async function getPlayer(){
        const response = await axios.get(
            `http://localhost:8080/players/${id}`
        )
        return response.data;
    }
    const state = useAsync(getPlayer);
    const {loading, error, data: player} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!player) return null;
    return (
        <div className='contentArea'>
            <Link to={"/main/players"}><FaUndoAlt/>목록으로</Link>
            <div>
            {/* 이미지 */}
            </div>
            <div>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>등번호</TableCell>
                            <TableCell>{player[0].b_no}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>포지션</TableCell>
                            <TableCell>{player[0].position}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>한글이름</TableCell>
                            <TableCell>{player[0].k_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>영문이름</TableCell>
                            <TableCell>{player[0].e_name}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default DetailPlayer;