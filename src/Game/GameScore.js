import React from "react";
import styled from "styled-components";

const Whole = styled.div`

    width: 960px;
    height: 70px;
 
    display: flex;

    // margin: 0 auto;
    // justify-content: center;
    // align-items: center;

    // border : 1px solid blue;

`;

const BasicTxt = styled.div`
    width: 240px;
    height: 70px;

    // border : 1px solid red;


    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 70px;
    text-align: center;
    // font-weight: bold;
    // font-size: 14px;
    // // font-size: 2.6rem;    //45
    // // font-size: 45px;
    // line-height: 70px;


`;

const GameScoreTxt = styled.div`
    width: 240px;
    height: 70px;

    // font-weight: 400;
    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
    // border : 1px solid red;
`;

const GameTimeTxt = styled.div`

    
    width: 240px;
    height: 70px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
`; 

function GameScore({score, time}){

    return (
    <Whole>
        <BasicTxt>점수 </BasicTxt>
        <GameScoreTxt>100</GameScoreTxt>
        <BasicTxt>제한 시간 </BasicTxt>
        <GameTimeTxt>10</GameTimeTxt>
        
    </Whole>
    )
}

export default GameScore;