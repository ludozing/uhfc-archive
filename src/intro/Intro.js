import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './intro.css';

function Intro(props) {
    const titleText = "UHFC ARCHIVE 2022"
    const textCursor = "|"
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const keyEventTag = useRef();
    useEffect(()=>{
        keyEventTag.current.focus();
        const interval = setInterval(()=>{
            setText(text+titleText[count]);
            setCount(count+1)
        }, 100);
        if(count === titleText.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    })
    const toMain = (e) => {
        if(e.key === "Enter") {
            navigate('/main')
        }
    }

    return (
        <div className="Intro">
            <div>
                <h1 className='title'>{count===titleText.length? text : text+textCursor}</h1>
                <p className={count===titleText.length? 'on':'off'}>Archived by <strong>statelyblu</strong></p>
                <Link to={"/main"} className={count===titleText.length? 'on':'off'}>Enter</Link>
                <input ref={keyEventTag} onKeyPress={toMain} />
            </div>
        </div>
    );
}

export default Intro;