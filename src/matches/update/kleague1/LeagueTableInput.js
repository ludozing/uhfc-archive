import React, {useState} from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/constants';
import { useNavigate, useParams } from 'react-router-dom';

function LeagueTableInput({table, round}) {
    const navigate = useNavigate();
    const param = useParams();
    const {id} = param;
    const defaultInputValue = table.map(item => {
        const dataNo = table.findIndex(obj => obj.team === item.team)
        return(
            {
                dataNo: dataNo, 
                matchResult_KL1_round: item.matchResult_KL1_round+1, 
                team: item.team, 
                win: item.win, 
                draw: item.draw, 
                lose: item.lose, 
                points: item.points, 
                g: item.g, 
                a: item.a, 
                gd: item.gd,
                logo_url: item.logo_url,
                color: item.color
            }
        )
    })
    const [ tableInput, setTableInput ] = useState(defaultInputValue)
    const onChange = (e) => {
        const {name, value, className} = e.target
        let realValue = parseInt(value)
        let newTable = [...tableInput];
        newTable[className] = {
            ...tableInput[className], [name]:realValue
        }
        setTableInput(newTable)
    }
    function uploadLeagueTable(){
        axios.post(`${API_URL}/leaguetable/kl1/${id}/update`,tableInput)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    function onSubmit(e) {
        e.preventDefault();
        uploadLeagueTable();
        navigate(`/main/matches`);
    }
    return (
        <form onSubmit={onSubmit}>
            <table className='leagueTable form'>
                <thead>
                    <tr>
                        <th>팀</th>
                        <th>승점</th>
                        <th>승</th>
                        <th>무</th>
                        <th>패</th>
                        <th>득점</th>
                        <th>실점</th>
                        <th>득실차</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableInput.map(data => {
                            if(data.team==="울산 현대"){
                                return(
                                    <tr key={data.dataNo} className='uhfc' style={{backgroundColor: `${data.color}`}}>
                                        <td className='teamLogo'>
                                            <img src={data.logo_url} alt={data.team}/>
                                            <p>{data.team}</p>
                                        </td>
                                        <td className='points'><input type={"number"} name={"points"} className={data.dataNo} value={data.points} onChange={onChange}/></td>
                                        <td className='win'><input type={"number"} name={"win"} className={data.dataNo} value={data.win} onChange={onChange}/></td>
                                        <td className='draw'><input type={"number"} name={"draw"} className={data.dataNo} value={data.draw} onChange={onChange}/></td>
                                        <td className='lose'><input type={"number"} name={"lose"} className={data.dataNo} value={data.lose} onChange={onChange}/></td>
                                        <td className='g'><input type={"number"} name={"g"} className={data.dataNo} value={data.g} onChange={onChange}/></td>
                                        <td className='a'><input type={"number"} name={"a"} className={data.dataNo} value={data.a} onChange={onChange}/></td>
                                        <td className='gd'><input type={"number"} name={"gd"} className={data.dataNo} value={data.gd} onChange={onChange}/></td>
                                    </tr>
                                )
                            }else {
                                return(
                                    <tr key={data.dataNo} style={{backgroundColor: `${data.color}`}}>
                                        <td className='teamLogo'>
                                            <img src={data.logo_url} alt={data.team}/>
                                            <p>{data.team}</p>
                                        </td>
                                        <td className='points'><input type={"number"} name={"points"} className={data.dataNo} value={data.points} onChange={onChange}/></td>
                                        <td className='win'><input type={"number"} name={"win"} className={data.dataNo} value={data.win} onChange={onChange}/></td>
                                        <td className='draw'><input type={"number"} name={"draw"} className={data.dataNo} value={data.draw} onChange={onChange}/></td>
                                        <td className='lose'><input type={"number"} name={"lose"} className={data.dataNo} value={data.lose} onChange={onChange}/></td>
                                        <td className='g'><input type={"number"} name={"g"} className={data.dataNo} value={data.g} onChange={onChange}/></td>
                                        <td className='a'><input type={"number"} name={"a"} className={data.dataNo} value={data.a} onChange={onChange}/></td>
                                        <td className='gd'><input type={"number"} name={"gd"} className={data.dataNo} value={data.gd} onChange={onChange}/></td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
            <div className='formBtns'>
                    <input type={"reset"} className="formBtn" value="초기화" onClick={()=>{setTableInput(defaultInputValue)}}/>
                    <input type={"submit"} className="formBtn" value="등록"/>
            </div>
        </form>
    );
}

export default LeagueTableInput;