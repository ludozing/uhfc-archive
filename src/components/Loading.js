import React, {useEffect, useState} from 'react';

function Loading(props) {
    const ellipsis = "... "
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(text+ellipsis[count]);
            setCount(count+1);
        }, 1000);
        if(count === ellipsis.length){
            setText("");
            setCount(0);
        }
        return () => clearInterval(interval)
    }, [count, text])
    return (
        <div className='loadingPage'>
            <div className='animationArea'>
                <img src='/images/mita.png' className='burningMita' alt='미타'/>
            </div>
            <p>로딩 중입니다{text}</p>
        </div>
    );
}

export default Loading;