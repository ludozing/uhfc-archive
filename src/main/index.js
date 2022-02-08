import React, { useState, useCallback, useLayoutEffect } from 'react';
import './MainPage.scss'

function MainPage() {
    const [ currentLoopIndex, setCurrentLoopIndex ] = useState(0);
    let lastImgDiv = document.querySelector(".bgImg05");
    let mainPage = document.querySelector("#mainPage");
    console.log(mainPage)
    mainPage.appendChild(lastImgDiv);
    useLayoutEffect(()=>{
        if(currentLoopIndex<5){
            setInterval(()=>{
                setCurrentLoopIndex(currentLoopIndex +1 );
            }, 3000)
        }else if(currentLoopIndex=5){
            setCurrentLoopIndex(0);
        }
        console.log(currentLoopIndex)
    })

    return (
        <div id="mainPageFrame">
            <div id="mainPage" style={`left:calc(${currentLoopIndex} * 100%)`}>
                <div className='mainBg bgImg01' />
                <div className='mainBg bgImg02' />
                <div className='mainBg bgImg03' />
                <div className='mainBg bgImg04' />
                <div className='mainBg bgImg05' />
            </div>
        </div>
    );
}

export default MainPage;