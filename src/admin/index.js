import React, { useState } from 'react';
import './AdminLogin.scss';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin(props) {
    const [ putPw, setPutPw ] = useState({
        pw:''
    });
    const onClick = (e)=>{
        e.preventDefault();
        if(putPw.pw.length < 4) {
            const clickedValue = e.target.value;
            if (clickedValue!=undefined){
                setPutPw({
                    ...putPw,
                    pw: putPw.pw + clickedValue})
            }
            else {
                console.log(clickedValue)
            }
        }
    }
    const onDelete = (e) => {
        e.preventDefault();
        setPutPw({
            ...putPw,
            pw: putPw.pw.slice(0,-1)
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        tryLogin();
        // setPutPw('');
        // navigate(-1);
        console.log(putPw)
    }
    const tryLogin = () => {
        axios.post("http://localhost:8080/adminChk", putPw)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err)
        })
    }
    const navigate = useNavigate();

    return (
        <div className='adminLoginPw'>
            <form name='관리자비밀번호' onSubmit={onSubmit}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={3}>
                                    <input type="text" value={putPw.pw} readOnly/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><button onClick={onClick} value={1}>1</button></TableCell>
                            <TableCell><button onClick={onClick} value={2}>2</button></TableCell>
                            <TableCell><button onClick={onClick} value={3}>3</button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><button onClick={onClick} value={4}>4</button></TableCell>
                            <TableCell><button onClick={onClick} value={5}>5</button></TableCell>
                            <TableCell><button onClick={onClick} value={6}>6</button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><button onClick={onClick} value={7}>7</button></TableCell>
                            <TableCell><button onClick={onClick} value={8}>8</button></TableCell>
                            <TableCell><button onClick={onClick} value={9}>9</button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}><button type='submit' className='loginBtn'>LOGIN</button></TableCell>
                            <TableCell><button className='backwardBtn' onClick={onDelete}>←</button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default AdminLogin;