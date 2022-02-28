import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './intro.css';

function Intro(props) {
    const titleText = "UHFC ARCHIVE 2022"
    const textCursor = "|"
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(text+titleText[count]);
            setCount(count+1)
        }, 100);
        if(count === titleText.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    })

    return (
        <div className="Intro">
            <div>
                <h1 className='title'>{count===titleText.length? text : text+textCursor}</h1>
                <p className={count===titleText.length? 'on':'off'}>Archived by <strong>statelyblu</strong></p>
                <Link to={"/main"} className={count===titleText.length? 'on':'off'}>Enter</Link>
            </div>
        </div>
    );
}

export default Intro;