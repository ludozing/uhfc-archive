import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import './MainPage.scss'

function MainPage() {
    let items = [
        {
            name: "bgImg01",
            imgUrl: "../images/bgImg01.jpg"
        },
        {
            name: "bgImg02",
            imgUrl: "../images/bgImg02.jpg"
        },
        {
            name: "bgImg03",
            imgUrl: "../images/bgImg03.jpg"
        },
        {
            name: "bgImg04",
            imgUrl: "../images/bgImg04.jpg"
        },
        {
            name: "bgImg05",
            imgUrl: "../images/bgImg05.jpg"
        }
    ]
    return (
        <div id="mainPage">
            <Carousel
                autoPlay={true}
                indicators={false}
                swipe={false}
                cycleNavigation={true}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={true}
                fullHeightHover={false}
                animation={"slide"}
            >
                {
                    items.map((item, i)=><Item key={i} item={item} />)
                }
            </Carousel>
            {sessionStorage.admin_pw? 
                <div id='admin_config'>
                    <h3>ADMIN CONSOLE</h3>
                    <div className='a_config'>
                        <a href='#'>Update TIMELINE</a>
                        <a href='#'>Update MATCHES</a>
                    </div>
                </div>
            :""}
        </div>
    );
}
function Item(props){
    return (
        <Paper>
            <div style={{backgroundImage: `url(${props.item.imgUrl})`}}/>
        </Paper>
    )
}

export default MainPage;