import React from 'react';
import styled from 'styled-components';
import {useSetGameScreenState, useGameScreenState} from './GameContext';

const Whole = styled.div`
    width: 960px;
    height: 600px;

    display:flex;

    justify-content: center;
    align-items: center;
`;

const GameMenuLayout = styled.div`
    width: 447px;
    height: 357px;
`;

const GameMenuHeader = styled.div`
    width: 447px;
    height: 147px;
`;

const GameMenuTitleFirst = styled.div`
    width: 445px;
    height: 61px;

    font-family: 'Jua', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 61px;
    display:flex;

    justify-content: flex-start;
    align-items: center;

    color: rgba(0, 0, 0, 0.7);
`;

const GameMenuTitleSecond = styled.div`
    width: 445px;
    height: 82px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 73px;
    line-height: 100px;
    display:flex;

    justify-content: flex-end;
    align-items: flex-end;

    color: rgba(0, 0, 0, 0.7);
`;

const GameMenuBody = styled.div`
    width: 447px;
    height: 210px;

    display:flex;
`;

const GameMenuBodyLeft = styled.div`
    width: 247px;
    height: 207px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

`;

const GameMenuBodyLeftBtn = styled.div`
    width: 230px;
    height: 55px;

    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 55px;
    text-align: center;

    color: rgba(0, 0, 0, 0.63);
`;

const GameMenuAnimation = styled.div`
    width: 200px;
    height: 207px;
    border: 2px solid rgba(0, 0, 0, 0.5);

    font-size: 50px;
    line-height: 207px;
    text-align: center;
`;

function GameMenu(){
    const setGameScreenState = useSetGameScreenState();
    const gameScreenState = useGameScreenState();
    const onGameDescription = () => {
        setGameScreenState(1);
        console.log(gameScreenState);
    };
    const onGameStart = () => {
        setGameScreenState(2);
        console.log(gameScreenState);
    };
    const onGameRanking = () => {
        setGameScreenState(3);
        console.log(gameScreenState);
    };

    return(<Whole>
        <GameMenuLayout>
            <GameMenuHeader>
                <GameMenuTitleFirst>모두 한글</GameMenuTitleFirst>
                <GameMenuTitleSecond>두더지 팡!</GameMenuTitleSecond>
            </GameMenuHeader>
            <GameMenuBody>
                <GameMenuBodyLeft>
                    <GameMenuBodyLeftBtn onClick={onGameDescription}>놀이 설명</GameMenuBodyLeftBtn>
                    <GameMenuBodyLeftBtn onClick={onGameStart}>놀이 시작</GameMenuBodyLeftBtn>
                    <GameMenuBodyLeftBtn onClick={onGameRanking}>순위 보기</GameMenuBodyLeftBtn>
                </GameMenuBodyLeft>
                <GameMenuAnimation>x</GameMenuAnimation>
            </GameMenuBody>
        </GameMenuLayout>
    </Whole>);
}

export default GameMenu;