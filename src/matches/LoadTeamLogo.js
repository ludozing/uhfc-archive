import React from 'react';

function LoadTeamLogo({teamName}) {
    let fileName;
    let teamColor;
    switch(teamName){
        case '전북 현대':
            fileName = 'jeonbukhyundai.svg';
            teamColor = '#034f36';
            break;
        case '대구 FC':
            fileName = 'daegufc.svg';
            teamColor = '#59B8F6';
            break;
        case '제주 UTD':
            fileName = 'jejuutd.svg';
            teamColor = '#f58026';
            break;
        case '수원 FC':
            fileName = 'suwonfc.svg';
            teamColor = '#00396f';
            break;
        case '수원 삼성':
            fileName = 'suwonsamsung.svg';
            teamColor = '#194996';
            break;
        case 'FC 서울':
            fileName = 'fcseoul.svg';
            teamColor = '#b5191a';
            break;
        case '인천 UTD':
            fileName = 'incheonutd.svg';
            teamColor = '#2e57a6';
            break;
        case '포항 스틸러스':
            fileName = 'pohangsteelers.svg';
            teamColor = '#ad181d';
            break;
        case '성남 FC':
            fileName = 'seongnamfc.svg';
            teamColor = '#000';
            break;
        case '강원 FC':
            fileName = 'gangwonfc.svg';
            teamColor = '#dd5828';
            break;
        case '김천 상무':
            fileName = 'gimcheonsangmu.svg';
            teamColor = '#B81C22';
            break;
    }
    return (
        <div className = 'againstTeam'>
            <img className='teamLogo' src={`/images/teams/${fileName}`} alt={teamName} />
            <h4 className='teamName' style={{color: teamColor}}>{teamName}</h4>
        </div>
    );
}

export default LoadTeamLogo;