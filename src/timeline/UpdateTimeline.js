import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

function UpdateTimeline() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        e_dept: '',
        e_date: '',
        e_title: '',
        e_refer_url: '',
        e_tags: ''
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        insertEvent();
        navigate(-1);
    }
    function insertEvent(){
        axios.post("http://localhost:8080/addEvent", formData)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    return (
        <div className='updateTimeline contentArea'>
            <h2 className='contentTitle'>UPDATE TIMELINE</h2>
            <form onSubmit={onSubmit}>
                <Table className='updateTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell className='formDept'>분류</TableCell>
                            <TableCell>
                                <select name='e_dept' onChange={onChange}>
                                    <option value="">==선택==</option>
                                    <option value="article">ARTICLE</option>
                                    <option value="notice">NOTICE</option>
                                    <option value="video">VIDEO</option>
                                    <option value="match">MATCH</option>
                                </select>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='formDept'>날짜</TableCell>
                            <TableCell>
                                <input type="date" name="e_date" onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='formDept'>제목</TableCell>
                            <TableCell><input type="text" name="e_title" onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='formDept'>URL</TableCell>
                            <TableCell><input type="text" name="e_refer_url" onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='formDept'>태그</TableCell>
                            <TableCell><input type="text" name="e_tags" onChange={onChange} placeholder="한 칸을 띄운 뒤 등번호를 작성하세요." /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <div className='formBtnsArea'>
                                    <input className="formBtns" type="reset" value="초기화" />
                                    <input className="formBtns" type="submit" value="등록" />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default UpdateTimeline;