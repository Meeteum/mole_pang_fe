import React from "react";
import styled, {css} from "styled-components";
import BaseModal, {CloseArea} from "./BaseModal";
import {BsX} from "react-icons/bs";
import { useSetGameScreenState, useGameScreenState } from "../GameContext";

const Whole = styled.div`
    width: 537px;
    height: 304px;
    // border : 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;

    // border : 1px solid;
`;

const RankTxt = styled.p`
    width: 185px;
    height: 40px;

    // border : 1px solid;
    margin-top: -5px;
    margin-bottom: 15px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 44px;
    text-align: center;

    color: rgba(0, 0, 0, 0.7);
`;

const RankBox = styled.div`
    width: 500px;
    height: 243px;
    left: 228px;
    top: 242px;

    background: rgba(196, 196, 196, 0.3);
    border-radius: 10px;
`;

const RankHeader = styled.div`
    width: 500px;
    height: 43px;
    display: flex;
    // flex-direction: column;

    background: #C4C4C4;  
    // border:1px solid;
    border-radius: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 43px;
    text-align: center;

    color: rgba(0, 0, 0, 0.45);
`;

const RankScrollBox = styled.div`
    width: 520px;
    height: 215px;
    margin-top: 0px;
    // border: 1px solid;
    overflow: auto;

    background: #C4C4C4;
    border-radius: 5px;
`;

const RankHeaderTxt = styled.p`
    width: 250px;
    height: 43px;
    margin-top: 0px;
    // border: 1px solid;

    background: ${(props)=>props.backColor}
    // background: #C4C4C4;
    // background: #FFFEFE;
    border-radius: 5px;
    
`;

const TotalRankHeaderTxt = styled.p`
    width: 250px;
    height: 43px;
    margin-top: 0px;
    // border: 1px solid;
    // background-color: #ffffff;
    
    // background: #C4C4C4;
    // background: #FFFEFE;
    border-radius: 5px;
`;

const TenRankHeaderTxt = styled.p`
    width: 250px;
    height: 43px;
    margin-top: 0px;
    // border: 1px solid;

    // background: #C4C4C4;
    background: #FFFEFE;
    border-radius: 5px;
`;

const RankRow = styled.div`
    width: 500px;
    height: 40px;

    // border: 1px solid;

    display: flex;

    ${(props)=>(
        props.rankNum % 2 === 0 && css`
        background: #C4C4C4
        `
    )}

    // background: #C4C4C4;
    background: white;
    border-radius: 5px;
`;

const RankNumAndScore = styled.p`
    width: 44px;
    height: 18px;

    margin-left: 25px;

    // border : 1px solid;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 6px;
    /* identical to box height */

    text-align: center;

    color: rgba(0, 0, 0, 0.45);
`;

const RankNick = styled.p`
    width: 107px;
    height: 19px;

    margin-right: 28px;
    // border : 1px solid;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 12px;
    text-align: center;

    color: rgba(0, 0, 0, 0.45);
`;

const RankDate = styled.p`
    width: 97px;
    height: 19px;

    margin-left: 55px;
    // border : 1px solid;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: center;

    color: rgba(0, 0, 0, 0.45);
`;


function RankModal({isMenuRank}){

    const onClose = () => {
        setGameScreenState(0);
    };
    const onTotalRank = () => {};
    const onTenRank = () => {};

    const setGameScreenState = useSetGameScreenState();

    let rankData = [];

    for(let i=0;i<20;i++){
        rankData.push({
            "RankNum": i,
            "RankNick": "윤야미야아야" + String(i),
            "RankScore": i*100,
            "RankDate": "2020. 10. 09",
        });
    }

    return (
    <BaseModal>
        <Whole>
            <CloseArea>
                <BsX onClick={onClose} size="42" color="#C4C4C4" /> 
            </CloseArea>
            <RankTxt>순위</RankTxt>
            <RankBox >
                {isMenuRank && <RankHeader>
                    <TotalRankHeaderTxt onClick={onTotalRank}>전체 순위</TotalRankHeaderTxt>
                    <TenRankHeaderTxt onClick={onTenRank}>순위 10</TenRankHeaderTxt>
                </RankHeader>}
                <RankScrollBox>
                {rankData.map((data)=>(
                <RankRow rankNum={data.RankNum}>
                    <RankNumAndScore>{data.RankNum}</RankNumAndScore>
                    <RankNick>{data.RankNick}</RankNick>
                    <RankNumAndScore>{data.RankScore}</RankNumAndScore>
                    <RankDate>{data.RankDate}</RankDate>
                </RankRow>
                ))}
                </RankScrollBox>

                {/* <RankRow>
                    <RankNumAndScore>1</RankNumAndScore>
                    <RankNick>윤야미야야야야</RankNick>
                    <RankNumAndScore>600</RankNumAndScore>
                    <RankDate>2020. 10. 09</RankDate>
                </RankRow>
                <RankRow></RankRow> */}
                {/* <RankRow></RankRow>
                <RankRow></RankRow>
                <RankRow></RankRow> */}
            </RankBox>
        </Whole>
    </BaseModal>
    );
}

export default RankModal;