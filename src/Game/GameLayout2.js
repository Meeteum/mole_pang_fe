import React from "react";
import styled from "styled-components";
import GameScreen from "./GameScreen";
import Modal from "./Modal";
import GameMenu from "./GameMenu";
import {useSetGameScreenState, useGameScreenState} from "./GameContext";

const Whole = styled.div`
    width: 960px;
    height: 600px;

    border: 1px solid black;

    // 추후, 게임 제작 시 삭제 요소
    text-align: center;
    line-height: 632px;

    // width : 100%;
    // height : 100%;
`;

// Contain Game Scrren in Layout
function GameLayout2(){
    const gameScreenState = useGameScreenState();
    const setGameScreenState = useSetGameScreenState();

    let gameScreen = null;
    if(gameScreenState === 1)
    {
        gameScreen = <Modal/>;
    }
    else if(gameScreenState === 2){
        gameScreen = <GameScreen/>;
    }
    else if(gameScreenState === 3){
        gameScreen = <Modal/>;
    }
    else{
        gameScreen = <GameMenu/>;
    }

    return (
    <Whole>
        {gameScreen}
    </Whole>
    );
}

export default GameLayout2;